import express from "express";
import { takeUrl } from "./controller/url.controller.js"
const App = express();


App.use(express.json());
App.use(express.urlencoded({
  extended:true
}));
App.set("view engine","ejs");
App.get("/qr",function(req,res){
    res.render("url")
})


App.post("/user",takeUrl) 
// App.get("/generateQR",generateQR)


let port=3000
App.listen(port,()=>{
    console.log(`listen port ${port}`)
})


