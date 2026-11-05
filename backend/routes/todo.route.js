import express, { text } from  "express";
import Todo from "../models/todo.model.js";

const router = express.Router();

// Get all todos //routes//

router.get("/",async (req,res)=>{
try{
const todos= await Todo.find();
res.json(todos);
} catch(error){
     res.status(500).json({ message:message.err});
}
});

//Add  A New todo //
router.post("/", async(req,res)=>{
const todo=new Todo({
    text:req.body.text
})
try{
const newTodo=await todo.save();
res.status(201).json(newTodo);
}catch(error){
res.status(100).json({message:error.message});
}
});

//update a todo //

router.patch("/:id",async(req,res)=>{
    try{
const todo= await Todo.find(req.params.body);
if(!todo) return res.status(401).json({message:"Todo is not found"});
if(req.body.text!== undefined){
todo.text=req.body.text; }
const updatedTodo=await todo.save();
res.json(updatedTodo);

res.json(todos);
} catch(error){
     res.status(400).json({ message: err.message});
}
});

//Delete a Todo

router.delete("/:id",async(req,res)=>{
try {
    await Todo.findByIdAndDelete(req.params.id)
res.json({message:"Todo are Delted"});

} catch (error) {
    res.status(500).json({ message: err.message});
}
});

export default router;