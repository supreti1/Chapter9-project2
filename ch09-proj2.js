document.addEventListener("DOMContentLoaded", function () {
  fetch("paintings.json")
    .then((response) => response.json())
    .then((data) => displayThumbnails(data))
    .catch((error) => console.error("Error loading JSON:", error));
});

function displayThumbnails(paintings) {
  const thumbnailContainer = document.getElementById("thumbnails");
  const displayPanel = document.getElementById("display");

  paintings.forEach((painting) => {
    const img = document.createElement("img");
    img.src = `small/${painting.file}`;
    img.alt = painting.title;
    img.classList.add("thumbnail");

    img.addEventListener("click", () => {
      displayPanel.innerHTML = `
        <h2>${painting.title}</h2>
        <h3>${painting.artist} (${painting.year})</h3>
        <img src="large/${painting.file}" alt="${painting.title}" class="large-img"/>
        <p>${painting.description}</p>
      `;
    });

    thumbnailContainer.appendChild(img);
  });
}

