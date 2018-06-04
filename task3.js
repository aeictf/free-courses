  var l=process.argv.length-2;
var n=process.argv[2];
  var i=2;
  while(l>1){
    i++;
  var str=process.argv[i];
  n=n+str;
  l--;
}
function Sep(n){
  var a=n.match(/[aeiou]/ig);
  var b=n.match(/[bcdfghjklmnpqrstvwxyz]/ig);
  var c=n.match(/[0123456789]/ig);
  if(a!==null){
  for (var i=0;i<a.length;i++)
    process.stdout.write(a[i]);
  }
  if(b!==null){
  process.stdout.write(' ');
  for(var i=0;i<b.length;i++)
    process.stdout.write(b[i]);
  }
  if(c!==null){
  process.stdout.write(' ');
  for(var i=0;i<c.length;i++)
    process.stdout.write(c[i]);
  }

}

Sep(n);
