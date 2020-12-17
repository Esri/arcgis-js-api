/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils"],(function(t,e){"use strict";t.extractState=function(t){const n=t.native;return n?{buttons:n.buttons.map((t=>t.pressed?t.value?t.value:1:0)),axes:n.axes.map((n=>function(t,n){const s=Math.abs(t);if(s<n)return 0;return e.sign(t)*(s-n)/(1-n)}(n,t.axisThreshold)))}:{buttons:[],axes:[]}},t.stateEqual=function(t,e){if(t.axes.length!==e.axes.length)return!1;if(t.buttons.length!==e.buttons.length)return!1;for(let n=0;n<t.axes.length;n++)if(t.axes[n]!==e.axes[n])return!1;for(let n=0;n<t.buttons.length;n++)if(t.buttons[n]!==e.buttons[n])return!1;return!0},t.stateIdle=function(t){for(let e=0;e<t.axes.length;e++)if(0!==t.axes[e])return!1;for(let e=0;e<t.buttons.length;e++)if(0!==t.buttons[e])return!1;return!0},Object.defineProperty(t,"__esModule",{value:!0})}));
