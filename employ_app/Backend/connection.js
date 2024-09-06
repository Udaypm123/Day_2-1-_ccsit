var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://udaypm70:Uday@cluster0.xyo2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected")
    })
    .catch(err => { 
        console.log(err)
    })