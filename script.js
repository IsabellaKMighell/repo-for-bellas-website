const h2 = document.querySelector('h2');
h2.onmouseover = logMouseOver;
h2.onmouseout = logMouseOut;

function logMouseOver() {
  h2.textContent = "Welcome to my personal website which I'm creating to show off my coding skills";
}

function logMouseOut() {
  h2.textContent = 'About';
}