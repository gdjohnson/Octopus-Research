const express = require('express')
const fs = require('fs')
const index = require('./index')
const style = require('./style')
// const script = require('./script')
const { renderMd } = require('./markdown-config')
const app = express()
const port = 3000

const buildRoutes = (folders) => {
  folders.forEach(folder => {
    app.get(`/pages/${folder}/:id`, (req , res) => {
      fs.readFile(`./pages/${folder}/${req.params.id}.md`, 'utf8', (err, data) => {
        if (err) return res.send('404 Not Found')
        const mdFile = renderMd('@[toc]\n\n' + data)
        const title = index.signifiedToSignifier(req.params.id)
        return res.send(style + `<h1 class='title'>${title}</h1>` + mdFile)
      })
    })
  });
}

buildRoutes(['meta', 'notes'])

app.use(express.static('pdf_library'))
app.use(express.static('assets'))

// Splash
app.get('/', (req, res) => res.send(style + index.getHomePage()))

// If a route isn't working, check router stack:
// console.log(app._router.stack)
app.listen(port, () => console.log(`TK21, now listening at http://localhost:${port}`))