const Todos = require("../model/todos");

//get because we are getting data from the server
exports.getTodos = async (req, res, next) => {
  Todos.find()
    .then((todos) => {
      res.status(200).json({
        message: "Todos fetched successfully!",
        todos: todos,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//post because we are sending data to the server
exports.addTodo = (req, res, next) => {
  const title = req.body.title;
  const todo = new Todos({
    title: title,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json({
        message: "Todo created successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


//delete because we are deleting data from the server
exports.deleteTodo = (req, res, next) => {
  const id = req.body.id;

  Todos.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({
        message: "Todo deleted successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
