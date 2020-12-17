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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/sniff","dojo/touch","dojo/dom-geometry","./DomUtil","dojo/domReady!"],(function(e,n,t,o,i,u){var c,r={};return r._latestEvent=null,r._setLatestEvent=function(e){r._latestEvent=e},t("touch")?(n(document.body,o.press,(function(e){r._setLatestEvent(r.fixTouchEvent(e,!0))})),n(document.body,o.move,(function(e){r._setLatestEvent(r.fixTouchEvent(e,!0))}))):n(document.body,"mousemove",(function(e){r._setLatestEvent(r.fixTouchEvent(e,!0))})),n(document.body,"mousedown",(function(){c||(c=!0,n.once(document.body,"mouseup, click",(function(){c=!1})))})),r.getCursorPosition=function(){return r._latestEvent},r.isMouseOver=function(n,t){var o=t&&t.event||r._latestEvent;if(!(n&&n.parentNode&&n.getBoundingClientRect&&o))return!1;if(t&&t.checkAllChildren){delete(t=e.mixin({},t)).checkAllChildren;var c=!1;return u.traverseChildren(n,(function(e){if(r.isMouseOver(e,t))return c=!0,!0})),c}return r.isMouseOverBox(i.position(n),t)},r.isMouseOverBox=function(n,t){if(!n)return!1;var o=t&&t.event||r._latestEvent;if(t&&t.ignoreBorderTolerance){var i=t.ignoreBorderTolerance;(n=e.mixin({},n)).x+=i,n.y+=i,n.w-=2*i,n.h-=2*i}return n.x<=o.clientX&&n.x+n.w>=o.clientX&&n.y<=o.clientY&&n.y+n.h>=o.clientY},r.fixTouchEvent=function(n,t){if((n=t?e.mixin({},n):n).touches&&1===n.touches.length){var o=n.touches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}else if(n.changedTouches&&1===n.changedTouches.length){o=n.changedTouches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}return n},r.isBeingDragged=function(){return c},r.addOverOutHandler=function(e){var t,o;function i(){clearTimeout(o),t&&t.remove()}var u=n(e.node,"mouseover",(function(u){function c(){r.isMouseOver(e.node)&&(e.onMouseOver(u),t=n(document.body,"mousemove",(function(n){r.isMouseOver(e.node)||(i(),e.onMouseOut(n))})))}i(),e.delayTimeout?o=setTimeout(c,e.delayTimeout):c()}));return{remove:function(){u.remove(),i()}}},r.addOutHandler=function(e,t){return n(document.body,"mousemove",(function(n){r.isMouseOver(e,{checkAllChildren:!0})||t(n)}))},r}));