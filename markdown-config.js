const fs = require('fs')
const _ = require('lodash')

const getFileList = (folders) => {
  const files = {}
  folders.forEach((folder) => {
      fs.readdirSync(`./pages/${folder}`).forEach((file) => {
        fileSE = file.slice(0, file.length - 3)
        files[fileSE] = `./pages/${folder}/${fileSE}`
      })
    })
  return files
}

const customWikiLinks = (label) => {
  label = _.camelCase(label)
  fileList = getFileList(['meta', 'notes'])
  return fileList[label]
}

const mdConfig = { linkify: true, html: true, typographer: true };

const wikiLinksConfig = {
  linkpattern: '/\[\[([\w\s/]+)(\|([\w\s/]+))?\]\]/',
  generatePageNameFromLabel: customWikiLinks,
  uriSuffix: '',
}
  
const md = require('markdown-it')(mdConfig)
  .use(require('markdown-it-container'))
  .use(require('markdown-it-anchor'))
  .use(require('markdown-it-wikilinks')(wikiLinksConfig))
  .use(require('markdown-it-wiki-toc'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'))
  .use(require('markdown-it-meta'))

const renderMd = (str) => md.render(str)

module.exports = { renderMd, getFileList }