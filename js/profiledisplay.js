
$(document).ready(function () { 
// Get the modal
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");

$("#myImg").click(function(){
  modal.style.display = "block";
  modalImg.src = "images/myprofile.jpg";
})
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
})

