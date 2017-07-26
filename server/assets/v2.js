(function() {
  console.log('v2');
  var div = document.createElement("div");
  var strong = document.createElement("strong");
  div.style.textAlign = 'center';
  strong.innerText = 'This is version v2';
  div.appendChild(strong);
  document.getElementById('root').appendChild(div);
})()