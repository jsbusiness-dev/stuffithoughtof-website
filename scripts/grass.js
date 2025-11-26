let count = 0;
document.querySelector('.grass-icon').addEventListener('click', () => {
  count++;
  document.querySelector('.count').innerHTML = `Count: ${count}`;
});
