const barre = document.getElementById("barre");
const navItems = document.querySelectorAll(".nav-link");
const mesAchatsLink = document.querySelector('a[href="#mesAchats"]');
const articleLink = document.querySelector('a[href="#article"]');

function updateBarre(el){
  const offsetLeft = (el.offsetLeft  + ((el.offsetWidth) / 2) - ((barre.offsetWidth) / 2))/16 ;
  barre.style.left = `${offsetLeft}em`;
  console.log(el.offsetLeft+" | "+barre.offsetWidth);
}

navItems.forEach((item,index) => {
  item.addEventListener('click', (event) => {
    updateBarre(event.currentTarget);
  });
});
//Position initiale
document.addEventListener('DOMContentLoaded',() => {
  const activeItem = document.querySelector('.nav-item a.active');
  console.log(activeItem);
  
  updateBarre(activeItem);
})

mesAchatsLink.addEventListener('click', () => {
  barre.classList.add('barreEffetAchats');
});

articleLink.addEventListener('click', () => {
  barre.classList.remove('barreEffetAchats');
});


/** Pour m'amuser */

const no = document.querySelector('.no');
const box = document.querySelector('.box');

let positionX = 0;
let positionY = 0;
let i = 0 ;

const yes = document.querySelector(".yes");
const overlayBox = document.querySelector(".overlayBox");
const coeurs = document.querySelector('.coeurs');
const message = document.querySelector('.message');
const fermer = document.querySelector('.fermer');
const capturer = document.querySelector('.capturer');

no.addEventListener('click',(event) => { ouvrirPopup(overlayBox, capturer); });

yes.addEventListener('click', () => { ouvrirPopup(overlayBox, message); });

fermer.addEventListener('click', () => { fermerPopup(overlayBox, message); });

overlayBox.addEventListener('click', () => { fermerPopup(overlayBox, message); });

yes.addEventListener('mouseover', () => {
  let i = 0;
    const interval = setInterval(()=>{
      const coeur = document.createElement('div');
      coeur.textContent='♥';
      coeur.classList.add('coeur');
      console.log(coeur);
      
      coeur.style.top = `${Math.random()*20}px`;
      coeur.style.left = `${Math.random()*20}px`;
      coeurs.appendChild(coeur);
      i++;
      if (i>=100) {
        clearInterval(interval);
      }
    }, 200)
    
});

yes.addEventListener('mouseout', () => {
  coeurs.innerHTML = '';

});

no.addEventListener('mouseover',(event) =>{
  positionX = Math.random()*300 - 150;
  positionY = (Math.random()*200 - 100.5);
  let r = Math.random()*200-1;
  let g = Math.random()*200;
  let b = Math.random()*200;
  box.style.transform = `translate(${positionX}px, ${positionY}px)`;
  no.style.color = `rgb(${g},${r},${b})`;
  no.style.borderColor = `rgb(${r},${g},${b})`;
  i++;
  
  if(i === 3){
    document.getElementById('texte1').classList.remove("d-none");
    document.getElementById('texte1').classList.add("texte1");
  }
  if(i === 5){
    document.getElementById('texte2').classList.remove("d-none");
    document.getElementById('texte2').classList.add("texte2");
  }
  if(i === 6){
    document.getElementById('texte3').classList.remove("d-none");
    document.getElementById('texte3').classList.add("texte3");
  }
  if(i === 14){
    document.getElementById('verset').classList.remove("d-none");
    document.getElementById('verset').classList.add("verset");
  }
});


function fermerPopup(overlay, popup){
  overlay.classList.add('d-none');
  popup.classList.add('d-none');
}
function ouvrirPopup(overlay,popup){
  overlay.classList.remove('d-none')
  popup.classList.remove('d-none');
}

/**
 * const navItems = document.querySelectorAll('.nav-item a');
const indicator = document.querySelector('.indicator');

function updateIndicator(el) {
    const offsetLeft = el.offsetLeft + (el.offsetWidth / 2) - (indicator.offsetWidth / 2);
    indicator.style.left = `${offsetLeft}px`;
    indicator.style.width = '40px'; // Largeur fixe pour la barre
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(i => i.classList.remove('active'));
        e.currentTarget.classList.add('active');
        updateIndicator(e.currentTarget);
    });
});

// Initial position
document.addEventListener('DOMContentLoaded', () => {
    const activeItem = document.querySelector('.nav-item a.active') || navItems[0];
    updateIndicator(activeItem);
});

 */

/** Search script */
const timeline = new TimelineLite({paused:true,reversed:true}),
  $circle = $(".circle"),
  $stick = $(".stick"),
  $close = $(".close"),
  $searchField = $(".field"),
  transitionSpeed = .5;

timeline.to(".circle", transitionSpeed, {className:"+=active"},0)
  .to(".stick",transitionSpeed, { className:"+=active"},0)
  .to(".close",.2, {display:"block", opacity:1,zIndex:3});


  