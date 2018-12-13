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

define(["dojo/_base/lang","dojo/on","dojo/sniff","dojo/touch","dojo/dom-geometry","./DomUtil","dojo/domReady!"],function(e,n,t,o,i,c){function u(){return s._latestEvent}function r(n,t){var o=t&&t.event||s._latestEvent;if(!(n&&n.parentNode&&n.getBoundingClientRect&&o))return!1;if(t&&t.checkAllChildren){t=e.mixin({},t),delete t.checkAllChildren;var u=!1;return c.traverseChildren(n,function(e){if(s.isMouseOver(e,t))return u=!0,!0}),u}var r,l=i.position(n);if(t&&t.ignoreBorderTolerance){var a=t.ignoreBorderTolerance;r=e.mixin({},l),r.x+=a,r.y+=a,r.w-=2*a,r.h-=2*a}else r=l;return r.x<=o.clientX&&r.x+r.w>=o.clientX&&r.y<=o.clientY&&r.y+r.h>=o.clientY}function l(){return a}var s={};s._latestEvent=null,s._setLatestEvent=function(e){s._latestEvent=e},t("touch")?(n(document.body,o.press,function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))}),n(document.body,o.move,function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))})):n(document.body,"mousemove",function(e){s._setLatestEvent(s.fixTouchEvent(e,!0))});var a;return n(document.body,"mousedown",function(){a||(a=!0,n.once(document.body,"mouseup, click",function(){a=!1}))}),s.getCursorPosition=u,s.isMouseOver=r,s.fixTouchEvent=function(n,t){if(n=t?e.mixin({},n):n,n.touches&&1===n.touches.length){var o=n.touches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}else if(n.changedTouches&&1===n.changedTouches.length){var o=n.changedTouches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}return n},s.isBeingDragged=l,s});