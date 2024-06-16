function layoutHeader() {
  const header = document.createElement("header");
  const headerH1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");

  header.appendChild(headerH1);
  header.appendChild(nav);
  nav.appendChild(ul);
  // run a map or a for each
  const navTitles = [
    "Home",
    "Index Page",
    "New Page",
    "Edit Page",
    "Show Page",
  ];

  navTitles.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", "#");
    a.textContent = link;
  });

  document.body.insertBefore(header, document.body.firstChild);
}
