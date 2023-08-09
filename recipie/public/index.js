const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});



// for recipe 1
const show_1 = document.querySelector('#show_1');
const d_1 = document.querySelector('#d_1');
show_1.addEventListener('click', (e) => {
  if (d_1.classList.contains('hidden')) {
    d_1.classList.remove('hidden');
    show_1.textContent = 'Hide Content';
  } else {
    d_1.classList.add('hidden');
    show_1.textContent = 'Show Content';
  }
});


// for recipe 2
const show_2 = document.querySelector('#show_2');
const d_2 = document.querySelector('#d_2');
show_2.addEventListener('click', (e) => {
  if (d_2.classList.contains('hidden')) {
    d_2.classList.remove('hidden');
    show_2.textContent = 'Hide Content';
  } else {
    d_2.classList.add('hidden');
    show_2.textContent = 'Show Content';
  }
});

// for recipe 3
const show_3 = document.querySelector('#show_3');
const d_3 = document.querySelector('#d_3');
show_3.addEventListener('click', (e) => {
  if (d_3.classList.contains('hidden')) {
    d_3.classList.remove('hidden');
    show_3.textContent = 'Hide Content';
  } else {
    d_3.classList.add('hidden');
    show_3.textContent = 'Show Content';
  }
});
