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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/sniff","dojo/touch","dojo/dom-geometry","./DomUtil","dojo/domReady!"],function(e,t,n,o,i,c){function u(){return s._latestEvent}function r(t,n){if(!(t&&t.parentNode&&t.getBoundingClientRect&&s._latestEvent))return!1;if(n&&n.checkAllChildren){n=e.mixin({},n),delete n.checkAllChildren;var o=!1;return c.traverseChildren(t,function(e){if(s.isMouseOver(e,n))return o=!0,!0}),o}var u,r=i.position(t);if(n&&n.ignoreBorderTolerance){var l=n.ignoreBorderTolerance;u=e.mixin({},r),u.x+=l,u.y+=l,u.w-=2*l,u.h-=2*l}else u=r;return u.x<=s._latestEvent.clientX&&u.x+u.w>=s._latestEvent.clientX&&u.y<=s._latestEvent.clientY&&u.y+u.h>=s._latestEvent.clientY}function l(){return a}var s={};s._latestEvent=null,s._setLatestEvent=function(e){s._latestEvent=e},n("touch")?(t(document.body,o.press,function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))}),t(document.body,o.move,function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))})):t(document.body,"mousemove",function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))});var a;return t(document.body,"mousedown",function(){a||(a=!0,t.once(document.body,"mouseup, click",function(){a=!1}))}),s.getCursorPosition=u,s.isMouseOver=r,s.fixTouchEvent=function(t,n){if(t=n?e.mixin({},t):t,t.touches&&t.touches.length){var o=t.touches[0];t.clientX=o.clientX,t.clientY=o.clientY,t.pageX=o.pageX,t.pageY=o.pageY}else if(t.changedTouches&&t.changedTouches.length){var o=t.changedTouches[0];t.clientX=o.clientX,t.clientY=o.clientY,t.pageX=o.pageX,t.pageY=o.pageY}return t},s.isBeingDragged=l,s});