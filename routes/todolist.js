const express = require ('express'); 
const router = express.Router(); 
const TodoLists = require('../models/todolist')
const Todos = require('../models/todos'); 
const User = require('../models/user');


router.get('/todolists/:userId', (req, res) => { 
  Todos.find({"creator":req.params.userId}).distinct("title")
  
  .then(todolist => {
    console.log(todolist)
    res.status(200).json({
      todos: todolist

    })
    
  })
   
});

router.get('/todolists/:userId/:start/:end', (req, res) => {
  Todos.find({'creator':req.params.userId , created_on: {$gte:req.params.start, $lt: req.params.end}})
})

router.post('/addTodo/', (req, res, next) => {     
  const todo = new Todos(req.body.newtask)
  console.log(req.body.newtask.creator)
  const userId = req.body.newtask.creator;
  todo.save()
    .then(result => {
      return User.findById(userId)
    })
      .then(user => {
        user.todos.push(todo)
         return user.save()
      }) 

      res.json(todo)

    });

    router.get('/todolist/:id/:title', (req, res) => {
      const filtTitle = req. params.title
      const creatorId = req.params.id

      let start = new Date();
      start.setDate(start.getDate()-1);

      let end = new Date();
      
      console.log(start, end)
      filtTitle=="TodaysAgenda"?Todos.find({
        'creator':creatorId , 
        'createdAt': {$gte:start, $lt:end}
      }).then(todo=>{
        res.status(200).json({
          todoData:todo
        })
      })
     :Todos.find({"creator": creatorId, "title":filtTitle})
       .then(todo => {
         
         res.status(200).json({
           todoData: todo
         })
       })
     });


router.get('/todolistCompletes/:userId' , (req, res) =>{
 
  Todos.find({"isComplete":true, 'creator':req.params.userId})
    .countDocuments()
      .then(count => {
        res.json({Completes:count})
      })
} )

router.get('/todolisttasksCreated/:userId' , (req, res) =>{
  
  Todos.find({"creator": req.params.userId})
    .countDocuments()
      .then(count => {
        res.json({totalTasks:count})
      })
} )


router.get('/findTodo/:id', (req, res, next) => {  
  Todos.findById(req.params.id, function(err, todo) {
    if (!todo) {
      res.status(404).send('No result found');
    } else {
      res.json(todo);
    }
  });
});



    router.patch('/archiveTodo/:title', (req, res, next) =>{    
      console.log(req.body.isVisibleData)
      Todos.updateMany({"title":req.params.title , "isComplete":true}, {$set:{"isVisible": req.body.isVisibleData }} )
        .then(function() {
          res.json('todo updated');
        })
        .catch(function(err) {
          res.status(422).send("todo update failed.");
        });
    });    


router.patch('/CompleteTodo/:id', (req, res, next) =>{    
  console.log(req.body.isCompleteData)
  Todos.updateOne({"_id":req.params.id}, {$set:{"isComplete": req.body.isCompleteData }} )
    .then(function() {
      res.json('todo updated');
    })
    .catch(function(err) {
      res.status(422).send("todo update failed.");
    });
});

router.delete('/deletetodo/:id', (req, res, next) => {  
  Todos.findById(req.params.id)
    .then(result => {
      return User.findById(result.creator);
    })
    .then(user => {
      user.todos.pull(req.params.id);
      return user.save();
    })
    
      Todos.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json("todo deleted");
          
        })
        
    
  });


module.exports = router;   