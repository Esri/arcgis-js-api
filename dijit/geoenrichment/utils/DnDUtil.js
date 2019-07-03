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

define(["dojo/on","dojo/sniff","./DeviceUtil","./KeyboardUtil"],function(e,n,o,t){var c={};c.MOBILE_TOLERANCE=10,c.LONG_PRESS_TIMEOUT=500,c.addNoDragClickHandler=function(e,n,t){return t=t||{},o.isMobileDevice()?c._addMobile(e,n,t):c._addPC(e,n,t)},c._addPC=function(n,o,c){var r,i,a=c.tolerance||0,d=e(n,"mousedown",function(n){i&&i.remove();var c,d=n.clientX,u=n.clientY;r=e(document.body,"mousemove",function(e){if(!e.shiftKey&&!t.isCtrl(e)){var n=e.clientX,o=e.clientY;(Math.abs(n-d)>0||Math.abs(o-u)>0)&&(c=!0)}}),i=e.once(document.body,"mouseup",function(e){r.remove();var n=e.clientX,t=e.clientY;!c&&Math.abs(n-d)<=a&&Math.abs(t-u)<=a&&o(e)})});return{remove:function(){r&&r.remove(),i&&i.remove(),d&&d.remove()}}},c._addMobile=function(n,o,t){function r(){a&&a.remove(),d&&d.remove(),u&&u.remove(),clearTimeout(l)}var i,a,d,u,l,m=t.tolerance||c.MOBILE_TOLERANCE;return i=e(n,"touchstart",function(i){function s(e){return Math.abs(i.clientX-e.clientX)<m&&Math.abs(i.clientY-e.clientY)<m}r();var v;if(t.detectLongPress){var f;d=e(n,"touchmove",function(e){f=e}),l=setTimeout(function(){s(f||i)&&(t.ignoreReleaseIfLongPressHappened&&(v=!0),t.longPressCallback(i))},t.longPressTimeout||c.LONG_PRESS_TIMEOUT)}a=e.once(n,"touchend",function(e){!v&&s(e)&&o(e),r()}),u=e.once(n,"touchcancel",r)}),{remove:function(){i&&i.remove(),r()}}};return c.addGlobalDragHanlder=function(c){function r(){i&&i.remove(),a&&a.remove(),d&&d.remove(),u&&u.remove(),l&&c.destroyDnDBox&&c.destroyDnDBox(l)}c.tolerance=c.tolerance>0?c.tolerance:5;var i,a,d,u,l;return e(c.node,c.downEventName||o.press,function(m){if(r(),!c.onMouseDown||c.onMouseDown(m)){var s=m.clientX,v=m.clientY,f=s,b=v;i=e(document.body,o.move,function(m){m.shiftKey||t.isCtrl(m)||(Math.abs(s-m.clientX)>=c.tolerance||Math.abs(v-m.clientY)>=c.tolerance)&&(i.remove(),c.dragStarted&&!c.dragStarted(m,m.clientX-f,m.clientY-b)||(f=m.clientX,b=m.clientY,l=c.createDnDBox&&c.createDnDBox(),a=e(document.body,o.move,function(e){c.dragMoved&&c.dragMoved(e,e.clientX-f,e.clientY-b),f=e.clientX,b=e.clientY}),d=e.once(document.body,n("ie")||n("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){r(),c.dragEnded&&c.dragEnded()}),u=e(document.body,"keyup",function(e){27==e.keyCode&&(r(),c.dragCanceled&&c.dragCanceled())})))}),e.once(document.body,n("ie")||n("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){i.remove()})}})},c});