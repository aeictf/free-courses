function isPalindrom(){
  var str=process.argv[2];
  s=str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
  var length=s.length;
  for(var i=0;i<length/2;i+=1)
    if (s.charAt(i) !== s.charAt(length-(1+i))) {
         process.stdout.write('no');
         return false;
      }
   process.stdout.write('yes');
}
isPalindrom();
