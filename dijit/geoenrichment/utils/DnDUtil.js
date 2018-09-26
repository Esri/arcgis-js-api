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

define(["dojo/on","./DeviceUtil"],function(e,n){var o={};return o.addNoDragClickHandler=function(e,t,c){return n.isMobileDevice()?o._addMobile(e,t,c):o._addPC(e,t,c)},o._addPC=function(n,o,t){var c,i,r=t&&t.tolerance||0,a=e(n,"mousedown",function(n){i&&i.remove();var t,a=n.clientX,u=n.clientY;c=e(document.body,"mousemove",function(e){var n=e.clientX,o=e.clientY;(Math.abs(n-a)>0||Math.abs(o-u)>0)&&(t=!0)}),i=e.once(document.body,"mouseup",function(e){c.remove();var n=e.clientX,i=e.clientY;!t&&Math.abs(n-a)<=r&&Math.abs(i-u)<=r&&o(e)})});return{remove:function(){c&&c.remove(),i&&i.remove(),a&&a.remove()}}},o._addMobile=function(n,o,t){var c,i,r=t&&t.tolerance||30;return c=e(n,"touchstart",function(t){i&&i.remove(),i=e.once(n,"touchend",function(e){Math.abs(t.clientX-e.clientX)<r&&Math.abs(t.clientY-e.clientY)<r&&o(e)})}),{remove:function(){c&&c.remove(),i&&i.remove()}}},o});