function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Medium blog
// JavaScript code to fetch Medium articles and display them
document.addEventListener("DOMContentLoaded", function () {
  const mediumArticlesDiv = document.getElementById("medium-articles");

  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mudzingwa")
    .then((response) => response.json())
    .then((data) => {
      const articles = data.items;
      articles.forEach((article, index) => {
        const articleContainer = document.createElement("div");
        articleContainer.classList.add("medium-article");

        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;

        const dateElement = document.createElement("p");
        const pubDate = new Date(article.pubDate).toLocaleDateString();
        dateElement.textContent = `Published on: ${pubDate}`;

        const linkElement = document.createElement("a");
        linkElement.textContent = "Read More";
        linkElement.href = article.link;

        const imageElement = document.createElement("img");
        imageElement.src = article.thumbnail; // Assuming thumbnail is the URL of the featured image
        imageElement.alt = article.title; // Set alt text for accessibility

        // Append the elements to the article container
        articleContainer.appendChild(imageElement); // Add the image
        articleContainer.appendChild(titleElement);
        articleContainer.appendChild(dateElement);
        articleContainer.appendChild(linkElement);

        // Append the article container to the medium-articles div
        mediumArticlesDiv.appendChild(articleContainer);
      });
    })
    .catch((error) => {
      console.error("Error fetching Medium articles:", error);
    });
});
