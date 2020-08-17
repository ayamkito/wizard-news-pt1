

const express = require("express");
const app = express()
const postList = require("./views/postList");
const postDetail = require("./views/postDetails");
const postbank = require("./postbank");

app.use(express.static('public'));



app.get("/", (req, res) => {
  const posts = postbank.list();
  res.send(postList(posts))
});


app.get("/posts/:id", (req, res)=>{
  const id = req.params.id;
  const post = postbank.find(id);
  if(!post.id){
    throw new Error("not found")
    
      }
      else
      {
        res.send(postDetail(post))
      }
});



const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
}); 
