var express=require('express')
var app=new express()
app.listen(8003,()=>{
    console.log("Server started at port 8003")
})
app.get("/",(req,res)=>{
    res.send("Your first request")
})
app.get("/student",(req,res)=>{
    res.send("Student's request")
})
app.get("/admin",(req,res)=>{
    res.send("Admin's request")
})