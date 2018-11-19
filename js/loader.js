document.addEventListener("DOMContentLoaded", function() {
  var gudea = new FontFaceObserver('Gudea');
  var rancho = new FontFaceObserver('Rancho');
  var fontawesome = new FontFaceObserver('FontAwesome');
  var body = document.body;
  var toAnimateUp = document.getElementById('toAnimateUp');
  var toAnimateDown = document.getElementById('toAnimateDown');

  Promise.all([
    gudea.load(),
    rancho.load(),
    fontawesome.load()
  ])
  .then(function () {
    body.classList.remove('fonts-loading');
    body.classList.add('fonts-loaded');
    toAnimateUp.className = toAnimateUp.className+' animated fadeInUp';
    toAnimateDown.className = toAnimateDown.className+' animated fadeInDown';
  })
  .catch(function () {
    body.classList.remove('fonts-loading');
    body.classList.add('fonts-failed');
  });
});
