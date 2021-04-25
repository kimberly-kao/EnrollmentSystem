const paragraph = document.getElementById("ans");
const edit_button = document.getElementById("edit");
const save_button = document.getElementById("save");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
} );

save_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";
} );