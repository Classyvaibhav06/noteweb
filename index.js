const express = require("express");
let app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
    console.log(files);
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    });
});

app.get("/file/:filename",function(req,res){
  fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
    res.render('show',{filename: req.params.filename,filedata:filedata})
  })
})

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    if (err) return res.send("Error deleting file");
    res.redirect("/");
  });
});


app.listen(3000, () => {
  console.log("its working! at localhost:3000/");
});
