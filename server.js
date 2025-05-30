import axios from "axios";
import express from "express";
import client from "./client.js";

const app = express();

app.get("/", async (req, res) => {

    const cachevalue = await client.get("todos");
    if(cachevalue){
        return res.json(JSON.parse(cachevalue));
    }
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await client.set("todos", JSON.stringify(response.data));
    await client.expire("todos", 60);
    res.json(response.data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});