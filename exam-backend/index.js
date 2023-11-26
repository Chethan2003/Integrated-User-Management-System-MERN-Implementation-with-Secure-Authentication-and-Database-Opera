const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const UserModel = require("./models/Users")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/StudentInfo")

app.post("/register",(req,res)=>{

    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get("/getbyname/:name", (req, res) => {
    const userName = req.params.name;
    
    UserModel.findOne({ name: userName }) // Use findOne to find a single user
      .then(user => {
        if (user) {
          res.json(user);
        } 
        else {
          res.json({});
        }
      })
      .catch(err => res.json(err));
  })
  
  app.get("/allusers", (req, res) => {
    console.log("came")
    UserModel.find({})
    .then(user => {
        res.json(user)
        console.log(user.data)
    })
    .catch(err => res.json(err))
})

app.get("/getuser/:id", (req, res) => {
    const id =req.params.id;
  
    UserModel.findOne({_id:id}) // Use findOne to find a single user
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
  })

app.delete('/deleteUser/:id', (req,res) => {
    const id =req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)

    UserModel.updateMany({_id:id},{
        name: req.body.name,  
        reg: req.body.reg,
        email: req.body.email,
        password: req.body.password
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("Server is Running")
})