// DEPENDENCIES
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 1738;

// MIDDLEWARE
// app.use();

// ROUTES
app.get("/test", (req, res) => {
    res.send("Test Route")
});


// PORT
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})