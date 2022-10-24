const body = document.querySelector('.bodyy'),
      gun = document.querySelector('.gun'),
      sanzerObj = document.querySelector('.sanzer'),
      rezervaObj = document.querySelector('.rezerva'),
      exitBtn = document.querySelector('.exit-btn');
      blackBackg = document.querySelector('.black-backg'),
      aimaga = document.querySelector('.aimaga'),
      meta = document.querySelector('.meta');

let mmX = undefined;
let mmY = undefined;
let municija = 7;
let rezerva = 21;
let optika = false



exitBtn.addEventListener('click', () => {
    let audio = document.querySelector('.audio');
    audio.pause();
    window.location.href = "index.html";
})

document.addEventListener('contextmenu', event => event.preventDefault());

body.addEventListener('mousemove', e => {
    if(optika == true) {
        mmY = e.pageY;
        mmX = e.pageX;

        let pozicija = (mmX - 1800) + 'px ' + (mmY - 1800 ) + 'px'; 
        

        body.style.backgroundPosition = pozicija;
        body.style.backgroundSize = '300%';
    }else {
        body.style.backgroundPosition = '0% 15%'
        body.style.backgroundSize = '100%';
        mmY = e.pageY;
        mmX = e.pageX;
        if(mmY >= 390 ) {
            gun.setAttribute('style', 'top:'+ (mmY -370) + 'px; left:'+ (mmX-650) +'px;' );
        }else {
            gun.setAttribute('style', 'left:'+ (mmX-680) +'px;' );
        }
    }

    
});

body.addEventListener('mousedown', e => {
    if(e.button == 0) {
        igranka()
    }else if(e.button == 2){
        zumiranje()
    } else {

    }
}) 

function igranka() {
    let audio = document.querySelector('.audio');
        let audioDrop = document.querySelector('.audio-drop');
        audio.play()
        audioDrop.play();

        if(municija == 0) {
            rezerva -= 7;
            municija = 7;
        }
        municija -= 1;
        sanzerObj.textContent = municija
        rezervaObj.textContent = rezerva;
        if(rezerva <= 0 && municija <= 1){
            console.log('GAME OVER')
        }
}



function zumiranje() {

    if(optika == true) {
        optika = false
        gun.setAttribute('src', './assets/gun.png');
        aimaga.style.visibility = 'hidden';
        body.style.cursor = 'crosshair';
        
    }else {
        optika = true;
        gun.setAttribute('src', 'none');
        aimaga.style.visibility = 'visible';
        body.style.cursor = 'none';
        
    }


    

    console.log(aimaga);
}