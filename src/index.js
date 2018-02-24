module.exports = function solveEquation(equation) {
 var massiv=[];
 let massivrezult=[];
 let a, b, c, D ,x1 ,x2;
massiv=equation.split(' ');1
a=(massiv[0]);
b=(massiv[4]);
c=(massiv[8]);
if (massiv[0]==='-')a=-a;
if (massiv[3]==='-')b=-b;
if (massiv[7]==='-')c=-c;
D = Math.pow(b,2) - 4 * a * c;
if (D>0){
x1 = Math.round((-1 * b + Math.sqrt(D)) / (2 * a));
x2 = Math.round((-1 * b - Math.sqrt(D)) / (2 * a));
if (x1<x2)
  massivrezult.push(x1, x2);
else
  massivrezult.push(x2, x1);
}
 return massivrezult;

}
