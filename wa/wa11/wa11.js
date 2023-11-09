const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgArray = ['cat1.jpeg', 'cat2.jpeg', 'cat3.jpeg', 'cat4.jpeg', 'cat5.jpeg'];
var altDict = {
    'cat1.jpeg': "cat number one",
    'cat2.jpeg': "cat number two",
    'cat3.jpeg': "cat number three",
    'cat4.jpeg': "cat number four",
    'cat5.jpeg': "cat number five",
}

for(img of imgArray){
    const newImage = document.createElement('img');
        newImage.setAttribute('src', img);
        newImage.setAttribute('alt', altDict[img]);
        thumbBar.appendChild(newImage);

        newImage.addEventListener('click', e => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.src;

        })
}

function darkening(){
    if (btn.className === 'dark') {
        btn.className = 'light';
        btn.textContent = 'Enlighten!';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else if (btn.className === 'light'){
        btn.className = 'dark';
        btn.textContent = 'Darken!';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    }
    btn.addEventListener('click', darkening);
thumbnailLoop();

thumbBar.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
}
}); 