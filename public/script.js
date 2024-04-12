const userVideo = document.getElementById('user-video');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    
})


window.addEventListener('load', async e => {
    const media = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    })
    userVideo.srcObject = media;
});