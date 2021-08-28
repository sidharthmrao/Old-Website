import mojs from '/node_modules/@mojs/core';

function initialize() {
    const rect = new mojs.Shape({
        shape: 'rect',
        left: '50%',
        fill: 'none',
        radius: 20,
        stroke: {'rgba(0,255,255, 1)': 'magenta'},
        strokeWidth: {10: 0},
        strokeDasharray: '100%',
        strokeDashoffset: {'-100%': '100%'},
        rotate: {0: 180},
        duration: 2000,
        repeat: 999,
    }).play();
}