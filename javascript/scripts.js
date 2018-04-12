const features = document.querySelector("#three");
const ruby = features.querySelector(".ruby");
const rails = features.querySelector(".rails");

function toggleRuby(e) {
  let tag = e.target;
  tag.classList.toggle("colored");
}

function toggleRails(e) {
  let tag = e.target;
  tag.classList.toggle("colored");
}
ruby.addEventListener('mouseover',toggleRuby);
ruby.addEventListener('mouseout',toggleRuby);
rails.addEventListener('mouseover',toggleRails);
rails.addEventListener('mouseout',toggleRails);
