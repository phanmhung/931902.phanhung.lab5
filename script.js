function display(n) {
    var elem = document.getElementById("sub1")
    elem.style.display = "block"
    var noti = document.getElementById("sub")
    noti.style.display = "block"
    var headersub1= document.getElementById("hsub")
    headersub1.innerHTML = "Новость "
    headersub1.innerHTML += n
    headersub1.style.fontWeight= "bold"
    headersub1.style.fontSize= "35px"
    var h4sub1= document.getElementById("h4sub")
    h4sub1.innerHTML = "Новость "
    h4sub1.innerHTML += n
    h4sub1.innerHTML += ": Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias."
    h4sub1.style.fontWeight= "normal"
    h4sub1.style.marginBottom= "0px"
}
function destroy() {
  var elem1= document.getElementById("sub1")
  elem1.style.display = "none"
  var noti = document.getElementById("sub")
  noti.style.display = "none"
}
