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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/on","dojo/sniff","./DeviceUtil","./KeyboardUtil"],(function(e,n,o,t){var c={MOBILE_TOLERANCE:10,LONG_PRESS_TIMEOUT:500,addNoDragClickHandler:function(e,n,t){return t=t||{},o.isMobileDevice()?c._addMobile(e,n,t):c._addPC(e,n,t)},_addPC:function(n,o,c){var r,i,a=c.tolerance||0,d=e(n,"mousedown",(function(n){i&&i.remove();var c,d=n.clientX,u=n.clientY;r=e(document.body,"mousemove",(function(e){if(!e.shiftKey&&!t.isCtrl(e)){var n=e.clientX,o=e.clientY;(Math.abs(n-d)>0||Math.abs(o-u)>0)&&(c=!0)}})),i=e.once(document.body,"mouseup",(function(e){r.remove();var n=e.clientX,t=e.clientY;!c&&Math.abs(n-d)<=a&&Math.abs(t-u)<=a&&o(e)}))}));return{remove:function(){r&&r.remove(),i&&i.remove(),d&&d.remove()}}},_addMobile:function(n,o,t){var r,i,a,d,u,l=t.tolerance||c.MOBILE_TOLERANCE;function m(){i&&i.remove(),a&&a.remove(),d&&d.remove(),clearTimeout(u)}return r=e(n,"touchstart",(function(r){var s,v;function f(e){return Math.abs(r.clientX-e.clientX)<l&&Math.abs(r.clientY-e.clientY)<l}(m(),t.detectLongPress)&&(a=e(n,"touchmove",(function(e){v=e})),u=setTimeout((function(){f(v||r)&&(t.ignoreReleaseIfLongPressHappened&&(s=!0),t.longPressCallback(r))}),t.longPressTimeout||c.LONG_PRESS_TIMEOUT));i=e.once(n,"touchend",(function(e){!s&&f(e)&&o(e),m()})),d=e.once(n,"touchcancel",m)})),{remove:function(){r&&r.remove(),m()}}}};return c.addGlobalDragHanlder=function(c){var r,i,a,d,u;function l(){r&&r.remove(),i&&i.remove(),a&&a.remove(),d&&d.remove(),u&&c.destroyDnDBox&&c.destroyDnDBox(u)}return c.tolerance=c.tolerance>0?c.tolerance:5,e(c.node,c.downEventName||o.press,(function(m){if(l(),!c.onMouseDown||c.onMouseDown(m)){var s=m.clientX,v=m.clientY,f=s,b=v;r=e(document.body,o.move,(function(m){m.shiftKey||t.isCtrl(m)||(Math.abs(s-m.clientX)>=c.tolerance||Math.abs(v-m.clientY)>=c.tolerance)&&(r.remove(),c.dragStarted&&!c.dragStarted(m,m.clientX-f,m.clientY-b)||(f=m.clientX,b=m.clientY,u=c.createDnDBox&&c.createDnDBox(),i=e(document.body,o.move,(function(e){c.dragMoved&&c.dragMoved(e,e.clientX-f,e.clientY-b),f=e.clientX,b=e.clientY})),a=e.once(document.body,n("ie")||n("trident")?"mouseup, touchend, click":"mouseup, touchend",(function(){l(),c.dragEnded&&c.dragEnded()})),d=e(document.body,"keyup",(function(e){27==e.keyCode&&(l(),c.dragCanceled&&c.dragCanceled())}))))})),e.once(document.body,n("ie")||n("trident")?"mouseup, touchend, click":"mouseup, touchend",(function(){r.remove()}))}}))},c}));