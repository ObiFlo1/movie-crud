const axios = require("axios");
const cheerio = require("cheerio");
const movieTitles = require("../../data/movieTitles.js");

const apiKey = "6a4d70c7";

async function fetchPosters() {
  const postersUrl = [];

  for (const title of movieTitles) {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`
    );
    if (
      response.data &&
      response.data.Poster &&
      response.data.Poster !== "N/A"
    ) {
      postersUrl.push({
        title: title,
        director: response.data.Director,
        year: response.data.Year,
        poster: response.data.Poster,
      });
    }
  }
  return postersUrl;
}

fetchPosters()
  .then((postersUrl) => {
    console.log("Posters Url:", postersUrl);
  })
  .catch((error) => console.error("Error getting posters", error));
