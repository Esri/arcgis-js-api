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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/dom-geometry","./DomUtil","dojo/domReady!"],function(e,t,n,o){function i(){return l._latestEvent}function c(t,i){if(!(t&&t.parentNode&&t.getBoundingClientRect&&l._latestEvent))return!1;if(i&&i.checkAllChildren){i=e.mixin({},i),delete i.checkAllChildren;var c=!1;return o.traverseChildren(t,function(e){if(l.isMouseOver(e,i))return c=!0,!0}),c}var r,u=n.position(t);if(i&&i.ignoreBorderTolerance){var a=i.ignoreBorderTolerance;r=e.mixin({},u),r.x+=a,r.y+=a,r.w-=2*a,r.h-=2*a}else r=u;return r.x<=l._latestEvent.clientX&&r.x+r.w>=l._latestEvent.clientX&&r.y<=l._latestEvent.clientY&&r.y+r.h>=l._latestEvent.clientY}function r(){return u}var l={};l._latestEvent=null,l._setLatestEvent=function(e){l._latestEvent=e},t(document.body,"mousemove, touchmove",function(e){l._setLatestEvent(l.fixTouchEvent(e,!0))});var u;return t(document.body,"mousedown",function(){u||(u=!0,t.once(document.body,"mouseup, click",function(){u=!1}))}),l.getCursorPosition=i,l.isMouseOver=c,l.fixTouchEvent=function(t,n){if(t=n?e.mixin({},t):t,t.touches&&t.touches.length){var o=t.touches[0];t.clientX=o.clientX,t.clientY=o.clientY,t.pageX=o.pageX,t.pageY=o.pageY}else if(t.changedTouches&&t.changedTouches.length){var o=t.changedTouches[0];t.clientX=o.clientX,t.clientY=o.clientY,t.pageX=o.pageX,t.pageY=o.pageY}return t},l.isBeingDragged=r,l});