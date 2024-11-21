const speedUpEl = document.querySelector('#speedUp');
const speedDownEl = document.querySelector('#speedDown');
const volumeUpEl = document.querySelector('#volumeUp');
const volumeDownEl = document.querySelector('#volumeDown'); 
const videoBtnEl = document.querySelector('#videoBtn');
const videoInputEl = document.querySelector('#videoInput');

const speedUpHandler = (e) =>{
    alert('speed to increase of video');
}
const handleInput = () =>{
    videoInputEl.click();
}
const acceptInputHandler = (obj) =>{
    console.log(obj);
}
speedUpEl.addEventListener('click', speedUpHandler)
videoBtnEl.addEventListener('click', handleInput);
videoInputEl.addEventListener('change', acceptInputHandler);
