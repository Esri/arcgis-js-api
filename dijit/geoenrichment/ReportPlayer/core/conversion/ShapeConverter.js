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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(t,e){var i={},r=/path|ellipse|circle|polygon|rect|line/,o=["fill","fill-opacity","stroke","stroke-opacity"],a=["display"];function s(t){return Number("string"==typeof t?t.replace("px",""):t)}i.svgJsonToShapeObject=function(i,n){if((n=n||{}).ignoreHiddenElements){(function e(i,r){r=t.mixin({},r),i.attributes=i.attributes||{},o.forEach((function(t){var e=i.attributes[t];void 0===e&&(e=i.attributes[t]=r[t]),r[t]=e})),a.forEach((function(t){var e=r[t]||i.attributes[t];i.attributes[t]=e,r[t]=e})),i.tags&&i.tags.forEach((function(t){e(t,r)}))})(i=t.clone(i))}var u={name:n.name||"",g:[],style:{}};if(i.attributes.viewBox){var c=i.attributes.viewBox.split(" ");u.viewBox={xmin:s(c[0]),ymin:s(c[1]),width:s(c[2]),height:s(c[3])}}else{if(!i.attributes.width||!i.attributes.height)return u;u.viewBox={xmin:0,ymin:0,width:s(i.attributes.width),height:s(i.attributes.height)}}return i.attributes.width&&(u.style.width=s(i.attributes.width)),i.attributes.height&&(u.style.height=s(i.attributes.height)),i.attributes.zoom&&(u.style.zoom=s(i.attributes.zoom)),u.preserveAspectRatio=i.attributes.preserveAspectRatio,u.showAsBar=i.attributes.showAsBar,u.showBarBackground=i.attributes.showBarBackground,e.queryJson(i,r).forEach((function(t){var e=t.attributes;if(function(t){if(!t)return!1;if(!n.ignoreHiddenElements)return!0;if("none"===t.display)return!1;var e=t.fill&&"none"!==t.fill&&(void 0===t["fill-opacity"]||0!==t["fill-opacity"]),i=t.stroke&&"none"!==t.stroke&&(void 0===t["stroke-opacity"]||0!==t["stroke-opacity"]);return void 0===e&&void 0===i||(e||i)}(e)){var i;switch(t.name){case"path":i={d:e.d};break;case"ellipse":i={cx:s(e.cx),cy:s(e.cy),rx:s(e.rx),ry:s(e.ry)};break;case"circle":i={cx:s(e.cx),cy:s(e.cy),r:s(e.r)};break;case"polygon":i={points:e.points};break;case"rect":i={x:s(e.x),y:s(e.y),width:s(e.width),height:s(e.height)};break;case"line":i={x1:s(e.x1),y1:s(e.y1),x2:s(e.x2),y2:s(e.y2)}}i&&(i.name=t.name,e["fill-opacity"]&&(i["fill-opacity"]=s(e["fill-opacity"])),u.g.push(i))}})),u},i.shapeJsonToSvgJson=function(e){return{name:"svg",attributes:{width:e.style.width||void 0,height:e.style.height||void 0,viewBox:e.viewBox.xmin+" "+e.viewBox.ymin+" "+e.viewBox.width+" "+e.viewBox.height,preserveAspectRatio:e.preserveAspectRatio,showAsBar:e.showAsBar,showBarBackground:e.showBarBackground,zoom:e.style.zoom||void 0},tags:[{name:"g",tags:e.g.map((function(e){var i=t.mixin({},e);return delete i.name,{name:e.name,attributes:i}}))}]}};var n={borderColor:"stroke",fillColor:"fill",borderAlpha:"stroke-opacity",fillAlpha:"fill-opacity",borderWidth:"stroke-width",borderDashArray:"stroke-dasharray",strokeMiterLimit:"stroke-miterlimit"},u={"stroke-opacity":1,"fill-opacity":1,"stroke-width":1},c={};for(var l in n)c[n[l]]=l;return i.applyStylesToSvgJson=function(t,i){e.queryJson(t,r).forEach((function(t){for(var e in t.attributes=t.attributes||{},i){var r=n[e];r&&(t.attributes[r]=i[e])}}))},i.getStylesFromSvgJson=function(t){var i={},o=e.queryJson(t,r)[0];if(!o||!o.attributes)return i;for(var a in c){var s=o.attributes[a];void 0!==s&&(i[c[a]]=u[a]?Number(s):s)}return i},i}));