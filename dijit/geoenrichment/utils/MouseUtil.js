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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/sniff","dojo/touch","dojo/dom-geometry","./DomUtil","dojo/domReady!"],function(e,n,t,o,i,u){function r(){return s}var c={};c._latestEvent=null,c._setLatestEvent=function(e){c._latestEvent=e},t("touch")?(n(document.body,o.press,function(e){c._setLatestEvent(c.fixTouchEvent(e,!0))}),n(document.body,o.move,function(e){c._setLatestEvent(c.fixTouchEvent(e,!0))})):n(document.body,"mousemove",function(e){c._setLatestEvent(c.fixTouchEvent(e,!0))});var s;return n(document.body,"mousedown",function(){s||(s=!0,n.once(document.body,"mouseup, click",function(){s=!1}))}),c.getCursorPosition=function(){return c._latestEvent},c.isMouseOver=function(n,t){var o=t&&t.event||c._latestEvent;if(!(n&&n.parentNode&&n.getBoundingClientRect&&o))return!1;if(t&&t.checkAllChildren){t=e.mixin({},t),delete t.checkAllChildren;var r=!1;return u.traverseChildren(n,function(e){if(c.isMouseOver(e,t))return r=!0,!0}),r}return c.isMouseOverBox(i.position(n),t)},c.isMouseOverBox=function(n,t){if(!n)return!1;var o=t&&t.event||c._latestEvent;if(t&&t.ignoreBorderTolerance){var i=t.ignoreBorderTolerance;n=e.mixin({},n),n.x+=i,n.y+=i,n.w-=2*i,n.h-=2*i}return n.x<=o.clientX&&n.x+n.w>=o.clientX&&n.y<=o.clientY&&n.y+n.h>=o.clientY},c.fixTouchEvent=function(n,t){if(n=t?e.mixin({},n):n,n.touches&&1===n.touches.length){var o=n.touches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}else if(n.changedTouches&&1===n.changedTouches.length){var o=n.changedTouches[0];n.clientX=o.clientX,n.clientY=o.clientY,n.pageX=o.pageX,n.pageY=o.pageY}return n},c.isBeingDragged=r,c.addOverOutHandler=function(e){function t(){clearTimeout(i),o&&o.remove()}var o,i,u=n(e.node,"mouseover",function(u){function r(){c.isMouseOver(e.node)&&(e.onMouseOver(u),o=n(document.body,"mousemove",function(n){c.isMouseOver(e.node)||(t(),e.onMouseOut(n))}))}t(),e.delayTimeout?i=setTimeout(r,e.delayTimeout):r()});return{remove:function(){u.remove(),t()}}},c.addOutHandler=function(e,t){return n(document.body,"mousemove",function(n){c.isMouseOver(e,{checkAllChildren:!0})||t(n)})},c});