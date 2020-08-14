const express = require("express");
const app = express();
const postbank = require("./postbank");
const morgan =require("morgan")

app.use(morgan("dev"));
app.use(express.static('public'));


app.get("/", (req, res) => {
  const posts = postbank.list();

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href = "posts/${post.id}">${post.title}<a/>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
 </html>`
 
  res.send(html)
  
});
app.get("/posts/:id", (req, res)=>{
  const id = req.params.id;
  const post = postbank.find(id);
  if(!post.id){
throw new Error("not found")

  }
  else
  {
    const html = `<!DOCTYPE html>
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
 
 res.send(html)
}

  console.log(post)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
}); 
