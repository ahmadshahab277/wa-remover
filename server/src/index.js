const express = require('express');
const path = require('path');
const cors = require('cors');
const { config } = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());
config();

mongoose.connect(process.env.MONGOURL, {dbName:"bgremover"})
.then(() =>{
    console.log("Connected to MongoDB");
    console.log("MONGOURL:", process.env.MONGOURL);
}).catch((err)=>{
    console.log(err);
});

const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

const authRouter = require("./routes/auth")
const imageRouter = require("./routes/image")

app.use("/auth" , authRouter)
app.use("/image" , imageRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))