
const htmlTag = require("html-template-tag");


module.exports = (post) => {
  const html = htmlTag`<!DOCTYPE html>
      <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>Wizard News</header>
          <div class='news-item'>
            <p>
              ${post.title}
              <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
              ${post.content}
            </small>
          </div>
        </div>
      </body>
     </html>`
  return html
}

