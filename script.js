function addListener() {
  var btn = document.querySelector('#Heart_2_');
  btn.addEventListener("click", restart, false);  
}

function restart() {
  var container = document.querySelector('#Layer_1');
  var newContainer = container.cloneNode(true);
  container.parentNode.replaceChild(newContainer, container);
  addListener();
}

addListener();
