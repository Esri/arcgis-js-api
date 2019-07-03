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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(t,e){function i(t){return"string"==typeof t?Number(t.replace("px","")):Number(t)}var r={},o=/path|ellipse|circle|polygon|rect|line/,a=["fill","fill-opacity","stroke","stroke-opacity"],s=["display"];r.svgJsonToShapeObject=function(r,n){function u(e,i){i=t.mixin({},i),e.attributes=e.attributes||{},a.forEach(function(t){var r=e.attributes[t];void 0===r&&(r=e.attributes[t]=i[t]),i[t]=r}),s.forEach(function(t){var r=i[t]||e.attributes[t];e.attributes[t]=r,i[t]=r}),e.tags&&e.tags.forEach(function(t){u(t,i)})}function c(t){if(!t)return!1;if(!n.ignoreHiddenElements)return!0;if("none"===t.display)return!1;var e=t.fill&&"none"!==t.fill&&(void 0===t["fill-opacity"]||0!==t["fill-opacity"]),i=t.stroke&&"none"!==t.stroke&&(void 0===t["stroke-opacity"]||0!==t["stroke-opacity"]);return void 0===e&&void 0===i||(e||i)}n=n||{},n.ignoreHiddenElements&&(r=t.clone(r),u(r));var l={name:n.name||"",g:[],style:{}};if(r.attributes.viewBox){var h=r.attributes.viewBox.split(" ");l.viewBox={xmin:i(h[0]),ymin:i(h[1]),width:i(h[2]),height:i(h[3])}}else{if(!r.attributes.width||!r.attributes.height)return l;l.viewBox={xmin:0,ymin:0,width:i(r.attributes.width),height:i(r.attributes.height)}}return r.attributes.width&&(l.style.width=i(r.attributes.width)),r.attributes.height&&(l.style.height=i(r.attributes.height)),r.attributes.zoom&&(l.style.zoom=i(r.attributes.zoom)),l.preserveAspectRatio=r.attributes.preserveAspectRatio,l.showAsBar=r.attributes.showAsBar,l.showBarBackground=r.attributes.showBarBackground,e.queryJson(r,o).forEach(function(t){var e=t.attributes;if(c(e)){var r;switch(t.name){case"path":r={d:e.d};break;case"ellipse":r={cx:i(e.cx),cy:i(e.cy),rx:i(e.rx),ry:i(e.ry)};break;case"circle":r={cx:i(e.cx),cy:i(e.cy),r:i(e.r)};break;case"polygon":r={points:e.points};break;case"rect":r={x:i(e.x),y:i(e.y),width:i(e.width),height:i(e.height)};break;case"line":r={x1:i(e.x1),y1:i(e.y1),x2:i(e.x2),y2:i(e.y2)}}r&&(r.name=t.name,e["fill-opacity"]&&(r["fill-opacity"]=i(e["fill-opacity"])),l.g.push(r))}}),l},r.shapeJsonToSvgJson=function(e){return{name:"svg",attributes:{width:e.style.width||void 0,height:e.style.height||void 0,viewBox:e.viewBox.xmin+" "+e.viewBox.ymin+" "+e.viewBox.width+" "+e.viewBox.height,preserveAspectRatio:e.preserveAspectRatio,showAsBar:e.showAsBar,showBarBackground:e.showBarBackground,zoom:e.style.zoom||void 0},tags:[{name:"g",tags:e.g.map(function(e){var i=t.mixin({},e);return delete i.name,{name:e.name,attributes:i}})}]}};var n={borderColor:"stroke",fillColor:"fill",borderAlpha:"stroke-opacity",fillAlpha:"fill-opacity",borderWidth:"stroke-width",borderDashArray:"stroke-dasharray",strokeMiterLimit:"stroke-miterlimit"},u={"stroke-opacity":1,"fill-opacity":1,"stroke-width":1},c={};for(var l in n)c[n[l]]=l;return r.applyStylesToSvgJson=function(t,i){e.queryJson(t,o).forEach(function(t){t.attributes=t.attributes||{};for(var e in i){var r=n[e];r&&(t.attributes[r]=i[e])}})},r.getStylesFromSvgJson=function(t){var i={},r=e.queryJson(t,o)[0];if(!r||!r.attributes)return i;for(var a in c){var s=r.attributes[a];void 0!==s&&(i[c[a]]=u[a]?Number(s):s)}return i},r});