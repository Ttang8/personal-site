const features = document.querySelectorAll(".skills");

function toggleColor(e) {
  let tag = e.target;
  tag.classList.toggle("colored");
}

features.forEach(skill => {
  skill.addEventListener('mouseover', toggleColor);
  skill.addEventListener('mouseout', toggleColor);
});
