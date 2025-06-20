const paintings = [
  {
    file: '100030.jpg',
    title: 'The School of Athens',
    artist: 'Raphael',
    year: '1509–1511',
    description: 'A grand fresco representing philosophy with central figures Plato and Aristotle.',
  },
  {
    file: '095010.jpg',
    title: 'Primavera',
    artist: 'Sandro Botticelli',
    year: '1482',
    description: 'A lush spring scene symbolizing love, rebirth, and classical mythology.',
  },
  {
    file: '005010.jpg',
    title: 'Oath of the Horatii',
    artist: 'Jacques-Louis David',
    year: '1784',
    description: 'A neoclassical painting of Roman brothers swearing loyalty before battle.',
  },
  {
    file: '104020.jpg',
    title: 'Bacchus and Ariadne',
    artist: 'Titian',
    year: '1522-1523',
    description: 'Depicts the mythological moment Bacchus falls for Ariadne.',
  },
  {
    file: '101030.jpg',
    title: 'Supper at Emmaus',
    artist: 'Caravaggio',
    year: '1601',
    description: 'Dramatic lighting captures the moment Christ reveals himself.',
  },
  {
    file: '105010.jpg',
    title: 'The Surrender of Breda',
    artist: 'Diego Velázquez',
    year: '1635',
    description: 'Spanish military triumph portrayed with dignity and depth.',
  },
  {
    file: '105040.jpg',
    title: 'The Anatomy Lesson',
    artist: 'Rembrandt',
    year: '1632',
    description: 'An insightful group portrait of surgeons at work.',
  },
  {
    file: '118050.jpg',
    title: 'The Night Watch',
    artist: 'Rembrandt',
    year: '1642',
    description: 'A powerful depiction of civic militia in dynamic composition.',
  },
  {
    file: '099160.jpg',
    title: 'Children’s Games',
    artist: 'Pieter Bruegel the Elder',
    year: '1560',
    description: 'A lively scene of children playing various games across town.',
  }
];

const gallery = document.getElementById('thumbnail-gallery');
const display = document.getElementById('main-display');

paintings.forEach(painting => {
  const img = document.createElement('img');
  img.src = `small/${painting.file}`;
  img.alt = painting.title;
  img.onclick = () => {
    display.innerHTML = `
      <img src="large/${painting.file}" alt="${painting.title}" />
      <h2>${painting.title}</h2>
      <h3>By ${painting.artist} (${painting.year})</h3>
      <p>${painting.description}</p>
    `;
  };
  gallery.appendChild(img);
});
