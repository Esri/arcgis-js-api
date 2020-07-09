// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./compilerUtils"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var t=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function c(e){return e?72*e/96:0}function i(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function o(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),[e,r]}function a(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function u(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),[e,r]}function d(e){return e}function s(e){return e}function v(e,r){return r?(r[0]=e.x,r[1]=e.y,r.length>2&&(r[2]=0),r):[e.x,e.y]}function f(e){return i(e.x,e.y)}function p(e,r){var n=(e instanceof HTMLElement?e:e.surface).getBoundingClientRect();return i(r.clientX-n.left,r.clientY-n.top)}r.pt2px=function(e){return e?e/72*96:0},r.px2pt=c,r.toPt=function(e){if("string"==typeof e){if(t.test(e)){var r=e.match(t),n=Number(r[1]),i=r[3]&&r[3].toLowerCase(),o="-"===e.charAt(0),a="px"===i?c(n):n;return o?-a:a}return console.warn("screenUtils.toPt: input not recognized!"),null}return e},r.createScreenPoint=i,r.createScreenPointArray=o,r.createRenderScreenPoint=a,r.createRenderScreenPointArray=u,r.createRenderScreenPointArray3=function(e,r,n){return void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=0),[e,r,n]},r.castRenderScreenPointArray=d,r.castRenderScreenPointArray3=s,r.castScreenPointArray=function(e){return e},r.screenToRender=function(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r.x*i,c=r.y*i;break;case"3d":v(r,l),e.state.camera.screenToRender(l,y),t=y[0],c=y[1]}return n?(n.x=t,n.y=c,n):a(t,c)},r.renderToScreen=function(e,r,n){var t,c;switch(e.type){case"2d":var o=window.devicePixelRatio||1;t=r.x/o,c=r.y/o;break;case"3d":v(r,y),e.state.camera.renderToScreen(y,l),t=l[0],c=l[1]}return n?(n.x=t,n.y=c,n):i(t,c)},r.screenArrayToRender=function(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]*i,c=r[1]*i;break;case"3d":e.state.camera.screenToRender(r,y),t=y[0],c=y[1]}return n?(n[0]=t,n[1]=c,n.length>2&&(n[2]=0),n):u(t,c)},r.renderArrayToScreen=function(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]/i,c=r[0]/i;break;case"3d":e.state.camera.renderToScreen(r,l),t=l[0],c=l[1]}return n?(n[0]=t,n[1]=c,n):o(t,c)},r.screenPointArrayToObject=function(e,r){return r?(r.x=e[0],r.y=e[1],r):{x:e[0],y:e[1]}},r.screenPointObjectToArray=v,r.createScreenPointFromEvent=f,r.createScreenPointFromNativeEvent=p,r.createScreenPointFromSupportedEvent=function(e,r){return r instanceof Event?p(e,r):f(r)},r.isSupportedScreenPointEvent=function(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e){var r=e.type;switch(r){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"immediate-double-click":case"hold":case"drag":case"mouse-wheel":return!0;case"key-down":case"key-up":case"gamepad":case"focus":case"blur":return!1;default:return n.neverReachedSilent(r),!1}}return!1};var y=u(),l=o()}));