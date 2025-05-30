import client from "./client.js";

async function init() {
    await client.lpush("message", "hello");
    await client.lpush("message", "world");
    // await client.lpush("message", 3);
    // await client.lpush("message", 4);
    // const result = await client.rpop("message")

    // read mesage
    const result = await client.lrange("message", 0, -1);
    console.log(result);
}
    
init();