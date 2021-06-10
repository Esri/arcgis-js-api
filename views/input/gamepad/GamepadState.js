/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils"],(function(t,e){"use strict";function n(t){const e=t.native;return e?{buttons:e.buttons.map((t=>t.pressed?t.value?t.value:1:0)),axes:e.axes.map((e=>u(e,t.axisThreshold)))}:{buttons:[],axes:[]}}function s(t,e){if(t.axes.length!==e.axes.length)return!1;if(t.buttons.length!==e.buttons.length)return!1;for(let n=0;n<t.axes.length;n++)if(t.axes[n]!==e.axes[n])return!1;for(let n=0;n<t.buttons.length;n++)if(t.buttons[n]!==e.buttons[n])return!1;return!0}function r(t){for(let e=0;e<t.axes.length;e++)if(0!==t.axes[e])return!1;for(let e=0;e<t.buttons.length;e++)if(0!==t.buttons[e])return!1;return!0}function u(t,n){const s=Math.abs(t);return s<n?0:e.sign(t)*(s-n)/(1-n)}t.extractState=n,t.stateEqual=s,t.stateIdle=r,Object.defineProperty(t,"__esModule",{value:!0})}));
