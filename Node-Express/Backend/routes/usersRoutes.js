import express from 'express';
import fs from 'fs'
const router = express.Router()

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "users.json");


let users = [];

const  saveUser=()=>{
    fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2))
}


// CREATE
router.post('/', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  saveUser();
  res.status(201).json(newUser);
});

// READ ALL
router.get('/', (req, res) => {
  res.json(users);
});

// READ ONE
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// UPDATE
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
});

// DELETE
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send("User deleted");
});

export default router;