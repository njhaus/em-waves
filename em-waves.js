// POPOVERS

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Hamburger

document.querySelector('.first-button').addEventListener('click', function () {
document.querySelector('.animated-icon1').classList.toggle('open');
  document.querySelector('.collapse').classList.toggle('show');
});


// MAIN tabs
const aboutTab = document.querySelector('#about-tab');
const techTab = document.querySelector('#tech-tab');
const inventionsTab = document.querySelector('#inventions-tab');
const aboutWindow = document.querySelector('#about-window');
const techWindow = document.querySelector('#tech-window');
const inventionsWindow = document.querySelector('#inventions-window');
const mainTabs = document.querySelector('#main-tabs');
const navTabs = [aboutTab, techTab, inventionsTab];
const windows = [aboutWindow, techWindow,inventionsWindow];

document.querySelector('#main-tabs').addEventListener('click', function(e) {
 
    const target = e.target; 
        if (target.matches('a'))  {
          navTabs.forEach(tab => tab.classList.remove('active'));
          target.classList.add('active');
          windows.forEach(window => window.classList.add('inactive'));
          for (let i=0; i<windows.length; i++) {
            console.log(navTabs[i]);
            if (navTabs[i].classList.contains('active')) {
              windows[i].classList.remove('inactive');
            }
          }
        }
      })