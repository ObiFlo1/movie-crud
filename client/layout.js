function layoutHeader() {
  const header = document.createElement("header");
  const div = document.createElement("div");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  div.classList.add("headerDiv");
  div.textContent = "Best Movies";
  ul.classList.add("headerUl");

  header.append(div);
  header.appendChild(nav);
  nav.appendChild(ul);
  // run a map or a for each
  const navTitles = [
    { text: "Home", attr: "home.html" },
    { text: "Index Page", attr: "index.html" },
    { text: "New Page", attr: "newPage.html" },
    { text: "Edit Page", attr: "editPage.html" },
    { text: "Show Page", attr: "showPage.html" },
  ];

  navTitles.forEach((obj) => {
    const li = document.createElement("li");
    li.classList.add("headerLi");
    const a = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", obj.attr);
    a.textContent = obj.text;
  });

  document.body.insertBefore(header, document.body.firstChild);
}
