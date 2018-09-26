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

define(["dojo/on"],function(n){var t={};return t.setUpMapPan=function(t,e){e&&t.__container&&n(t.__container,"touchstart",function(c){var o=c.clientX,i=c.clientY,r=n(t.__container,"touchmove",function(n){var t=n.clientX,c=n.clientY;e(o-t,i-c),o=t,i=c});n.once(t.__container,"touchend, touchcancel",function(n){r.remove()})}),t._fixedPan=function(n,e){return t._extentUtil(null,{dx:.5*n,dy:.5*e})}},t});