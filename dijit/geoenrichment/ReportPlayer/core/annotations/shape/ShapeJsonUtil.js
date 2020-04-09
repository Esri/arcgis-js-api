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

define(["dojo/_base/lang"],(function(e){var i={},o=["x","y","left","top","width","height"],t=/px$/i;function r(e){o.forEach((function(i){var o=e[i];void 0!==o&&("string"==typeof o&&t.test(o)&&(e[i]=o.replace(t,"")),e[i]=Number(e[i])||0)}))}return i.createShapeJsonFromShapeObj=function(i,o){if(i&&i.viewBox){var t={id:"shape",g:i.g,viewBox:e.mixin({},i.viewBox),preserveAspectRatio:i.preserveAspectRatio,isPlaceholder:i.isPlaceholder,style:e.mixin({top:i.x||0,left:i.y||0,width:i.viewBox.width||100,height:i.viewBox.height||100*i.viewBox.height/i.viewBox.width,zoom:void 0},i.style,o),showAsBar:i.showAsBar,showBarBackground:i.showBarBackground,barBackgroundStyle:{}};return r(t.viewBox),r(t.style),t}},i.isEmptyShapeJson=function(e){return!e||!e.g||!e.g.length},i}));