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

define(["dojo/dom-style"],function(t){var e={};return e.alignAnnotationContainer=function(e,o){var n=o&&o.horizontalAlign||"left",a=o&&o.verticalAlign||"top",i={left:"auto",right:"auto",top:"auto",bottom:"auto"};switch(t.set(e.content,i),n){case"left":i.left="0px";break;case"center":var r=e.getWidth(),c=t.get(e.content,"width");i.left=(r-c)/2+"px";break;case"right":i.right="0px"}switch(a){case"top":i.top="0px";break;case"middle":var g=e.getHeight(),l=t.get(e.content,"height");i.top=(g-l)/2+"px";break;case"bottom":i.bottom="0px"}t.set(e.content,i)},e});