// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/sniff","dojo/touch","dojo/dom-geometry","./DomUtil","dojo/domReady!"],(function(e,n,t,o,r,u){var i,c={};c._latestEvent=null,c._setLatestEvent=function(e){c._latestEvent=e},c._getLatestEvent=function(){return c._latestEvent},t("touch")?(n(document.body,o.press,(function(e){c._setLatestEvent(d(e))})),n(document.body,o.move,(function(e){c._setLatestEvent(d(e))}))):n(document.body,"mousemove",(function(e){c._setLatestEvent(d(e))})),n(document.body,"mousedown",(function(){i||(i=!0,n.once(document.body,"mouseup, click",(function(){i=!1})))})),c.getCursorPosition=function(){return c._latestEvent},c.isMouseOver=function(n,t){var o=t&&t.event||c._latestEvent;if(!(n&&n.parentNode&&n.getBoundingClientRect&&o))return!1;if(t&&t.checkAllChildren){delete(t=e.mixin({},t)).checkAllChildren;var i=!1;return u.traverseChildren(n,(function(e){if(c.isMouseOver(e,t))return i=!0,!0})),i}return c.isMouseOverBox(r.position(n),t)},c.isMouseOverBox=function(n,t){if(!n)return!1;var o=t&&t.event||c._latestEvent;if(t&&t.ignoreBorderTolerance){var r=t.ignoreBorderTolerance;(n=e.mixin({},n)).x+=r,n.y+=r,n.w-=2*r,n.h-=2*r}return n.x<=o.clientX&&n.x+n.w>=o.clientX&&n.y<=o.clientY&&n.y+n.h>=o.clientY};var s=function(e){if(e.touches){if(!e.touches.length)return e.changedTouches[0];for(var n,t=e.touches[0].identifier,o=0;o<e.changedTouches.length;o++)if(e.changedTouches[o].identifier===t){n=e.changedTouches[o];break}return n||e.touches[0]}},d=function(e){var n=s(e);return n&&(n.type=e.type),n||e};return c.fixTouchEvent=function(e){var n=s(e);return n&&(e.screenX=n.screenX,e.screenY=n.screenY,e.clientX=n.clientX,e.clientY=n.clientY,e.pageX=n.pageX,e.pageY=n.pageY),e},c.isBeingDragged=function(){return i},c.addOverOutHandler=function(e){var t,o;function r(){clearTimeout(o),t&&t.remove()}var u=n(e.node,"mouseover",(function(u){function i(){c.isMouseOver(e.node)&&(e.onMouseOver(u),t=n(document.body,"mousemove",(function(n){c.isMouseOver(e.node)||(r(),e.onMouseOut(n))})))}r(),e.delayTimeout?o=setTimeout(i,e.delayTimeout):i()}));return{remove:function(){u.remove(),r()}}},c.addOutHandler=function(e,t){return n(document.body,"mousemove",(function(n){c.isMouseOver(e,{checkAllChildren:!0})||t(n)}))},c}));