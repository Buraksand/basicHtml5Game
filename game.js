function startGame() {
  myGameArea.start();
  showPerson();
}

var myGameArea;
myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.context.moveTo(0,0);
        this.context.lineTo(480,270);
        this.context.stroke();
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
};

function showPerson() {
  var person = {
    name: "John",
    surname: "Doe",
    age: 50,
    showFullName: function() {
      return "Age of " + person.name + " " + person.surname + " is " + person.age;
    }
  };
  document.getElementById("demo").innerHTML = person.showFullName();
}
