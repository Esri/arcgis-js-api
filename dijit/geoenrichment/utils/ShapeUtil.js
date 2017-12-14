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

define(["dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,e){var r="http://www.w3.org/2000/svg",o={createSVGNode:function(e,o){var i=document.createElementNS(r,"svg");o&&t.set(i,o);var e=[e.xmin||0,e.ymin||0,e.width,e.height].join(" ");return i.setAttribute("viewBox",e),i.setAttribute("xmlns",r),i},createPathNode:function(t,e){var i=document.createElementNS(r,"path");return i.setAttribute("d",t),o._setSettingsToNode(i,e),i},createEllipseNode:function(t,e,i,n,s){var c=document.createElementNS(r,"ellipse");return c.setAttribute("cx",t||0),c.setAttribute("cy",e||0),c.setAttribute("rx",i),c.setAttribute("ry",n),o._setSettingsToNode(c,s),c},createCircleNode:function(t,e,i,n){var s=document.createElementNS(r,"circle");return s.setAttribute("cx",t||0),s.setAttribute("cy",e||0),s.setAttribute("r",i),o._setSettingsToNode(s,n),s},createRectNode:function(t,e,i,n,s){var c=document.createElementNS(r,"rect");return c.setAttribute("x",t||0),c.setAttribute("y",e||0),c.setAttribute("width",i),c.setAttribute("height",n),o._setSettingsToNode(c,s),c},createLineNode:function(t,e,i,n,s){var c=document.createElementNS(r,"line");return c.setAttribute("x1",t||0),c.setAttribute("y1",e||0),c.setAttribute("x2",i||0),c.setAttribute("y2",n||0),o._setSettingsToNode(c,s),c},createPolygonNode:function(t,e){var i=document.createElementNS(r,"polygon");return i.setAttribute("points",t),o._setSettingsToNode(i,e),i},createNodeByAttributes:function(t,e){switch(t.name){case"path":return o.createPathNode(t.d,e);case"ellipse":return o.createEllipseNode(t.cx,t.cy,t.rx,t.ry,e);case"circle":return o.createCircleNode(t.cx,t.cy,t.r,e);case"rect":return o.createRectNode(t.x,t.y,t.width,t.height,e);case"line":return o.createLineNode(t.x1,t.y1,t.x2,t.y2,e);case"polygon":return o.createPolygonNode(t.points,e)}return null},_setSettingsToNode:function(t,r){if(r.borderWidth){var i=o.toColor(r,"border","#000000");t.setAttribute("stroke",e.toCSSColor(i,!0)),t.setAttribute("stroke-width",r.borderWidth),t.setAttribute("stroke-opacity",i.a),r.borderDashArray&&t.setAttribute("stroke-dasharray",Array.isArray(r.borderDashArray)?r.borderDashArray.join(","):r.borderDashArray),r.strokeMiterLimit&&t.setAttribute("stroke-miterlimit",r.strokeMiterLimit),r.borderScale||t.setAttribute("vector-effect","non-scaling-stroke")}if(r.fillColor){var i=o.toColor(r,"fill","#FFFFFF");t.setAttribute("fill",e.toCSSColor(i,!0)),t.setAttribute("fill-opacity",i.a)}},toColor:function(t,r,o,i){var n=e.toColor(t[r+"Color"],o);if(1===n.a){var s=t[r+"Alpha"];isNaN(s)&&(s=i),isNaN(s)||(n.a=s)}return n}};return o});