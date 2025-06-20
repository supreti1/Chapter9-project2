window.addEventListener("DOMContentLoaded", function () {
  fetch("paintings.json")
    .then(response => response.json())
    .then(data => {
      const list = document.querySelector("#paintings ul");
      const title = document.querySelector("#title");
      const artist = document.querySelector("#artist");
      const full = document.querySelector("#full");
      const descriptionBox = document.querySelector("#description");
      const details = document.getElementById("details");

      data.forEach(painting => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = `images/${painting.id}.jpg`;
        img.alt = painting.title;
        img.dataset.id = painting.id;
        li.appendChild(img);
        list.appendChild(li);
      });

      list.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
          const selectedId = e.target.dataset.id;
          const selected = data.find(p => p.id === selectedId);

          title.textContent = `${selected.title} (${selected.year})`;
          artist.textContent = selected.artist;
          full.src = `images/${selected.id}.jpg`;
          full.alt = selected.title;

          document.querySelectorAll(".box").forEach(box => box.remove());

          selected.features.forEach(f => {
            const box = document.createElement("div");
            box.className = "box";
            box.style.left = f.upperLeft[0] + "px";
            box.style.top = f.upperLeft[1] + "px";
            box.style.width = (f.lowerRight[0] - f.upperLeft[0]) + "px";
            box.style.height = (f.lowerRight[1] - f.upperLeft[1]) + "px";

            box.addEventListener("mouseenter", () => {
              descriptionBox.textContent = f.description;
            });

            box.addEventListener("mouseleave", () => {
              descriptionBox.textContent = "";
            });

            details.appendChild(box);
          });
        }
      });
    });
});

