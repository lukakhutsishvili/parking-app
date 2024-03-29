import express from "express";
import { createTable } from "./config/sql.js";

const app = express();

async function init() {
  try {
    await createTable();
    serverStart(); // Fixed the missing function invocation
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.get("/", (req, res) => {
      return res.status(201).json({ message: "works" });
    });
    app.listen(3000);
  }
}

init();
