function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = "block";
  win.style.zIndex = Date.now();
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

function minimizeWindow(id) {
  document.getElementById(id).style.display = "none";
}

let offsetX = 0, offsetY = 0, isDragging = false, dragTarget = null;

function dragStart(e, id) {
  dragTarget = document.getElementById(id);
  offsetX = e.clientX - dragTarget.offsetLeft;
  offsetY = e.clientY - dragTarget.offsetTop;
  isDragging = true;

  document.onmousemove = dragMove;
  document.onmouseup = dragEnd;
}

function dragMove(e) {
  if (!isDragging) return;
  dragTarget.style.left = (e.clientX - offsetX) + 'px';
  dragTarget.style.top = (e.clientY - offsetY) + 'px';
}

function dragEnd() {
  isDragging = false;
  document.onmousemove = null;
  document.onmouseup = null;
}
