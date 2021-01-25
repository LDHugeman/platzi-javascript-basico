// Declarativas

function miFuncion(){
  return 3;
}

miFuncion();

// Expresión

var miFuncion = function(a, b){
  return a + b;
}

miFuncion();

function saludarEstudiantes(estudiante) {
  console.log(estudiante);
}

saludarEstudiantes("Diego");

function saludarEstudiantes(estudiante){
  console.log(`Hola ${estudiante}`);
};

function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

sumar(1,2);
console.log(sumar(1,2));

function sumar(a, b) {
  return a + b;
}
