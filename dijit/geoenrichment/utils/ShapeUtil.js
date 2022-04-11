// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/dom-style","dojo/_base/lang","dojo/dom-geometry","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(t,e,r,i,o,a){var n="http://www.w3.org/2000/svg",l={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1};function c(t,e){if(e&&e.borderWidth){var r=s.toColor(e,"border","#000000");t.setAttribute("stroke",o.toCSSColor(r,!0)),t.setAttribute("stroke-width",e.borderWidth),t.setAttribute("stroke-opacity",r.a),e.borderDashArray&&t.setAttribute("stroke-dasharray",Array.isArray(e.borderDashArray)?e.borderDashArray.join(","):e.borderDashArray),e.strokeMiterLimit&&t.setAttribute("stroke-miterlimit",e.strokeMiterLimit),e.borderScale||t.setAttribute("vector-effect","non-scaling-stroke")}if(e&&e.fillColor){r=s.toColor(e,"fill","#FFFFFF");t.setAttribute("fill",o.toCSSColor(r,!0)),t.setAttribute("fill-opacity",r.a)}}var s={createSVGNode:function(e,r){var i=document.createElementNS(n,"svg");return r&&t.set(i,r),e=[e.xmin||0,e.ymin||0,e.width,e.height].join(" "),i.setAttribute("viewBox",e),i.setAttribute("xmlns",n),i},createPathNode:function(t,e){var r=document.createElementNS(n,"path");return r.setAttribute("d",t),c(r,e),r},createEllipseNode:function(t,e,r,i,o){var a=document.createElementNS(n,"ellipse");return a.setAttribute("cx",t||0),a.setAttribute("cy",e||0),a.setAttribute("rx",r),a.setAttribute("ry",i),c(a,o),a},createCircleNode:function(t,e,r,i){var o=document.createElementNS(n,"circle");return o.setAttribute("cx",t||0),o.setAttribute("cy",e||0),o.setAttribute("r",r),c(o,i),o},createRectNode:function(t,e,r,i,o){var a=document.createElementNS(n,"rect");return a.setAttribute("x",t||0),a.setAttribute("y",e||0),a.setAttribute("width",r),a.setAttribute("height",i),c(a,o),a},createLineNode:function(t,e,r,i,o){var a=document.createElementNS(n,"line");return a.setAttribute("x1",t||0),a.setAttribute("y1",e||0),a.setAttribute("x2",r||0),a.setAttribute("y2",i||0),c(a,o),a},createPolygonNode:function(t,e){var r=document.createElementNS(n,"polygon");return r.setAttribute("points",t),c(r,e),r},createNodeByAttributes:function(t,e,r){var i=null;switch(t.name){case"path":i=s.createPathNode(t.d,e);break;case"ellipse":i=s.createEllipseNode(t.cx,t.cy,t.rx,t.ry,e);break;case"circle":i=s.createCircleNode(t.cx,t.cy,t.r,e);break;case"rect":i=s.createRectNode(t.x,t.y,t.width,t.height,e);break;case"line":i=s.createLineNode(t.x1,t.y1,t.x2,t.y2,e);break;case"polygon":i=s.createPolygonNode(t.points,e)}if(i){var o=t["fill-opacity"];void 0===o||r&&r.ignoreFillOpacity||(i.hasAttribute("fill-opacity")&&(o*=i.getAttribute("fill-opacity")),i.setAttribute("fill-opacity",o))}return i},toColor:function(t,e,r,i){var a=o.toColor(t[e+"Color"],r);if(1===a.a){var n=t[e+"Alpha"];isNaN(n)&&(n=i),isNaN(n)||(a.a=n)}return a},createSVGFromJson:function(t,r,i,o,a){a=a||{},void 0===(o=e.mixin({},!a.noDefaults&&l,o)).borderColor&&(o.borderColor=o.fillColor);var n=s.createSVGNode(t.viewBox,{width:r+"px",height:i+"px",overflow:"visible"});return a.preserveAspectRatio&&n.setAttribute("preserveAspectRatio",a.preserveAspectRatio),null!=a.borderScale&&(o.borderScale=a.borderScale),t.g.forEach((function(t){var e=s.createNodeByAttributes(t,o,{ignoreFillOpacity:a.ignoreFillOpacity});e&&n.appendChild(e)})),n},calcContentBox:function(t,o,n,l,c){var u=i.get("ShapeUtil"),d=JSON.stringify(t.viewBox)+";"+JSON.stringify(t.g)+";"+o+";"+n+";"+JSON.stringify(c||{});if(u[d])return e.mixin({},u[d]);var b=s.createSVGFromJson(t,o,n,l,c);b.style.position="absolute",b.style.left="0",b.style.top="0",document.body.appendChild(b);var y=a.getNodesBox(b.children),A=r.position(b);return document.body.removeChild(b),y.x-=A.x,y.y-=A.y,y.r=o-(y.x+y.w),y.b=n-(y.y+y.h),u[d]=e.mixin({},y),y}};return s}));