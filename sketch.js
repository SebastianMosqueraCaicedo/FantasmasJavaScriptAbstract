
let fantasmaVerde = new FantasmaVerde(100,100,0,0,255,0)
let fantasmaAmarillo = new FantasmaAmarillo(300,0,1,255,255,0)
let fantasmaRojo = new FantasmaRojo(200,0,1,255,0,0,1)
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fantasmaVerde.mostrar()
  fantasmaAmarillo.mostrar()

  fantasmaRojo.mostrar()
  fantasmaRojo.mover()
  


  fantasmaVerde.mover()
  fantasmaAmarillo.mover()


  if(fantasmaVerde.gety() >350 ){
    text('Hola mundo', 100,100);
  }
}
