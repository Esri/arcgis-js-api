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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../annotations/shape/ShapeBarFlowDirections","../annotations/shape/ShapeScaleAnchorPositions"],(function(e,r,o,a){var i={},t=/path|ellipse|circle|polygon|rect|line/,n=["fill","fill-opacity","stroke","stroke-opacity"],s=["display"];function l(e){return Number("string"==typeof e?e.replace("px",""):e)}function c(e){return e?l(e):void 0}function u(e){return"number"==typeof e?e:void 0}i.svgJsonToShapeObject=function(i,u){if((u=u||{}).ignoreHiddenElements){i=e.clone(i);var d=function(r,o){o=e.mixin({},o),r.attributes=r.attributes||{},n.forEach((function(e){var a=r.attributes[e];void 0===a&&(a=r.attributes[e]=o[e]),o[e]=a})),s.forEach((function(e){var a=o[e]||r.attributes[e];r.attributes[e]=a,o[e]=a})),r.tags&&r.tags.forEach((function(e){d(e,o)}))};d(i)}var g={name:u.name||"",g:[],style:{},backgroundStyle:{}},h=i.attributes;if(h.viewBox){var b=h.viewBox.split(" ");g.viewBox={xmin:l(b[0])||0,ymin:l(b[1])||0,width:l(b[2]),height:l(b[3])}}else{if(!h.width||!h.height)return g;g.viewBox={xmin:0,ymin:0,width:l(h.width),height:l(h.height)}}return h.width&&(g.style.width=l(h.width)),h.height&&(g.style.height=l(h.height)),h.zoom&&(g.style.zoom=l(h.zoom)),g.preserveAspectRatio=h.preserveAspectRatio,g.showAsBar=h.showAsBar,g.showAsBar&&(g.useRange=h.useRange,g.rangeMin=c(h.rangeMin),g.rangeMax=c(h.rangeMax),g.bar_singleIcon=h.barSingleIcon,g.bar_wholeIcons=h.barWholeIcons,g.bar_flowDirection=h.barFlowDirection&&o.toSupportedValue(h.barFlowDirection),g.bar_spaceBetween=c(h.barSpaceBetween)),g.scaleByValue=h.scaleByValue,g.scaleByValue&&(g.useRange=h.useRange,g.rangeMin=c(h.rangeMin),g.rangeMax=c(h.rangeMax),g.scale_minScale=c(h.minScale),g.scale_anchorPosition=h.scaleAnchorPosition&&a.toSupportedValue(h.scaleAnchorPosition)),h.showBackground&&(g.showBackground=!0,g.backgroundStyle.fillColor=h.backgroundFill,g.backgroundStyle.fillAlpha=c(h.backgroundFillOpacity),g.backgroundStyle.borderColor=h.backgroundStroke,g.backgroundStyle.borderWidth=c(h.backgroundStrokeWidth),g.backgroundStyle.borderAlpha=c(h.backgroundStrokeOpacity),g.backgroundStyle.borderDashArray=h.backgroundStrokeDashArray),r.queryJson(i,t).forEach((function(e){var r=e.attributes;if(function(e){if(!e)return!1;if(!u.ignoreHiddenElements)return!0;if("none"===e.display)return!1;var r=e.fill&&"none"!==e.fill&&(void 0===e["fill-opacity"]||0!==e["fill-opacity"]),o=e.stroke&&"none"!==e.stroke&&(void 0===e["stroke-opacity"]||0!==e["stroke-opacity"]);return void 0===r&&void 0===o||(r||o)}(r)){var o;switch(e.name){case"path":o={d:r.d};break;case"ellipse":o={cx:l(r.cx),cy:l(r.cy),rx:l(r.rx),ry:l(r.ry)};break;case"circle":o={cx:l(r.cx),cy:l(r.cy),r:l(r.r)};break;case"polygon":o={points:r.points};break;case"rect":o={x:l(r.x),y:l(r.y),width:l(r.width),height:l(r.height)};break;case"line":o={x1:l(r.x1),y1:l(r.y1),x2:l(r.x2),y2:l(r.y2)}}o&&(o.name=e.name,r["fill-opacity"]&&(o["fill-opacity"]=l(r["fill-opacity"])),g.g.push(o))}})),g},i.shapeJsonToSvgJson=function(r){var o,a,i;return r.showAsBar&&(o={showAsBar:!0,useRange:r.useRange||void 0,rangeMin:u(r.rangeMin),rangeMax:u(r.rangeMax),barSingleIcon:r.bar_singleIcon||void 0,barWholeIcons:r.bar_wholeIcons||void 0,barFlowDirection:r.bar_flowDirection||void 0,barSpaceBetween:u(r.bar_spaceBetween)}),r.scaleByValue&&(a={scaleByValue:!0,useRange:r.useRange||void 0,rangeMin:u(r.rangeMin),rangeMax:u(r.rangeMax),minScale:u(r.scale_minScale),scaleAnchorPosition:r.scale_anchorPosition||void 0}),r.showBackground&&(i={showBackground:!0,backgroundFill:r.backgroundStyle.fillColor||void 0,backgroundFillOpacity:u(r.backgroundStyle.fillAlpha),backgroundStroke:r.backgroundStyle.borderColor||void 0,backgroundStrokeWidth:u(r.backgroundStyle.borderWidth),backgroundStrokeOpacity:u(r.backgroundStyle.borderAlpha),backgroundStrokeDashArray:r.backgroundStyle.borderDashArray||void 0}),{name:"svg",attributes:e.mixin({width:r.style.width||void 0,height:r.style.height||void 0,viewBox:r.viewBox.xmin+" "+r.viewBox.ymin+" "+r.viewBox.width+" "+r.viewBox.height,preserveAspectRatio:r.preserveAspectRatio,zoom:r.style.zoom||void 0},o,a,i),tags:[{name:"g",tags:r.g.map((function(r){var o=e.mixin({},r);return delete o.name,{name:r.name,attributes:o}}))}]}};var d={borderColor:"stroke",fillColor:"fill",borderAlpha:"stroke-opacity",fillAlpha:"fill-opacity",borderWidth:"stroke-width",borderDashArray:"stroke-dasharray",strokeMiterLimit:"stroke-miterlimit"},g={"stroke-opacity":1,"fill-opacity":1,"stroke-width":1},h={};for(var b in d)h[d[b]]=b;return i.applyStylesToSvgJson=function(e,o){r.queryJson(e,t).forEach((function(e){for(var r in e.attributes=e.attributes||{},o){var a=d[r];a&&(e.attributes[a]=o[r])}}))},i.getStylesFromSvgJson=function(e){var o={},a=r.queryJson(e,t)[0];if(!a||!a.attributes)return o;for(var i in h){var n=a.attributes[i];void 0!==n&&(o[h[i]]=g[i]?Number(n):n)}return o},i}));