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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(e){function i(e){r.forEach(function(i){var t=e[i];"string"==typeof t&&a.test(t)&&(e[i]=Number(t.replace(a,"")))})}var t={},o=100,r=["x","y","left","top","width","height"],a=/px$/i;return t.createShapeJsonFromShapeObj=function(t,r){var a={id:"shape",g:t.g,viewBox:e.mixin({},t.viewBox),preserveAspectRatio:t.preserveAspectRatio,isPlaceholder:t.isPlaceholder,style:e.mixin({top:t.x||0,left:t.y||0,width:t.viewBox.width||o,height:t.viewBox.height||o*t.viewBox.height/t.viewBox.width},t.style,r),showAsBar:t.showAsBar,showBarBackground:t.showBarBackground,barBackgroundStyle:{}};return i(a.viewBox),i(a.style),a},t});