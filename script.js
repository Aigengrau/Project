const cards = document.querySelectorAll('.card');
const texts = document.querySelectorAll('.text');

function changeTextOnSelect() {
  const selected = this.classList.contains('selected');
  let index;
  if (this.classList.contains('fuagra')) {
    index = 0;
  } else if (this.classList.contains('fish')) {
    index = 1;
  } else {
    index = 2;
  }

  if (selected) {
    texts[index].textContent = 'Понравилось? Порадуй Котэ.';
  } else {
    texts[index].textContent = 'Чего сидишь? Порадуй котэ купи.';
  }
}

function changeTextOnSoldOut() {
  let index;
  if (this.classList.contains('fuagra')) {
    index = 0;
  } else if (this.classList.contains('fish')) {
    index = 1;
  } else {
    index = 2;
  }

  texts[index].textContent = 'Печалька,товар закончился ;(';
  texts[index].style.color = "yellow";
}

for (const card of cards) {
  card.addEventListener('click', function () {
    this.classList.toggle('selected');
    if (this.dataset.soldOut === 'true') {
      this.classList.add('disabled');
      changeTextOnSoldOut.call(this);
    } else {
      changeTextOnSelect.call(this);
    }
  });

  if (card.dataset.soldOut === 'true') {
    card.classList.add('disabled');
    changeTextOnSoldOut.call(card);
  }
}
