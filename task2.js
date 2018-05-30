 function Fib(){
var n=process.argv[2];
var f2=1;
var f1=0;
for (var i=0;i<n;i++){
  f2+=f1;
  f1=f2-f1;
}
console.log(f1);
}
Fib();
