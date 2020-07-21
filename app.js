var homeLink = document.getElementById('home');
var aboutLink = document.getElementById('about');
var ourWorkLink = document.getElementById('ourwork');
var contactLink = document.getElementById('contact');

function onHomeLinkClick() {
  document.getElementById('home').scrollIntoView();
  }
function onAboutLinkClick() {
  document.getElementById('about').scrollIntoView();
  }
function onOurWorkLinkClick() {
  document.getElementById('ourwork').scrollIntoView();
  }
function onContactLinkClick() {
  document.getElementById('contact').scrollIntoView();
  }


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pictures");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

homeLink.addEventListener('click', onLinkClick());
aboutLink.addEventListener('click', onLinkClick());
ourWorkLink.addEventListener('click', onLinkClick());
contactLink.addEventListener('click', onContactLinkClick());