'use strict';

console.log('Battle of Mosul 3D - controls active');

// عنوان اللعبة
const title = document.createElement('div');
title.textContent = '⚔️ BATTLE OF MOSUL 3D';
title.style.cssText = `
    position:fixed;
    top:72px;
    left:50%;
    transform:translateX(-50%);
    z-index:20;
    padding:8px 16px;
    border-radius:12px;
    background:rgba(5,10,15,.65);
    color:#fff;
    font:bold 14px Arial;
    letter-spacing:1px;
    pointer-events:none;
    backdrop-filter:blur(5px);
`;
document.body.appendChild(title);

// حالة اللعبة
const status = document.createElement('div');
status.textContent = '🟢 العالم مفتوح';
status.style.cssText = `
    position:fixed;
    top:112px;
    left:50%;
    transform:translateX(-50%);
    z-index:20;
    padding:5px 11px;
    border-radius:10px;
    background:rgba(5,10,15,.5);
    color:#d8f5dc;
    font:12px Arial;
    pointer-events:none;
`;
document.body.appendChild(status);

// التأكد من أن أزرار التحكم الموجودة في index.html
// تبقى فوق أي عناصر إضافية
const controls = document.querySelectorAll(
    'button, #up, #down, #left, #right, #reset'
);

controls.forEach((el) => {
    el.style.pointerEvents = 'auto';
    el.style.zIndex = '100';
});

// لوحة لمس احتياطية
const pad = document.createElement('div');

pad.style.cssText = `
    position:fixed;
    right:18px;
    bottom:25px;
    z-index:100;
    display:grid;
    grid-template-columns:60px 60px 60px;
    grid-template-rows:60px 60px 60px;
    gap:6px;
    pointer-events:auto;
`;

function makeButton(textValue) {
    const b = document.createElement('button');

    b.textContent = textValue;

    b.style.cssText = `
        width:60px;
        height:60px;
        border:1px solid rgba(255,255,255,.3);
        border-radius:16px;
        background:rgba(0,0,0,.58);
        color:white;
        font-size:25px;
        font-weight:bold;
        touch-action:none;
        user-select:none;
        -webkit-user-select:none;
    `;

    return b;
}

const empty1 = document.createElement('div');
const empty2 = document.createElement('div');
const empty3 = document.createElement('div');
const empty4 = document.createElement('div');
const empty5 = document.createElement('div');

const up = makeButton('▲');
const left = makeButton('◀');
const down = makeButton('▼');
const right = makeButton('▶');

pad.appendChild(empty1);
pad.appendChild(up);
pad.appendChild(empty2);

pad.appendChild(left);
pad.appendChild(empty3);
pad.appendChild(right);

pad.appendChild(empty4);
pad.appendChild(down);
pad.appendChild(empty5);

document.body.appendChild(pad);

// محاولة ربط أزرار اللعبة الأصلية
function pressKey(key) {
    window.dispatchEvent(
        new KeyboardEvent('keydown', {
            key: key,
            code: key === 'ArrowUp'
                ? 'ArrowUp'
                : key === 'ArrowDown'
                ? 'ArrowDown'
                : key === 'ArrowLeft'
                ? 'ArrowLeft'
                : 'ArrowRight'
        })
    );
}

function releaseKey(key) {
    window.dispatchEvent(
        new KeyboardEvent('keyup', {
            key: key
        })
    );
}

function bindTouch(button, key) {

    const start = (e) => {
        e.preventDefault();
        pressKey(key);
    };

    const end = (e) => {
        e.preventDefault();
        releaseKey(key);
    };

    button.addEventListener('touchstart', start, {
        passive: false
    });

    button.addEventListener('touchend', end, {
        passive: false
    });

    button.addEventListener('touchcancel', end, {
        passive: false
    });

    button.addEventListener('mousedown', start);
    button.addEventListener('mouseup', end);
    button.addEventListener('mouseleave', end);
}

bindTouch(up, 'ArrowUp');
bindTouch(down, 'ArrowDown');
bindTouch(left, 'ArrowLeft');
bindTouch(right, 'ArrowRight');

console.log('Touch controls connected');
