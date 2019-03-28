// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./compilerUtils","./libs/gl-matrix-2/vec2f64","./libs/gl-matrix-2/vec3f64"],function(e,r,n,t,c){function i(e){return e?e/72*r.DPI:0}function o(e){return e?72*e/r.DPI:0}function a(e){if("string"==typeof e){if(T.test(e)){var r=e.match(T),n=Number(r[1]),t=r[3]&&r[3].toLowerCase(),c="-"===e.charAt(0),i="px"===t?o(n):n;return c?-i:i}return console.warn(k),null}return e}function u(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function s(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),t.vec2f64.fromValues(e,r)}function d(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),{x:e,y:r}}function f(e,r){return void 0===e&&(e=0),void 0===r&&(r=0),l(t.vec2f64.fromValues(e,r))}function v(e,r,n){return void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=0),p(c.vec3f64.fromValues(e,r,n))}function l(e){return e}function p(e){return e}function y(e){return e}function P(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r.x*i,c=r.y*i;break;case"3d":R(r,j),e.state.camera.screenToRender(j,E),t=E[0],c=E[1]}return n?(n.x=t,n.y=c,n):d(t,c)}function m(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r.x/i,c=r.y/i;break;case"3d":R(r,E),e.state.camera.renderToScreen(E,j),t=j[0],c=j[1]}return n?(n.x=t,n.y=c,n):u(t,c)}function x(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]*i,c=r[1]*i;break;case"3d":e.state.camera.screenToRender(r,E),t=E[0],c=E[1]}return n?(n[0]=t,n[1]=c,n.length>2&&(n[2]=0),n):f(t,c)}function S(e,r,n){var t,c;switch(e.type){case"2d":var i=window.devicePixelRatio||1;t=r[0]/i,c=r[0]/i;break;case"3d":e.state.camera.renderToScreen(r,j),t=j[0],c=j[1]}return n?(n[0]=t,n[1]=c,n):s(t,c)}function w(e,r){return r?(r.x=e[0],r.y=e[1],r):{x:e[0],y:e[1]}}function R(e,r){return r?(r[0]=e.x,r[1]=e.y,r.length>2&&(r[2]=0),r):t.vec2f64.fromValues(e.x,e.y)}function b(e){return u(e.x,e.y)}function h(e,r){var n=(e instanceof HTMLElement?e:e.surface).getBoundingClientRect();return u(r.clientX-n.left,r.clientY-n.top)}function g(e,r){return r instanceof Event?h(e,r):b(r)}function A(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e){var r=e.type;switch(r){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"hold":case"drag":case"mouse-wheel":return!0;case"key-down":case"key-up":case"gamepad":case"focus":case"blur":return!1;default:return n.neverReachedSilent(r),!1}}return!1}Object.defineProperty(r,"__esModule",{value:!0});var T=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,k="screenUtils.toPt: input not recognized!";r.DPI=96,r.pt2px=i,r.px2pt=o,r.toPt=a,r.createScreenPoint=u,r.createScreenPointArray=s,r.createRenderScreenPoint=d,r.createRenderScreenPointArray=f,r.createRenderScreenPointArray3=v,r.castRenderScreenPointArray=l,r.castRenderScreenPointArray3=p,r.castScreenPointArray=y,r.screenToRender=P,r.renderToScreen=m,r.screenArrayToRender=x,r.renderArrayToScreen=S,r.screenPointArrayToObject=w,r.screenPointObjectToArray=R,r.createScreenPointFromEvent=b,r.createScreenPointFromNativeEvent=h,r.createScreenPointFromSupportedEvent=g,r.isSupportedScreenPointEvent=A;var E=f(),j=s()});