// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang"],function(e){function i(e){r.forEach(function(i){var o=e[i];void 0!==o&&("string"==typeof o&&a.test(o)&&(e[i]=o.replace(a,"")),e[i]=Number(e[i])||0)})}var o={},t=100,r=["x","y","left","top","width","height"],a=/px$/i;return o.createShapeJsonFromShapeObj=function(o,r){if(o&&o.viewBox){var a={id:"shape",g:o.g,viewBox:e.mixin({},o.viewBox),preserveAspectRatio:o.preserveAspectRatio,isPlaceholder:o.isPlaceholder,style:e.mixin({top:o.x||0,left:o.y||0,width:o.viewBox.width||t,height:o.viewBox.height||t*o.viewBox.height/o.viewBox.width,zoom:void 0},o.style,r),showAsBar:o.showAsBar,showBarBackground:o.showBarBackground,barBackgroundStyle:{}};return i(a.viewBox),i(a.style),a}},o});