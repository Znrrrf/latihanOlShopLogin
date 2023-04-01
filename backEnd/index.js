const express = require("express");
const PORT = 3000;
const app = express();


app.get("/", (req, res) => {
    res.send("this is my api");
});

app.listen(PORT, () => {
    console.log(`api is running on port ${PORT}`);
})