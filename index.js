const fs = require('fs')
const md = require('markdown-it')()

const signifiedToSignifier = (str) => {
  splitStr = str[0].toUpperCase();
  for (let i = 1; i < str.length ; i++) {
    const isYear = Number.isNaN(Number(str[i - 1])) 
      && !Number.isNaN(Number(str[i]))  
    const isCapital = str[i].toLowerCase() !== str[i];
    if (isYear || isCapital) {
      splitStr += (' ' + str[i])
    } else {
      splitStr += str[i]
    }
  }
  return splitStr
}

const getLinkList = (path) => {
  let linkList = ''
  
  fs.readdirSync(`./${path}`)
    .filter((file) => file.indexOf('.') !== 0 && !file.includes('.js'))
    .sort()
    .forEach((file) => {
      // remove extension from file name
      const fileSE = file.slice(0, file.length - 3)
      // convert filename to page title
      const title = signifiedToSignifier(fileSE)
      const link = `[${title}](${path}/${fileSE})\n\n`
      linkList += link
    })
  
  return linkList
}

const getHomePage = () => {
  const header = '# Octopus Research \n'
  const metaHeader = '## Meta \n'
  const metaList = getLinkList('pages/meta')
  const notesHeader = '## Notes \n';
  const notesList = getLinkList('pages/notes')
  const divOpen = `\n <div class='section'> \n \n`
  const divClose = '</div>'

  return (
    md.render(header)
    + md.render(metaHeader)
    + divOpen
    + md.render(metaList)
    + divClose
    + md.render(notesHeader)
    + divOpen
    + md.render(notesList)
    + divClose
  )
}

module.exports = { getHomePage, getLinkList, signifiedToSignifier }