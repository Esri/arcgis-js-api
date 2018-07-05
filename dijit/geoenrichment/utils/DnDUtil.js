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

define(["dojo/on"],function(e){var n={};return n.addNoDragClickHandler=function(n,o,t){var r,a,c=t&&t.tolerance||0,i=e(n,"mousedown",function(n){a&&a.remove();var t,i=n.clientX,u=n.clientY;r=e(document.body,"mousemove",function(e){var n=e.clientX,o=e.clientY;(Math.abs(n-i)>0||Math.abs(o-u)>0)&&(t=!0)}),a=e.once(document.body,"mouseup",function(e){r.remove();var n=e.clientX,a=e.clientY;!t&&Math.abs(n-i)<=c&&Math.abs(a-u)<=c&&o&&o(e)})});return{remove:function(){r&&r.remove(),a&&a.remove(),i&&i.remove()}}},n});