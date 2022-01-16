const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  parallax.style.backgroundPositionY = -window.scrollY / 4 + "px";
})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const btnToggle = document.querySelector('.btn-toggle');


btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Light"

    }

})