const express = require("express");
// const PORT = 3000;
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        message: "this is my api"
    });
});


app.listen(process.env.PORT, () => {
    console.log(`api is running on port ${process.env.PORT}`);
})