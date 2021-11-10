class vector {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    mas (newVector){
        return new vector( this.x + newVector.x, this.y + newVector.y);
    }
    menos (newVector){
        return new vector(this.x-newVector.x, this.y-newVector.y)
    }

    get longitud (){
        return Math.sqrt(((this.x * this.x) + (this.y * this.y)));
    }
}

console.log(new vector(1, 2).mas(new vector(2, 3)));
// Vector{x: 3, y: 5}
console.log(new vector(1, 2).menos(new vector(2, 3)));
// Vector{x: -1, y: -1}
console.log(new vector(3, 4).longitud);
// 5