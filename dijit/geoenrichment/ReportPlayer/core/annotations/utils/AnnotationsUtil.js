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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/dom-style"],(function(t){var e={alignAnnotationContainer:function(e,o,n){var a=o&&o.horizontalAlign||"left",i=o&&o.verticalAlign||"top",r={left:"auto",right:"auto",top:"auto",bottom:"auto"};switch(t.set(e.content,r),a){case"left":r.left="0px";break;case"center":var c=e.getWidth(),g=n?n.w:t.get(e.content,"width");r.left=(c-g)/2+"px";break;case"right":r.right="0px"}switch(i){case"top":r.top="0px";break;case"middle":var h=e.getHeight(),l=n?n.h:t.get(e.content,"height");r.top=(h-l)/2+"px";break;case"bottom":r.bottom="0px"}t.set(e.content,r)}};return e}));