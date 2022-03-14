// Nic Motta - 2022





let x, y, z;
let aX = [];
let counter = 0;

var nameInput;
var submitButton;
var database;
var button;
var score;

let datos = [{
  x: "",
  y: "",
  z: "",
}];

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  setInterval(getData, 250);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyChFxNq6R9ghnxvmvmeV3RuJZrUjjj3Di4",
     authDomain: "data-nec.firebaseapp.com",
     databaseURL: "https://data-nec-default-rtdb.firebaseio.com",
     projectId: "data-nec",
     storageBucket: "data-nec.appspot.com",
     messagingSenderId: "774851739276",
     appId: "1:774851739276:web:3578f80ccd4550a6d845a9",
     measurementId: "G-KPL4ZBFGFM"
    }
   firebase.initializeApp(config); 
   database = firebase.database();
  
}

function draw() {
// NO se usa
}

function getData(){
  counter++;
  datos[counter] = {
    x: rotationX.toFixed(2),
    y: rotationY.toFixed(2),
    z: rotationZ.toFixed(2),
  }

  document.getElementById("x").innerHTML = rotationX.toFixed(2);
  document.getElementById("y").innerHTML = rotationY.toFixed(2);
  document.getElementById("z").innerHTML = rotationZ.toFixed(2);

  document.getElementById("filas").innerHTML = datos.length;
  
}

function mostrarDatos() {
  console.log(datos);
}


function setData() {
  var ref = database.ref('datos');
  ref.push(datos);
  //console.log(data);
}

