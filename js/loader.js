document.addEventListener("DOMContentLoaded", function() {
  var gudea = new FontFaceObserver('Gudea');
  var rancho = new FontFaceObserver('Rancho');
  var mainContainer = document.getElementById('main-container');
  var toAnimateUp = document.getElementById('toAnimateUp');
  var toAnimateDown = document.getElementById('toAnimateDown');
  var svgLoading = document.getElementById('loading');

  Promise.all([
    gudea.load(),
    rancho.load(),
    //new Promise(resolve => setTimeout(resolve, 2000, 1))
  ])
  .then(function () {
    svgLoading.classList.remove('loader-loading');
    svgLoading.classList.add('loader-hidden');
    mainContainer.classList.remove('fonts-loading');
    mainContainer.classList.add('fonts-loaded');
    toAnimateUp.className = toAnimateUp.className+' animated fadeInUp';
    toAnimateDown.className = toAnimateDown.className+' animated fadeInDown';
  })
  .catch(function () {
    svgLoading.classList.remove('loader-loading');
    svgLoading.classList.add('loader-hidden');
    mainContainer.classList.remove('fonts-loading');
    mainContainer.classList.add('fonts-failed');
  });
});
