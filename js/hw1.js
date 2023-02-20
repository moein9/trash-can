const history = [
  {
    year: 1964,
    description:
      "Muhammad Ali defeated Sonny Liston to win the world heavyweight championship.",
  },
  {
    year: 1965,
    description:
      "Muhammad Ali defeated Sonny Liston in a rematch to retain the world heavyweight championship.",
  },
  {
    year: 1971,
    description:
      "Muhammad Ali defeated Joe Frazier in the 'Fight of the Century' to become the undisputed world heavyweight champion.",
  },
  {
    year: 1974,
    description:
      "Muhammad Ali defeated George Foreman in the 'Rumble in the Jungle' to win the world heavyweight championship.",
  },
];

let cards = document.querySelectorAll(".h-card");

for (i = 0; i < cards.length; ++i) {
  cards[i].style.color = "white";
  cards[i].style.fontSize = "300px";

  cards[
    i
  ].innerHTML = `<h3>${history[i].year}</h3><p>${history[i].description}</p>`;
}
