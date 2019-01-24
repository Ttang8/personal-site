const features = document.querySelectorAll(".skills");
const github = document.getElementsByClassName("icon-github");

function toggleColor(e) {
  let tag = e.target;
  tag.classList.toggle("colored");
}

features.forEach(skill => {
  skill.addEventListener('mouseover', toggleColor);
  skill.addEventListener('mouseout', toggleColor);
});

github[0].addEventListener('mouseover', (e) => {
  let tag = e.target;
  console.log(tag);
  tag.setAttribute("style", "color:black");
});
