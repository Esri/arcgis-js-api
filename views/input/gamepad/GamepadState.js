/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t){const n=t.native;return n?{buttons:n.buttons.map((t=>t.pressed?t.value?t.value:1:0)),axes:n.axes.map((n=>s(n,t.axisThreshold)))}:{buttons:[],axes:[]}}function n(t,n){if(t.axes.length!==n.axes.length)return!1;if(t.buttons.length!==n.buttons.length)return!1;for(let e=0;e<t.axes.length;e++)if(t.axes[e]!==n.axes[e])return!1;for(let e=0;e<t.buttons.length;e++)if(t.buttons[e]!==n.buttons[e])return!1;return!0}function e(t){for(let n=0;n<t.axes.length;n++)if(0!==t.axes[n])return!1;for(let n=0;n<t.buttons.length;n++)if(0!==t.buttons[n])return!1;return!0}function s(t,n){const e=Math.abs(t);return e<n?0:Math.sign(t)*(e-n)/(1-n)}export{t as extractState,n as stateEqual,e as stateIdle};
