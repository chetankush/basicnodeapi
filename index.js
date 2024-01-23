const express = require("express");
const cors = require("cors");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());


// ROUTES
app.get("/users", (req, res) => {
  const { city } = req.query;

  if (city) {
    const usersInCity = users.filter((user) => user.city.toLowerCase() === city.toLowerCase());
    return res.json(usersInCity);
  }

  return res.json(users);
});

app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
