var express = require('express');
const fileUpload = require('express-fileupload');
const undici = require('undici')
const fs = require("fs");
var app = express();

var myLogin = "AKIAJXBOVX5Q2EULDUIA";
var mypwd = "SqcyDpetv+pCsbNYWHDLE8yR5mJ13MI+4d8NOwtM";

function parseUrl(usrUrl){
  const slashIndex = usrUrl.indexOf('/')
  const slashNextIndex = usrUrl.indexOf('/', (slashIndex + 2))
  const url = usrUrl.slice(0, slashNextIndex)
  const path = usrUrl.slice(slashNextIndex)
  return { url, path }
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// set the view engine to ejs
app.set('view engine', 'ejs');
// static assets directory
app.use(express.static('public'));

// index page, this callback contains code that can be exploited for CVE-2022-29078
app.get('/', function(req, res) {
  if (!req.query.hasOwnProperty('id')){
    req.query.id = 'Stranger';
  }
  res.render('pages/index',req.query);
});

app.get("/uploadPath", (req, res) => {
  const usrUrl = req.query.myUrl
  console.log(usrUrl)
  let { url, path } = parseUrl(usrUrl)
  //let url = "https://raw.githubusercontent.com"
  //let path = "/jfrog/project-examples/master/README"
  console.log(url)
  console.log(path)
  const {
    statusCode,
    headers,
    trailers,
    body
  } = undici.request(usrUrl)
  console.log(body)
  fs.writeFile(__dirname + "/uploads/" + makeid(12), body, err => {
    if (err) {
      return res.status(500).send(err);
    }
  })

  return res.send({ status: "success", path: path });
})

app.listen(3000);
console.log('Server is listening on port 3000');