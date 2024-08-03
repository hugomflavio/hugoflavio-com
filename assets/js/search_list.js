var input = document.getElementById("search_input");
input.addEventListener("input", search_function);

function search_function(e) {
  var filter = e.target.value.toUpperCase();

  var list = document.getElementById("search_list");
  var divs = list.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    var h = divs[i].getElementsByTagName("h3")[0];

    if (h) {
      if (h.innerHTML.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }

}