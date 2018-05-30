function isPalindrom(){
  var l=process.argv.length
  var i=1;
  var s=process.argv[2];
  while(l>2){
    i++;
  var str=process.argv[i];
  a=s+str;
  l--;
}
  s=a;
  s=s.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
  var length=s.length;
  for(var i=0;i<length/2;i++)
    if (s.charAt(i) !== s.charAt(length-(1+i))) {
         process.stdout.write('NO');
         return false;
      }
   process.stdout.write('YES');

}
isPalindrom();
