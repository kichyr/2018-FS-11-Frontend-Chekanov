const say = function (name) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `Hello ${name}`
    newDiv.setAttribute("class", "box")
    document.body.appendChild(newDiv);
    return `Hello ${name}`;
  }
  
  export default say;
  