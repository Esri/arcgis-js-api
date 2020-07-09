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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/dom-style","dojo/_base/lang","dojo/dom-geometry","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,t,r,i,o){var a="http://www.w3.org/2000/svg",n={fillColor:"#FFFFFF",fillAlpha:1,borderAlpha:0,borderWidth:1},s={createSVGNode:function(t,r){var i=document.createElementNS(a,"svg");return r&&e.set(i,r),t=[t.xmin||0,t.ymin||0,t.width,t.height].join(" "),i.setAttribute("viewBox",t),i.setAttribute("xmlns",a),i},createPathNode:function(e,t){var r=document.createElementNS(a,"path");return r.setAttribute("d",e),s._setSettingsToNode(r,t),r},createEllipseNode:function(e,t,r,i,o){var n=document.createElementNS(a,"ellipse");return n.setAttribute("cx",e||0),n.setAttribute("cy",t||0),n.setAttribute("rx",r),n.setAttribute("ry",i),s._setSettingsToNode(n,o),n},createCircleNode:function(e,t,r,i){var o=document.createElementNS(a,"circle");return o.setAttribute("cx",e||0),o.setAttribute("cy",t||0),o.setAttribute("r",r),s._setSettingsToNode(o,i),o},createRectNode:function(e,t,r,i,o){var n=document.createElementNS(a,"rect");return n.setAttribute("x",e||0),n.setAttribute("y",t||0),n.setAttribute("width",r),n.setAttribute("height",i),s._setSettingsToNode(n,o),n},createLineNode:function(e,t,r,i,o){var n=document.createElementNS(a,"line");return n.setAttribute("x1",e||0),n.setAttribute("y1",t||0),n.setAttribute("x2",r||0),n.setAttribute("y2",i||0),s._setSettingsToNode(n,o),n},createPolygonNode:function(e,t){var r=document.createElementNS(a,"polygon");return r.setAttribute("points",e),s._setSettingsToNode(r,t),r},createNodeByAttributes:function(e,t,r){var i=null;switch(e.name){case"path":i=s.createPathNode(e.d,t);break;case"ellipse":i=s.createEllipseNode(e.cx,e.cy,e.rx,e.ry,t);break;case"circle":i=s.createCircleNode(e.cx,e.cy,e.r,t);break;case"rect":i=s.createRectNode(e.x,e.y,e.width,e.height,t);break;case"line":i=s.createLineNode(e.x1,e.y1,e.x2,e.y2,t);break;case"polygon":i=s.createPolygonNode(e.points,t)}if(i){var o=e["fill-opacity"];void 0===o||r&&r.overrideFillOpacity||(i.hasAttribute("fill-opacity")&&(o*=i.getAttribute("fill-opacity")),i.setAttribute("fill-opacity",o))}return i},_setSettingsToNode:function(e,t){if(t.borderWidth){var r=s.toColor(t,"border","#000000");e.setAttribute("stroke",i.toCSSColor(r,!0)),e.setAttribute("stroke-width",t.borderWidth),e.setAttribute("stroke-opacity",r.a),t.borderDashArray&&e.setAttribute("stroke-dasharray",Array.isArray(t.borderDashArray)?t.borderDashArray.join(","):t.borderDashArray),t.strokeMiterLimit&&e.setAttribute("stroke-miterlimit",t.strokeMiterLimit),t.borderScale||e.setAttribute("vector-effect","non-scaling-stroke")}if(t.fillColor){r=s.toColor(t,"fill","#FFFFFF");e.setAttribute("fill",i.toCSSColor(r,!0)),e.setAttribute("fill-opacity",r.a)}},toColor:function(e,t,r,o){var a=i.toColor(e[t+"Color"],r);if(1===a.a){var n=e[t+"Alpha"];isNaN(n)&&(n=o),isNaN(n)||(a.a=n)}return a},createSVGFromJson:function(e,r,i,o,a){a=a||{},void 0===(o=t.mixin({},!a.noDefaults&&n,o)).borderColor&&(o.borderColor=o.fillColor);var c=s.createSVGNode(e.viewBox,{width:r+"px",height:i+"px",overflow:"visible"});return a.preserveAspectRatio&&c.setAttribute("preserveAspectRatio",a.preserveAspectRatio),o.borderScale=a.borderScale,e.g.forEach((function(e){var t=s.createNodeByAttributes(e,o,{overrideFillOpacity:a.overrideFillOpacity});t&&c.appendChild(t)})),c},_iBoxCache:{},calcContentBox:function(e,i,a,n,c){var l=JSON.stringify(e.viewBox)+";"+JSON.stringify(e.g)+";"+i+";"+a+";"+JSON.stringify(c||{});if(s._iBoxCache[l])return t.mixin({},s._iBoxCache[l]);var d=s.createSVGFromJson(e,i,a,n,c);d.style.position="absolute",d.style.left="0",d.style.top="0",document.body.appendChild(d);var u=o.getNodesBox(d.children),b=r.position(d);return document.body.removeChild(d),u.x-=b.x,u.y-=b.y,u.r=i-(u.x+u.w),u.b=a-(u.y+u.h),s._iBoxCache[l]=t.mixin({},u),u}};return s}));