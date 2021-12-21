const express=require("express")
require("../db/conn")
const app=express();
const port=process.env.PORT || 8000
const Student=require("../models/students.js")
app.use(require("cors")())
app.use(express.json())
app.post("/contact",(req,res)=>{
    console.log(req.body)
    const user=new Student(req.body)

    user.save().then(()=>{
        res.status(201).send(req.body);
    }).catch((e)=>{
        res.status(401).send(e);
    })

})
app.get("/",(req,res)=>{
    res.send("test3")
})

app.listen(port,()=>{
    console.log(`connected ${port}`)
})
