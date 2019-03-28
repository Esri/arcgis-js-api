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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(t){var i={},n={left:1,right:1,top:1,bottom:1,width:1,height:1,fontSize:1};return i.getStyleObjWithUnits=function(i,e){e=e||"px";var r=t.mixin({},i);for(var o in r)if(n[o]){var f=r[o];!f||"string"==typeof f&&-1!==f.indexOf(e)||(r[o]=f+e)}return r},i});