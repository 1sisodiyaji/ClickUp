//const express = require('express');
const multer = require('multer');
const {v4: uuidv4}=require('uuid');
const path = require('path');

//const app = express();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    
    //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    const unique=uuidv4();
    cb(null, unique + path.extname(file.originalname));
  }
});


const upload = multer({ storage: storage });
module.exports=upload;