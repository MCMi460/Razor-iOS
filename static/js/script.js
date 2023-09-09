const URL = new URLSearchParams(window.location.search);
const VID_ID = URL.get('id');

function setIcon(icon) { // https://stackoverflow.com/a/260876
  for (let type of ['icon', 'apple-touch-icon']) {
    var link = document.querySelector(`link[rel~='${type}']`);
    if (!link) {
        link = document.createElement('link');
        link.rel = type;
        document.head.appendChild(link);
    }
    link.href = icon;
  }
}

function thumbnailFromId(id) {
  return `https://img.youtube.com/vi/${id}/default.jpg`;
}

function preload() {
  console.log('Preload Event Fired.');

  setIcon(thumbnailFromId(VID_ID));

  addEventListener('DOMContentLoaded', (event) => { // Set load function
    load();
  });
}

preload(); // Load before rest of webpage, hopefully

function load() {
  console.log('Load Event Fired.');

  document.getElementById('id').value = VID_ID;
}
