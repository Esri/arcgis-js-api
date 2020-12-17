// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/dom-style","dojo/_base/lang","dojo/dom-geometry","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(t,e,r,i,o,a){var n="http://www.w3.org/2000/svg",s={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1},c={createSVGNode:function(e,r){var i=document.createElementNS(n,"svg");return r&&t.set(i,r),e=[e.xmin||0,e.ymin||0,e.width,e.height].join(" "),i.setAttribute("viewBox",e),i.setAttribute("xmlns",n),i},createPathNode:function(t,e){var r=document.createElementNS(n,"path");return r.setAttribute("d",t),c._setSettingsToNode(r,e),r},createEllipseNode:function(t,e,r,i,o){var a=document.createElementNS(n,"ellipse");return a.setAttribute("cx",t||0),a.setAttribute("cy",e||0),a.setAttribute("rx",r),a.setAttribute("ry",i),c._setSettingsToNode(a,o),a},createCircleNode:function(t,e,r,i){var o=document.createElementNS(n,"circle");return o.setAttribute("cx",t||0),o.setAttribute("cy",e||0),o.setAttribute("r",r),c._setSettingsToNode(o,i),o},createRectNode:function(t,e,r,i,o){var a=document.createElementNS(n,"rect");return a.setAttribute("x",t||0),a.setAttribute("y",e||0),a.setAttribute("width",r),a.setAttribute("height",i),c._setSettingsToNode(a,o),a},createLineNode:function(t,e,r,i,o){var a=document.createElementNS(n,"line");return a.setAttribute("x1",t||0),a.setAttribute("y1",e||0),a.setAttribute("x2",r||0),a.setAttribute("y2",i||0),c._setSettingsToNode(a,o),a},createPolygonNode:function(t,e){var r=document.createElementNS(n,"polygon");return r.setAttribute("points",t),c._setSettingsToNode(r,e),r},createNodeByAttributes:function(t,e,r){var i=null;switch(t.name){case"path":i=c.createPathNode(t.d,e);break;case"ellipse":i=c.createEllipseNode(t.cx,t.cy,t.rx,t.ry,e);break;case"circle":i=c.createCircleNode(t.cx,t.cy,t.r,e);break;case"rect":i=c.createRectNode(t.x,t.y,t.width,t.height,e);break;case"line":i=c.createLineNode(t.x1,t.y1,t.x2,t.y2,e);break;case"polygon":i=c.createPolygonNode(t.points,e)}if(i){var o=t["fill-opacity"];void 0===o||r&&r.overrideFillOpacity||(i.hasAttribute("fill-opacity")&&(o*=i.getAttribute("fill-opacity")),i.setAttribute("fill-opacity",o))}return i},_setSettingsToNode:function(t,e){if(e.borderWidth){var r=c.toColor(e,"border","#000000");t.setAttribute("stroke",o.toCSSColor(r,!0)),t.setAttribute("stroke-width",e.borderWidth),t.setAttribute("stroke-opacity",r.a),e.borderDashArray&&t.setAttribute("stroke-dasharray",Array.isArray(e.borderDashArray)?e.borderDashArray.join(","):e.borderDashArray),e.strokeMiterLimit&&t.setAttribute("stroke-miterlimit",e.strokeMiterLimit),e.borderScale||t.setAttribute("vector-effect","non-scaling-stroke")}if(e.fillColor){r=c.toColor(e,"fill","#FFFFFF");t.setAttribute("fill",o.toCSSColor(r,!0)),t.setAttribute("fill-opacity",r.a)}},toColor:function(t,e,r,i){var a=o.toColor(t[e+"Color"],r);if(1===a.a){var n=t[e+"Alpha"];isNaN(n)&&(n=i),isNaN(n)||(a.a=n)}return a},createSVGFromJson:function(t,r,i,o,a){a=a||{},void 0===(o=e.mixin({},!a.noDefaults&&s,o)).borderColor&&(o.borderColor=o.fillColor);var n=c.createSVGNode(t.viewBox,{width:r+"px",height:i+"px",overflow:"visible"});return a.preserveAspectRatio&&n.setAttribute("preserveAspectRatio",a.preserveAspectRatio),o.borderScale=a.borderScale,t.g.forEach((function(t){var e=c.createNodeByAttributes(t,o,{overrideFillOpacity:a.overrideFillOpacity});e&&n.appendChild(e)})),n},_iBoxCache:{},calcContentBox:function(t,o,n,s,l){var d=i.get("ShapeUtil"),u=JSON.stringify(t.viewBox)+";"+JSON.stringify(t.g)+";"+o+";"+n+";"+JSON.stringify(l||{});if(d[u])return e.mixin({},d[u]);var b=c.createSVGFromJson(t,o,n,s,l);b.style.position="absolute",b.style.left="0",b.style.top="0",document.body.appendChild(b);var y=a.getNodesBox(b.children),A=r.position(b);return document.body.removeChild(b),y.x-=A.x,y.y-=A.y,y.r=o-(y.x+y.w),y.b=n-(y.y+y.h),d[u]=e.mixin({},y),y}};return c}));