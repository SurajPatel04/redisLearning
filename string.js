import client from "./client.js";

async function init() {
    // await client.expire("user:1", 60);
    await client.set("msg:10", "Hello World", "EX", 10);
    const result = await client.get("msg:10");
    console.log(result);
}

init();