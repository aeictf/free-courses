function isPalindrom(){
  var str=process.argv[2];
  s=str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
  var length=s.length;
  for(var i=0;i<length/2;i++)
    if (s.charAt(i) !== s.charAt(length-(1+i))) {
         process.stdout.write('NO');
         return false;
      }
   process.stdout.write('YES');
}
isPalindrom();
