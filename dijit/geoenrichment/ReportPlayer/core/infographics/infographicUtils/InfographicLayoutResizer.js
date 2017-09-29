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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/TableUtil"],function(t,e){function i(e){var i=t.mixin({},h);return e.style.minWidth&&(i.minW=e.style.minWidth),e.style.minHeight&&(i.minH=e.style.minHeight),i}var a={},h={minW:320,maxW:1e6,minH:175,maxH:250};return a.getContentDim=function(a){var h=e.getTableHeight(a.header)+(a.header.style.spaceBefore||0),l={w:a.style.width,h:a.style.height-h,top:h},n=i(a),s=t.mixin({},l);if(s.w=Math.max(n.minW,Math.min(n.maxW,s.w)),s.h=Math.max(n.minH,Math.min(n.maxH,s.h)),s.left=Math.max(0,(l.w-s.w)/2),s.top=Math.max(0,(l.h-s.h)/2),l.prettyfiedBox=s,a.variableTables){var o={left:1e6,top:1e6,w:0,h:0};a.variableTables.forEach(function(t){o.left=Math.min(o.left,t.style.left),o.top=Math.min(o.top,t.style.top),o.w=Math.max(o.w,t.style.left+t.style.width),o.h=Math.max(o.h,t.style.top+t.style.height)}),o.w=o.w-o.left,o.h=o.h-o.top,o.top-=h,l.innerBox=o}return l},a.resizeLayout=function(t,e){if(t.style.width=e.w,t.style.height=e.h,t.header.style.width=t.style.width,t.header.data.columns[0].style.width="100%",t.variableTables){var i=a.getContentDim(t),h=i.top,l=i.prettyfiedBox.w/i.innerBox.w,n=i.prettyfiedBox.h/i.innerBox.h;t.variableTables.forEach(function(t){t.style.left*=l,t.style.top=(t.style.top-h)*n+h;var e=t.style.width*l,i=t.style.height*n;a.resizeVariableTable(t,e,i,{preserveContentSizes:!0})}),i=a.getContentDim(t);var s=i.prettyfiedBox.left-i.innerBox.left,o=i.prettyfiedBox.top-i.innerBox.top;t.variableTables.forEach(function(t){t.style.left+=s,t.style.top+=o})}},a.resizeVariableTable=function(t,e,i,a){var h=a&&a.preserveContentSizes;e=e||t.style.width,i=i||t.style.height;var l=e/t.style.width||1,n=i/t.style.height||1;t.style.width=e,t.style.height=i,["shape","image","variable","description"].forEach(function(e){if(t[e]){var i=t[e],a=i.style;if(h){var s=a.left+a.width/2,o=a.top+a.height/2;s*=l,o*=n,a.left=s-a.width/2,a.top=o-a.height/2}else a.left*=l,a.width*=l,a.top*=n,a.height*=n}})},a});