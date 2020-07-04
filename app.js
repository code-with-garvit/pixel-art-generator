var ctx = document.getElementById("game").getContext("2d");
var image = new Image();
image.onload = function () {
  ctx.drawImage(image, 0, 0);
};
function run() {
  image.src = document.getElementById("img").value;
}
