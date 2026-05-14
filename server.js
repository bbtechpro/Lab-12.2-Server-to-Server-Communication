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
 
app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/random.json');
        const fact = response.data.text;
        res.json({ fact });
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
});

// PORT
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})