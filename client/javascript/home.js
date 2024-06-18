document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 1;
  const moviesPerPage = 3;

  function fetchMovies(page) {
    const start = (page - 1) * moviesPerPage;
    const end = start + moviesPerPage;
    axios
      .get(`http://localhost:8000/api/movies`)
      .then((res) => {
        const data = res.data;
        console.log("Response data:", res.data);

        const swiperWrapper = document.querySelector(".swiper-wrapper");

        // Clear previous slides
        swiperWrapper.innerHTML = "";
        console.log("Data:", data);

        data.result.forEach((movie) => {
          const slide = document.createElement("div");
          slide.classList.add("swiper-slide");

          const img = document.createElement("img");
          img.src = movie.poster;
          img.alt = movie.title;
          img.classList.add("img"); // Add your custom class if needed

          slide.appendChild(img);
          swiperWrapper.appendChild(slide);
        });
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }

  // Fetch initial set of movies
  fetchMovies(currentPage);

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: 3, // Displays 3 slides at a time
    spaceBetween: 110, // Adjust space between slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // Fetch one movie when user navigates to the next slide
        const activeIndex = this.activeIndex + 1;
        if (activeIndex % moviesPerPage === 0) {
          currentPage++;
          fetchMovies(currentPage);
        }
      },
    },
  });
});
