module.exports = `
  <style>
    body {
        margin: 5vh 20vw;
    }
    // .section {
    //   column-width: 145px;
    //   column-gap: 1em;
    // }
    .section > p {
      padding: 4px 0;
      margin: 0;
    }
    a {
      color: black;
    }
    .title {
      font-size: 42px;
      font-weight: bold;
    }
    blockquote {
      color: gray;
    }
    img {
      max-width: 40vw;
      display: block;
      margin: 25px auto;
    }
    img + em {
      font-style: normal;
      display: inherit;
      text-align: center;
      font-size: 90%;
    }
    code {
      line-height: .9;
      font-family: auto;
      font-style: italic;
      float: right;
      margin: 0 15px 5px;
      font-size: 90%;
      max-width: 150px;
    }
  </style>
`
