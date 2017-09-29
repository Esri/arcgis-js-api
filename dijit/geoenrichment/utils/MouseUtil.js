// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/dom-geometry","dojo/domReady!"],function(e,n,o){function t(){return u}function i(n,t){if(!(n&&n.parentNode&&n.getBoundingClientRect&&u))return!1;var i,c=o.position(n);if(t&&t.ignoreBorderTolerance){var r=t.ignoreBorderTolerance;i=e.mixin({},c),i.x+=r,i.y+=r,i.w-=2*r,i.h-=2*r}else i=c;return i.x<=u.clientX&&i.x+i.w>=u.clientX&&i.y<=u.clientY&&i.y+i.h>=u.clientY}function c(){return a}var u,r={};n(document.body,"mousemove, touchmove",function(e){u=r.fixTouchEvent(e,!0)});var a;return n(document.body,"mousedown",function(){a||(a=!0,n.once(document.body,"mouseup, click",function(){a=!1}))}),r.getCursorPosition=t,r.isMouseOver=i,r.fixTouchEvent=function(n,o){if(n=o?e.mixin({},n):n,n.touches&&n.touches.length){var t=n.touches[0];n.clientX=t.clientX,n.clientY=t.clientY,n.pageX=t.pageX,n.pageY=t.pageY}else if(n.changedTouches&&n.changedTouches.length){var t=n.changedTouches[0];n.clientX=t.clientX,n.clientY=t.clientY,n.pageX=t.pageX,n.pageY=t.pageY}return n},r.isBeingDragged=c,r});