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

define(["dojo/on","./DeviceUtil"],function(e,n){var o={};return o.MOBILE_TOLERANCE=10,o.LONG_PRESS_TIMEOUT=500,o.addNoDragClickHandler=function(e,t,c){return c=c||{},n.isMobileDevice()?o._addMobile(e,t,c):o._addPC(e,t,c)},o._addPC=function(n,o,t){var c,r,i=t.tolerance||0,a=e(n,"mousedown",function(n){r&&r.remove();var t,a=n.clientX,u=n.clientY;c=e(document.body,"mousemove",function(e){var n=e.clientX,o=e.clientY;(Math.abs(n-a)>0||Math.abs(o-u)>0)&&(t=!0)}),r=e.once(document.body,"mouseup",function(e){c.remove();var n=e.clientX,r=e.clientY;!t&&Math.abs(n-a)<=i&&Math.abs(r-u)<=i&&o(e)})});return{remove:function(){c&&c.remove(),r&&r.remove(),a&&a.remove()}}},o._addMobile=function(n,t,c){function r(){a&&a.remove(),u&&u.remove(),l&&l.remove(),clearTimeout(v)}var i,a,u,l,v,d=c.tolerance||o.MOBILE_TOLERANCE;return i=e(n,"touchstart",function(i){function m(e){return Math.abs(i.clientX-e.clientX)<d&&Math.abs(i.clientY-e.clientY)<d}r();var s;if(c.detectLongPress){var f;u=e(n,"touchmove",function(e){f=e}),v=setTimeout(function(){m(f||i)&&(c.ignoreReleaseIfLongPressHappened&&(s=!0),c.longPressCallback(i))},c.longPressTimeout||o.LONG_PRESS_TIMEOUT)}a=e.once(n,"touchend",function(e){!s&&m(e)&&t(e),r()}),l=e.once(n,"touchcancel",r)}),{remove:function(){i&&i.remove(),r()}}},o});