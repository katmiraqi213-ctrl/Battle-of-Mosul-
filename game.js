'use strict';

console.log('Battle of Mosul 3D - Enhanced Environment loaded');

const style = document.createElement('style');

style.textContent = `
#mosul-info {
    position: fixed;
    top: 145px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 7px 14px;
    border-radius: 12px;
    background: rgba(0,0,0,.55);
    color: white;
    font: 13px Arial;
    pointer-events: none;
    backdrop-filter: blur(6px);
}

#mosul-vignette {
    position: fixed;
    inset: 0;
    z-index: 10;
    pointer-events: none;
    background:
        radial-gradient(
            ellipse at center,
            transparent 45%,
            rgba(0,0,0,.28) 100%
        );
}

#mosul-location {
    position: fixed;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 8px 15px;
    border-radius: 14px;
    background: rgba(8,12,16,.72);
    color: #fff;
    font: bold 13px Arial;
    pointer-events: none;
}
`;

document.head.appendChild(style);

const info = document.createElement('div');
info.id = 'mosul-info';
info.textContent = '🏙️ الموصل • الطريق إلى الحضر';
document.body.appendChild(info);

const vignette = document.createElement('div');
vignette.id = 'mosul-vignette';
document.body.appendChild(vignette);

const locationText = document.createElement('div');
locationText.id = 'mosul-location';
locationText.textContent = '📍 مركز قضاء الحضر';
document.body.appendChild(locationText);

console.log('Enhanced environment UI ready');
