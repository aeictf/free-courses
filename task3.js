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
  var s='';
  var a=n.match(/[aeiouy]/ig);
  var b=n.match(/[bcdfghjklmnpqrstvwxz]/ig);
  var c=n.match(/[0123456789]/ig);
  if(a!==null){
  for (var i=0;i<a.length;i++)
  s+=a[i];
  s+=' ';
  }

  if(b!==null){
  for(var i=0;i<b.length;i++)
  s+=b[i];
  }
  s+=' ';
  if(c!==null){
  for(var i=0;i<c.length;i++)
    s+=c[i];
  }
process.stdout.write(s);
}

Sep(n);
