const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db") // database connection from db.js

//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started at port 5000")
})

// ROUTES //

//create a todo

app.post("/todos", (req,res) => {
  try{
    const { description } = req.body
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description])

  } catch (err) {
      console.error(err.message);
    }

})
//get all todos

//get a todo

//update a todo

//delete a todo
