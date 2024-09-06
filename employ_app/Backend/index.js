//1.importing express
const express = require('express');
require("./connection")
var empdetails=require("./model/employee")
var cors=require("cors")
//initializing
const app = new express();
app.use(express.json())
app.use(cors())
//Api creation
app.get('/', (req, res) => {
    res.send("Message from the server")
})
app.get('/trial', (req, res) => {
    res.send("Trial Message from the server")
})

//Add API
app.post("/add", async (req, res) => {
    try {
        await empdetails(req.body).save()
        res.send({ message: "Data added" });
    } catch (error) {
        console.log(error)
    }
})
    //View API
    app.get("/view", async (req, res) => {
        try {
            var show = await empdetails.find();
            res.send(show)
        } catch (error) {
            console.log(error)
        }
        
        
  
    })
//Delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await empdetails.findByIdAndDelete(req.params.id)
        res.send({ message: "Data deleted" })
    } catch (error) {
        console.log(error)
            
    }
})
    
    
//Update
app.put("/update/:id", async (req, res) => {
    try {
        await empdetails.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Data updated" })
    } catch (error) {
        console.log(error)

    }
})

    
// To set port
app.listen(5176, () => {
    console.log("Port is running");
})