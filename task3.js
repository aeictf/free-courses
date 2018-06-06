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
  var s=0;
  var a=n.match(/[aeiou]/ig);
  var b=n.match(/[bcdfghjklmnpqrstvwxyz]/ig);
  var c=n.match(/[0123456789]/ig);
  if(a!==null){
    s++;
  for (var i=0;i<a.length;i++)
    process.stdout.write(a[i]);
  }
  if(b!==null){
    if(s>0)
      process.stdout.write(' ');
  for(var i=0;i<b.length;i++)
    process.stdout.write(b[i]);
  s++;
  }
  if(c!==null){
    if(s>0)
      process.stdout.write(' ');
  for(var i=0;i<c.length;i++)
    process.stdout.write(c[i]);
  }

}

Sep(n);
