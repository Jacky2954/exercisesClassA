function Vector(x, y){
    this.x = x;
    this.y = y;
  }
 
 Vector.prototype.mas = function(vector) {
   var otherVector = new Vector(this.x + vector.x, this.y + vector.y) 
         return otherVector;
 }
 
 Vector.prototype.menos = function(vector) {
   return new Vector(this.x - vector.x, this.y - vector.y);
 }
 
 Object.defineProperty(Vector.prototype, "length", {
   get: function(){
     return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
   }
 })

console.log(new Vector(1, 2).mas(new Vector(2, 3)));
// Vector{x: 3, y: 5}
console.log(new Vector(1, 2).menos(new Vector(2, 3)));
// Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// 5
 
