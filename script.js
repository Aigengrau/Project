const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  if (card.dataset.soldOut === "true") {
    card.classList.add("disabled");
    
  }
});
for (const card of cards) {
  card.addEventListener('click', function () {
    this.classList.toggle('selected');
  });
}
