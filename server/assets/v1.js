(function() {
  console.log('v1');
  var div = document.createElement("div");
  div.style.textAlign = 'center';
  div.innerText = 'This is version v1';
  document.getElementById('root').appendChild(div);
})()