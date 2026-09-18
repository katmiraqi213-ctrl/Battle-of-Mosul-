
'use strict';

console.log('Battle of Mosul 3D - game.js loaded');

// تحسينات أولية للعبة
// ننتظر حتى تكون عناصر اللعبة الحالية جاهزة
setTimeout(() => {

    // إضافة اسم اللعبة
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
        box-shadow:0 4px 20px rgba(0,0,0,.35);
    `;

    document.body.appendChild(title);

    // مؤشر حالة اللعبة
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

}, 500);
