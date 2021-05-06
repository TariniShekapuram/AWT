var express=require('express')
var path=require('path')
var app=new express()
app.use(express.urlencoded())
app.listen(8004,()=>{
    console.log("Server started at port 8004...")
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"userinput.html"))
})
app.post("/student",(req,res)=>{
    res.send("Welcome "+req.body.uname)
})
