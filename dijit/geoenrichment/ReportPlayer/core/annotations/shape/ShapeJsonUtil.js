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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(e){var o={},i=["x","y","left","top","width","height"],a=/px$/i;function n(e){i.forEach((function(o){var i=e[o];void 0!==i&&("string"==typeof i&&a.test(i)&&(e[o]=i.replace(a,"")),e[o]=Number(e[o])||0)}))}return o.createShapeJsonFromShapeObj=function(o,i){if(o&&o.viewBox){var a={id:"shape",g:o.g,viewBox:e.mixin({},o.viewBox),preserveAspectRatio:o.preserveAspectRatio,isPlaceholder:o.isPlaceholder,style:e.mixin({top:o.x||0,left:o.y||0,width:o.viewBox.width||100,height:o.viewBox.height||100*o.viewBox.height/o.viewBox.width,zoom:void 0},o.style,i),showAsBar:o.showAsBar,bar_singleIcon:o.bar_singleIcon,bar_wholeIcons:o.bar_wholeIcons,bar_flowDirection:o.bar_flowDirection,bar_spaceBetween:o.bar_spaceBetween,scaleByValue:o.scaleByValue,scale_minScale:o.scale_minScale,scale_anchorPosition:o.scale_anchorPosition,useRange:o.useRange,rangeMin:o.rangeMin,rangeMax:o.rangeMax,showBackground:o.showBackground,backgroundStyle:e.mixin({},o.backgroundStyle)};return n(a.viewBox),n(a.style),a}},o.isEmptyShapeJson=function(e){return!e||!e.g||!e.g.length},o}));