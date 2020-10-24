const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ToDoSchema = new mongoose.Schema({ 
 
  title:{
    type: String,
  },

  creator: { 
    type: ObjectId,
    ref: "User",
  },

  todos:[{
      
  }]


},{ timestamps: true }
);

module.exports = mongoose.model('TodoLists', ToDoSchema); 