function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 300;
    this.canvas.height = 150;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}

function showPerson() {
  var person = {
    name: "John",
    surname: "Doe",
    age: 50,
    showFullName: function() {
      return "Age of " + person.name + " " + person.surname + " is " + person.age;
    };
  }
  document.getElementById("demo").innerHTML = person.showFullName();
}
