//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){

     



    var day="tuesday";
    res.render("list", {kindOfDay: day, newListItems: items});

});


app.post("/",function(req,res)
{
    var item=req.body.newItem;
    items.push(item);
    //console.log(item);
    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
