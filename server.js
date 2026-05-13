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

// Given Users Route
app.get('/users', async (req, res) => {
  try {
    const response = await apiClient.get("/users");

    // Transform Data
    const transformedUserData = response.data.map(user=>({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
    }));

    res.json(transformedUserData)

  } catch (error) {

    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
  }

});

// Post
// app.post();

// PORT
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})