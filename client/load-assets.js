(function() {
  fetch('http://localhost:4040/static/loader.json')
  .then((response) => response.json())
  .then((res) => {
    window.SystemJS.import('http://localhost:4040/static/' + res.version + '.js')
      .then(() => {
        console.log('The assets are loaded, latest version is:', res.version)
      })
      .catch(e => {
        console.error(e)
      });
  });
})()
