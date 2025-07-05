// create an express 
const express = require('express');
const { createTodo,updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
app.use(express.json());

// create a post route to add a todo
app.post('/todos', async (req, res) =>
{

    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success)
    {
        res.status(400).json({
            error: parsedPayLoad.error.errors.map(err => err.message)
        });
        return;
    } 
    try
    {
        await todo.create({
            title: parsedPayLoad.data.title,
            description: parsedPayLoad.data.description,
            completed: parsedPayLoad.data.completed
        });
        res.status(201).json({
            message: 'Todo created successfully'
        }); 

    } catch (error)
    {
        res.status(500).json({
            error: 'Failed to create todo'
        });
    }
})

// create a get route to get all todos
app.get('/todos', async (req, res) =>
{
    const todos = await todo.find({});
    res.status(200).json({todos});
})

app.put('/completed', async(req, res) =>
{
    const createPayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success)
    {
        res.status(411).json({
            error: parsedPayLoad.error.errors.map(err => err.message)
        });
        return;
    }
    try{
        await todo.updateOne({
            _id: parsedPayLoad.data.id
        },
    {
        completed: parsedPayLoad.data.completed
        
    })
       
    res.status(200).json({
        message: 'Todo updated successfully'
    });

    } catch (error)

    {
        res.status(500).json({
            error: 'Failed to update todo'
        });
        return;
    }

})

app.listen(3000, () =>
{
    console.log('Server is running on port 3000');
});