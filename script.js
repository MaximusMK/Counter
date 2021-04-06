'use strict'

let count = 0;

const value = document.querySelector('#value'),
      btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else 
      if (styles.contains('increase')) {
        count++;
    } 
    else {
      count = 0;
    }    

    if (count > 0) {
      value.style.color = "#090"
    } else {
      if (count < 0) {
        value.style.color = "#900"
      } else {
        value.style.color = "#ddd"
      }
    }
    value.textContent = count;
  });
});