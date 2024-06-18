const express = require("express");
const movieData = require("./data");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

//If the client request this end point?
// what are we going to return to them
app.get("/api/movies", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Get the requested page, default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 3; // set default limit to 3 items
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};

  if (endIndex < movieData.length) {
    result.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  result.result = movieData.slice(startIndex, endIndex);

  res.json(result);
});

//Serve static files from the client directory
app.use(express.static("client"));
app.listen(port, () => {
  console.log(`Listing: ${port}`);
});
