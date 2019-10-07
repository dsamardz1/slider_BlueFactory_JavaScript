const topSlider = document.querySelector('.slider_row1');
const bottomSlider = document.querySelector('.slider_row2');

const topImages = document.querySelectorAll('.slider_row1 img')
const bottomImages = document.querySelectorAll('.slider_row2 img');

const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('nxt');

let topOffset = 0;
let bottomOffset = 0;

for(let i = 0; i < 5; i++)
{
    topOffset = topOffset + topImages[i].clientWidth;
    bottomOffset = bottomOffset + bottomImages[i].clientWidth;
}

const topStartState = topOffset;
const bottomStartState = bottomOffset;

let topCounter = 5;
let bottomCounter = 5;

topSlider.style.transform = 'translateX(' + topOffset + 'px)';
bottomSlider.style.transform = 'translateX(' + bottomOffset + 'px)';

nextBtn.addEventListener('click',()=>{
    if(topCounter == 0) return;
    if(bottomCounter == 0) return;

    topOffset = topOffset - topImages[topCounter-1].clientWidth;
    bottomOffset = bottomOffset - bottomImages[topCounter-1].clientWidth;
    topSlider.style.transition = '0.4s ease-in-out';
    bottomSlider.style.transition = '0.4s ease-in-out';
    topSlider.style.transform = 'translateX(' + topOffset + 'px)';
    bottomSlider.style.transform = 'translateX(' + bottomOffset + 'px)';
    topCounter--;
    bottomCounter--;
});

previousBtn.addEventListener('click',()=>{
    if(topCounter == 10) return;
    if(bottomCounter == 10) return;
    
    topOffset = topOffset + topImages[topCounter].clientWidth;
    bottomOffset = bottomOffset + bottomImages[bottomCounter].clientWidth;
    topSlider.style.transition = '0.4s ease-in-out';
    bottomSlider.style.transition = '0.4s ease-in-out';
    topSlider.style.transform = 'translateX('+ topOffset + 'px)';
    bottomSlider.style.transform = 'translateX('+ bottomOffset + 'px)';
    topCounter++;
    bottomCounter++;
});

topSlider.addEventListener('transitionend',()=>{

    if(topCounter == 0 || topCounter == 10)
    {
        topSlider.style.transition = 'none';
        topCounter = 5;
        topSlider.style.transform = 'translateX(' + topStartState +'px)';
        topOffset = topStartState;
    }
});

bottomSlider.addEventListener('transitionend',()=>{
    
    if(bottomCounter == 0 || bottomCounter == 10)
    {
        bottomSlider.style.transition = 'none';
        bottomCounter = 5;
        bottomSlider.style.transform = 'translateX(' + bottomStartState +'px)';
        bottomOffset = bottomStartState;
    }
});
