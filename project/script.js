const speedUpEl = document.querySelector('#speedUp');
const speedDownEl = document.querySelector('#speedDown');
const volumeUpEl = document.querySelector('#volumeUp');
const volumeDownEl = document.querySelector('#volumeDown'); 
const videoBtnEl = document.querySelector('#videoBtn');
const videoInputEl = document.querySelector('#videoInput');
const mainEl = document.querySelector('#main');

const speedUpHandler = (e) =>{
    alert('speed to increase of video');
    const videoEl = document.querySelector('#main');
    if(videoEl == null){
        return
    }
    if (videoEl.playbackRate<3){
        const increasedSpeed = videoEl.playbackRate + .5;
        videoEl.playbackRate = increasedSpeed;
    }
}
const speedDownHandler = (e) =>{
    alert('speed to increase of video');
    const videoEl = document.querySelector('#main');
    if(videoEl == null){
        return
    }
    if (videoEl.playbackRate>0){
        const decreasedSpeed = videoEl.playbackRate - .5;
        videoEl.playbackRate = decreasedSpeed;
    }
}
const handleInput = () =>{
    videoInputEl.click();
}
const acceptInputHandler = (obj) =>{
    console.log(obj);
    const selectedVideo = obj.target.files[0];
    const link = URL.createObjectURL(selectedVideo);
    const videoEl = document.createElement('video');
    videoEl.src = link;
    videoEl.setAttribute('class','video');
    mainEl.appendChild(video);
    videoEl.play();
    }
const volumeUpHandler = () =>{
    const videoEl = document.querySelector('#main');
    if(videoEl==null){
        return;
    }
    if(videoEl.volume<1){
        const increasedVolume = videoEl.volume + .1;
        videoEl.volume = increasedVolume;
    }
}
const volumeDownHandler = () =>{
    const videoEl = document.querySelector('#main');
    if(videoEl==null){
        return;
    }
    if(videoEl.volume>0){
        const decreasedVolume = videoEl.volume - .1;
        videoEl.volume = decreasedVolume;
    }
}

speedUpEl.addEventListener('click', speedUpHandler);
speedDownEl.addEventListener('click', speedDownHandler);
videoBtnEl.addEventListener('click', handleInput);
videoInputEl.addEventListener('change', acceptInputHandler);
volumeUpEl.addEventListener('click', volumeUpHandler);
volumeDownEl.addEventListener('click', volumeDownHandler);
