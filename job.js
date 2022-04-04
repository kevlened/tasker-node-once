const sleep = ms => new Promise(res => setTimeout(res, ms));

console.log("Started at:", new Date());
await sleep(5000);
console.log("Finished at:", new Date());
