var l=process.argv.length-2;
var n=process.argv[2];
var i=2;
while(l>1){
  i++;
var str=process.argv[i];
n=n+str;
l--;
}

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
  var l=0;
  var a=n.match(/[aeiou]/ig);
  var b=n.match(/[bcdfghjklmnpqrstvwxyz]/ig);
  var c=n.match(/[0123456789]/ig);
  if(a!==null){
  for (var i=0;i<a.length;i++)
  s+=a[i];
  l++;
  }
  if(b!==null){
    if(l>0)
    s+=' ';
  for(var i=0;i<b.length;i++)
  s+=b[i];
  l++;
  }
  if(c!==null){
    if(l>0)
    s+=' ';
  for(var i=0;i<c.length;i++)
    s+=c[i];
  }
process.stdout.write(s);
}

Sep(n);
