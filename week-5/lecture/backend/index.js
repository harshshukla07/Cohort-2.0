// create an express 
const express = require('express');
const { createTodo } = require('./types');
const app = express();
app.use(express.json());

// create a post route to add a todo
app.post('/todos',(req,res)=>{

    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(400).json({
            error: parsedPayLoad.error.errors.map(err => err.message)
        });
        return;
    }
    

})

// create a get route to get all todos
app.get('/todos',(req,res)=>{
    const todo = req.body;
    res.json(todo);
})

app.put('/completed',(req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            error: parsedPayLoad.error.errors.map(err => err.message)
        });
        return;
    }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});