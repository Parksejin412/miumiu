var ripple6 = new RippleEffect({
    parent: document.querySelector('.showmain'),
    texture: 'img/showmainimg.webp',
    intensity: 1.2, //1.2
    strength:0.08,//5
    waveSpeed: 0.005,//0.008
    hover: false,
});
document.querySelector('.start').addEventListener('click', ripple6.start);
document.querySelector('.start').click();
document.querySelector('.stop').addEventListener('click', ripple6.stop);
