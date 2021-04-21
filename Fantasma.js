class Fantasma{

constructor (x,y,dir,r,g,b){
this.x=x;
this.y=y;
this.dir=dir;
this.r = r;
this.g = g;
this.b = b;
}

mostrar(){
    fill(this.r,this.g,this.b);
    rectMode(CENTER);
    rect(this.x, this.y, 50, 50);
    rectMode(CORNER); 
    this.especial();       
}

mover(){
    if(this.dir === 0){
        this.y--;
    }else{
        this.y++;
    }
}

getx(){
    return this.x;
}
gety(){
    return this.y;
}

}
//una clase abstracta es una clase cuya interpretacion es dada por sus hijos