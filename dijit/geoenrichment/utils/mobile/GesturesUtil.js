// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/domReady!"],function(){var e={};return e.preventDefaultSiteBehavior=function(){document.body.style.touchAction="none"},e.enableGesturesOnNode=function(t,n){function i(e,t){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}function o(e){e.preventDefault();var t=e.changedTouches[0];if(t&&(u[t.identifier]={x:t.clientX,y:t.clientY},2==e.targetTouches.length&&Object.keys(u).length>=2)){var n=u[e.targetTouches[0].identifier],o=u[e.targetTouches[1].identifier];n&&o?a=i(n,o):u={}}}function r(e){if(e.preventDefault(),2==e.targetTouches.length&&Object.keys(u).length>=2){var t=e.targetTouches[0],o=e.targetTouches[1],r=u[t.identifier],c=u[o.identifier];if(r&&c&&a){r.x=t.clientX,r.y=t.clientY,c.x=o.clientX,c.y=o.clientY;var h=i(r,c);Math.abs(a-h)>v&&(a<h?n.onZoomIn():n.onZoomOut(),a=h)}else u={}}}function c(e){e.preventDefault();var t=e.changedTouches[0];t&&(delete u[t.identifier],a=0)}if(t){e.preventDefaultSiteBehavior();var u={},a=0,v=n.zoomTolerance||50;return t.addEventListener("touchstart",o),t.addEventListener("touchmove",r),t.addEventListener("touchend",c),{remove:function(){u=null,t.removeEventListener("touchstart",o),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",c)}}}},e});