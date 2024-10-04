import express from "express";

const app = express();
const port = 3000;

let teaArr = [];

// middlewares
app.use(express.json()); // accept json data from frontend

// home page
app.get("/", (req, res) => {
  res.send("welocme to home page with lemon tea!");
});

// list tea by id
app.get("/tea/:id", (req, res) => {
  const tea = teaArr.find((tea) => {
    return tea.id === parseInt(req.params.id);
  });
  if (!tea) {
    return res.status(404).send("tea not found!");
  }
  res.send(tea);
});

// list all tea
app.get("/tea", (req, res) => {
  res.status(200).send(teaArr);
});

// add tea
app.post("/tea", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: Date.now(), name, price };
  teaArr.push(newTea);
  res.status(201).send(newTea);
});

//update tea
app.put("/tea/:id", (req, res) => {
  const tea = teaArr.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) return res.status(404).send("tea not found!");
  let { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(201).send(tea);
});

//delete tea
app.delete("/tea/:id", (req, res) => {
  const index = teaArr.findIndex((tea) => tea.id === parseInt(req.params.id));
  if (index == -1) {
    return res.status(404).send("tea not found!\n failed to delete");
  }
  teaArr.splice(index, 1);
  res.status(200).send("deleted!");
});

app.listen(port, () => {
  console.log(`server is running at port :${port}`);
});
