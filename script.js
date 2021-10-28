function display(n) {
  if (n==1) {
    var elem= document.getElementById("sub1")
    elem.style.display = "block"
    var noti = document.getElementById("sub")
    noti.style.display = "block"
  }
  else if (n==2) {
    var elem = document.getElementById("sub2")
    elem.style.display = "block"
    var noti = document.getElementById("sub")
    noti.style.display = "block"
  }
  else {
    var elem = document.getElementById("sub3")
    elem.style.display = "block"
    var noti = document.getElementById("sub")
    noti.style.display = "block"
  }
}
function destroy() {
  var elem1= document.getElementById("sub1")
  elem1.style.display = "none"
  var elem2= document.getElementById("sub2")
  elem2.style.display = "none"
  var elem3= document.getElementById("sub3")
  elem3.style.display = "none"
  var noti = document.getElementById("sub")
  noti.style.display = "none"
}
