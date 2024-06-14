// custom script to create popup EBR 2023-2024
var stick = false;

function showpop(e, num) {
  // function called by all hotspots on mouseOver
  var thing = document.getElementById("popup");
  if (stick == false) {
    thing.style.left = e.clientX + "px";
    thing.style.top = e.clientY + "px";
    console.log("showpop thing.xy: " + thing.style.left + "," + thing.style.top); // debug
    // set image title
    var nodeListPlants = document.getElementsByClassName("plant");
    var title = nodeListPlants[(num - 1)].innerHTML;
    if (typeof title != "undefined") {
      // console.log("item " + num + "; title: " + title); // debug
      document.getElementById("popuptitle").innerHTML = title;
    } else {
      document.getElementById("popuptitle").innerHTML = "nog opzoeken";
    }
    // set image src
    document.getElementById("plant_image").src = "/ejb/assets/img/tuin/" + num + ".jpg"; // add absolute image path
    thing.style.visibility = "visible";
  }
  return true;
}

function hidepop(e) {
  // function called by all hotspots on mouseOut
  var thing = document.getElementById("popup");
  if (stick == false) {
    thing.style.visibility = "hidden";
  }
  return true;
}

function togglepop(e, num) {
  // function called by all hotspots on mouseUp
  showpop(e, num);
  var thing = document.getElementById("popup"); // on mobile device no hover before click
  if (stick == true) {
    if (thing.style.visibility == "visible") {
      thing.style.visibility = "hidden";
    }
    stick = false;
  }
  if (thing.style.visibility == "visible") {
    thing.style.left = e.clientX + "px";
    thing.style.top = e.clientY + "px";
    console.log("togglepop thing.xy: " + thing.style.left + "," + thing.style.top); // debug
    stick = true;
  }
  return true;
}
