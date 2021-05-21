const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var favicon = require('serve-favicon');


app.use(express.static('./public/images'));
app.use(express.static('./public'));
app.use(express.static('./'));
app.use(express.static('./scripts'));
app.use(express.static('./html'));
app.use(express.static('./css'));
app.use(express.static('./scripts/arc-sw.js'));


app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/blogs',function(req,res){
  res.sendFile(path.join(__dirname+'/html/blogs.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/html/contact.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/about-us',function(req,res){
  res.sendFile(path.join(__dirname+'/html/about-us.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(5000, () => {
  console.log('server started');
});