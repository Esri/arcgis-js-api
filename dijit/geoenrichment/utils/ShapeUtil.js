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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/dom-style","dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,e,r){var o="http://www.w3.org/2000/svg",i={createSVGNode:function(e,r){var i=document.createElementNS(o,"svg");return r&&t.set(i,r),e=[e.xmin||0,e.ymin||0,e.width,e.height].join(" "),i.setAttribute("viewBox",e),i.setAttribute("xmlns",o),i},createPathNode:function(t,e){var r=document.createElementNS(o,"path");return r.setAttribute("d",t),i._setSettingsToNode(r,e),r},createEllipseNode:function(t,e,r,a,n){var s=document.createElementNS(o,"ellipse");return s.setAttribute("cx",t||0),s.setAttribute("cy",e||0),s.setAttribute("rx",r),s.setAttribute("ry",a),i._setSettingsToNode(s,n),s},createCircleNode:function(t,e,r,a){var n=document.createElementNS(o,"circle");return n.setAttribute("cx",t||0),n.setAttribute("cy",e||0),n.setAttribute("r",r),i._setSettingsToNode(n,a),n},createRectNode:function(t,e,r,a,n){var s=document.createElementNS(o,"rect");return s.setAttribute("x",t||0),s.setAttribute("y",e||0),s.setAttribute("width",r),s.setAttribute("height",a),i._setSettingsToNode(s,n),s},createLineNode:function(t,e,r,a,n){var s=document.createElementNS(o,"line");return s.setAttribute("x1",t||0),s.setAttribute("y1",e||0),s.setAttribute("x2",r||0),s.setAttribute("y2",a||0),i._setSettingsToNode(s,n),s},createPolygonNode:function(t,e){var r=document.createElementNS(o,"polygon");return r.setAttribute("points",t),i._setSettingsToNode(r,e),r},createNodeByAttributes:function(t,e){var r=null;switch(t.name){case"path":r=i.createPathNode(t.d,e);break;case"ellipse":r=i.createEllipseNode(t.cx,t.cy,t.rx,t.ry,e);break;case"circle":r=i.createCircleNode(t.cx,t.cy,t.r,e);break;case"rect":r=i.createRectNode(t.x,t.y,t.width,t.height,e);break;case"line":r=i.createLineNode(t.x1,t.y1,t.x2,t.y2,e);break;case"polygon":r=i.createPolygonNode(t.points,e)}if(r){var o=t["fill-opacity"];void 0!==o&&(r.hasAttribute("fill-opacity")&&(o*=r.getAttribute("fill-opacity")),r.setAttribute("fill-opacity",o))}return r},_setSettingsToNode:function(t,e){if(e.borderWidth){var o=i.toColor(e,"border","#000000");t.setAttribute("stroke",r.toCSSColor(o,!0)),t.setAttribute("stroke-width",e.borderWidth),t.setAttribute("stroke-opacity",o.a),e.borderDashArray&&t.setAttribute("stroke-dasharray",Array.isArray(e.borderDashArray)?e.borderDashArray.join(","):e.borderDashArray),e.strokeMiterLimit&&t.setAttribute("stroke-miterlimit",e.strokeMiterLimit),e.borderScale||t.setAttribute("vector-effect","non-scaling-stroke")}if(e.fillColor){var o=i.toColor(e,"fill","#FFFFFF");t.setAttribute("fill",r.toCSSColor(o,!0)),t.setAttribute("fill-opacity",o.a)}},toColor:function(t,e,o,i){var a=r.toColor(t[e+"Color"],o);if(1===a.a){var n=t[e+"Alpha"];isNaN(n)&&(n=i),isNaN(n)||(a.a=n)}return a},createSVGfromJson:function(t,r,o,n){n=e.mixin({},a,n),void 0===n.borderColor&&(n.borderColor=n.fillColor);var s=i.createSVGNode(t.viewBox,{width:r+"px",height:o+"px",overflow:"visible"});return t.g.forEach(function(t){s.appendChild(i.createNodeByAttributes(t,n))}),s}},a={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1};return i});