const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const multer = require('multer');


const path = require('path');

require("dotenv").config();

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };



//import routes
const subscribeRoutes = require("./routes/subscribe");
const authRoutes = require("./routes/auth");
//const userRoutes = require("./routes/user");
const todolistRoutes =require("./routes/todolist");
const blog = require("./routes/blog");
const posts = require("./routes/posts");



// db
const dotenv = require("dotenv");
dotenv.config();

// database connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use('/api', subscribeRoutes);
app.use("/api", authRoutes);
//app.use("/api", userRoutes);
app.use("/api", todolistRoutes);
app.use("/api", blog);


app.use(express.static(path.join(__dirname, 'build')));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));