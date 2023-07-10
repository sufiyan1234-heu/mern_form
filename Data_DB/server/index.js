const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Data = require('./models/data')
const app = express()

app.use(express.json())
app.use(cors())



app.post('/add', async (req, res) => {
    const { name, email } = req.body;
    const data = new Data({ email, name });
    await data.save()
    return res.status(201).json(data);

})




app.listen(3001, () => {
    console.log("server is running on 3001")
})

mongoose.connect('mongodb://localhost:27017/Form', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });



