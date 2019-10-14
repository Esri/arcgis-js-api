// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./compilerUtils"],function(e,r,n){function t(e){return e?e/72*r.DPI:0}function c(e){return e?72*e/r.DPI:0}function i(e){if("string"==typeof e){if(A.test(e)){var r=e.match(A),n=Number(r[1]),t=r[3]&&r[3].toLowerCase(),i="-"===e.charAt(0),o="px"===t?c(n):n;return i?-o:o}return console.warn(T),null}return e}function o(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function a(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),[e,r]}function u(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function s(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),v([e,r])}function d(e,r,n){return void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=0),f([e,r,n])}function v(e){return e}function f(e){return e}function p(e){return e}function y(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r.x*i,c=r.y*i;break;case"3d":w(r,k),e.state.camera.screenToRender(k,g),t=g[0],c=g[1]}return n?(n.x=t,n.y=c,n):u(t,c)}function l(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r.x/i,c=r.y/i;break;case"3d":w(r,g),e.state.camera.renderToScreen(g,k),t=k[0],c=k[1]}return n?(n.x=t,n.y=c,n):o(t,c)}function P(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]*i,c=r[1]*i;break;case"3d":e.state.camera.screenToRender(r,g),t=g[0],c=g[1]}return n?(n[0]=t,n[1]=c,n.length>2&&(n[2]=0),n):s(t,c)}function x(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]/i,c=r[0]/i;break;case"3d":e.state.camera.renderToScreen(r,k),t=k[0],c=k[1]}return n?(n[0]=t,n[1]=c,n):a(t,c)}function S(e,r){return r?(r.x=e[0],r.y=e[1],r):{x:e[0],y:e[1]}}function w(e,r){return r?(r[0]=e.x,r[1]=e.y,r.length>2&&(r[2]=0),r):[e.x,e.y]}function m(e){return o(e.x,e.y)}function R(e,r){var n=(e instanceof HTMLElement?e:e.surface).getBoundingClientRect();return o(r.clientX-n.left,r.clientY-n.top)}function h(e,r){return r instanceof Event?R(e,r):m(r)}function b(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e){var r=e.type;switch(r){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"hold":case"drag":case"mouse-wheel":return!0;case"key-down":case"key-up":case"gamepad":case"focus":case"blur":return!1;default:return n.neverReachedSilent(r),!1}}return!1}Object.defineProperty(r,"__esModule",{value:!0});var A=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,T="screenUtils.toPt: input not recognized!";r.DPI=96,r.pt2px=t,r.px2pt=c,r.toPt=i,r.createScreenPoint=o,r.createScreenPointArray=a,r.createRenderScreenPoint=u,r.createRenderScreenPointArray=s,r.createRenderScreenPointArray3=d,r.castRenderScreenPointArray=v,r.castRenderScreenPointArray3=f,r.castScreenPointArray=p,r.screenToRender=y,r.renderToScreen=l,r.screenArrayToRender=P,r.renderArrayToScreen=x,r.screenPointArrayToObject=S,r.screenPointObjectToArray=w,r.createScreenPointFromEvent=m,r.createScreenPointFromNativeEvent=R,r.createScreenPointFromSupportedEvent=h,r.isSupportedScreenPointEvent=b;var g=s(),k=a()});