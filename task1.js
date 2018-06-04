var l=process.argv.length-2;
var s=process.argv[2];
var i=2;
while(l>1){
  i++;
var str=process.argv[i];
s=s+str;
l--;
}

function isPalindrom(s){

  s=s.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
  var length=s.length;
  for(var i=0;i<length/2;i++)
    if (s.charAt(i) !== s.charAt(length-(1+i))) {
         process.stdout.write('NO');
         return false;
      }
   process.stdout.write('YES');

}
isPalindrom(s);
