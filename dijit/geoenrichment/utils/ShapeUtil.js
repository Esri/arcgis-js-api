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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/dom-style","dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,e,r){var o="http://www.w3.org/2000/svg",i={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1},a={createSVGNode:function(e,r){var i=document.createElementNS(o,"svg");return r&&t.set(i,r),e=[e.xmin||0,e.ymin||0,e.width,e.height].join(" "),i.setAttribute("viewBox",e),i.setAttribute("xmlns",o),i},createPathNode:function(t,e){var r=document.createElementNS(o,"path");return r.setAttribute("d",t),a._setSettingsToNode(r,e),r},createEllipseNode:function(t,e,r,i,n){var s=document.createElementNS(o,"ellipse");return s.setAttribute("cx",t||0),s.setAttribute("cy",e||0),s.setAttribute("rx",r),s.setAttribute("ry",i),a._setSettingsToNode(s,n),s},createCircleNode:function(t,e,r,i){var n=document.createElementNS(o,"circle");return n.setAttribute("cx",t||0),n.setAttribute("cy",e||0),n.setAttribute("r",r),a._setSettingsToNode(n,i),n},createRectNode:function(t,e,r,i,n){var s=document.createElementNS(o,"rect");return s.setAttribute("x",t||0),s.setAttribute("y",e||0),s.setAttribute("width",r),s.setAttribute("height",i),a._setSettingsToNode(s,n),s},createLineNode:function(t,e,r,i,n){var s=document.createElementNS(o,"line");return s.setAttribute("x1",t||0),s.setAttribute("y1",e||0),s.setAttribute("x2",r||0),s.setAttribute("y2",i||0),a._setSettingsToNode(s,n),s},createPolygonNode:function(t,e){var r=document.createElementNS(o,"polygon");return r.setAttribute("points",t),a._setSettingsToNode(r,e),r},createNodeByAttributes:function(t,e,r){var o=null;switch(t.name){case"path":o=a.createPathNode(t.d,e);break;case"ellipse":o=a.createEllipseNode(t.cx,t.cy,t.rx,t.ry,e);break;case"circle":o=a.createCircleNode(t.cx,t.cy,t.r,e);break;case"rect":o=a.createRectNode(t.x,t.y,t.width,t.height,e);break;case"line":o=a.createLineNode(t.x1,t.y1,t.x2,t.y2,e);break;case"polygon":o=a.createPolygonNode(t.points,e)}if(o){var i=t["fill-opacity"];void 0===i||r&&r.overrideFillOpacity||(o.hasAttribute("fill-opacity")&&(i*=o.getAttribute("fill-opacity")),o.setAttribute("fill-opacity",i))}return o},_setSettingsToNode:function(t,e){if(e.borderWidth){var o=a.toColor(e,"border","#000000");t.setAttribute("stroke",r.toCSSColor(o,!0)),t.setAttribute("stroke-width",e.borderWidth),t.setAttribute("stroke-opacity",o.a),e.borderDashArray&&t.setAttribute("stroke-dasharray",Array.isArray(e.borderDashArray)?e.borderDashArray.join(","):e.borderDashArray),e.strokeMiterLimit&&t.setAttribute("stroke-miterlimit",e.strokeMiterLimit),e.borderScale||t.setAttribute("vector-effect","non-scaling-stroke")}if(e.fillColor){var o=a.toColor(e,"fill","#FFFFFF");t.setAttribute("fill",r.toCSSColor(o,!0)),t.setAttribute("fill-opacity",o.a)}},toColor:function(t,e,o,i){var a=r.toColor(t[e+"Color"],o);if(1===a.a){var n=t[e+"Alpha"];isNaN(n)&&(n=i),isNaN(n)||(a.a=n)}return a},createSVGfromJson:function(t,r,o,n){n=e.mixin({},i,n),void 0===n.borderColor&&(n.borderColor=n.fillColor);var s=a.createSVGNode(t.viewBox,{width:r+"px",height:o+"px",overflow:"visible"});return t.g.forEach(function(t){s.appendChild(a.createNodeByAttributes(t,n))}),s}};return a});