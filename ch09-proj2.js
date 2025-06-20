fetch('paintings.json')
  .then(response => response.json())
  .then(paintings => {
    const list = document.querySelector("#paintings ul");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const museum = document.getElementById("museum");
    const full = document.getElementById("full");
    const description = document.getElementById("description");

    paintings.forEach(p => {
      const li = document.createElement("li");
      const thumb = document.createElement("img");
      thumb.src = `small/${p.id}.jpg`;
      thumb.alt = p.title;
      li.appendChild(thumb);
      li.addEventListener("click", () => {
        title.textContent = p.title;
        artist.textContent = `By ${p.artist} (${p.year})`;
        museum.textContent = p.museum;
        full.src = `large/${p.id}.jpg`;
        full.alt = p.title;

        description.innerHTML = '';
        p.features.forEach(f => {
          const para = document.createElement("p");
          para.textContent = f.description;
          description.appendChild(para);
        });
      });
      list.appendChild(li);
    });
  });
