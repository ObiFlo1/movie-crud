axios
  .get("https://www.omdbapi.com/?i=tt3896198&apikey=6a4d70c7")
  .then((res) => {
    console.log(res.data);
    const data = res.data;
    const img = document.querySelectorAll(".img");
    img.forEach((img) => {
      img.src = data.Poster;
    });
  });
