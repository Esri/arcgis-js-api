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

define(["dojo/_base/lang","../../supportClasses/TableUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,i){function n(t){var i=e.mixin({},l);return t.style.minWidth&&(i.minW=t.style.minWidth),t.style.minHeight&&(i.minH=t.style.minHeight),i}function a(e){var t={left:1e6,top:1e6,w:0,h:0};return e.forEach(function(e){t.left=Math.min(t.left,e.left),t.top=Math.min(t.top,e.top),t.w=Math.max(t.w,e.left+e.width),t.h=Math.max(t.h,e.top+e.height)}),t.w=t.w-t.left,t.h=t.h-t.top,t}function r(e){var t=[];return s.forEach(function(i){e[i]&&t.push(e[i].style)}),t}function h(e,t,n,a){a=a||{},s.forEach(function(r){function h(){return o.fontSize||l&&l.fontSize}var o=e[r]&&e[r].style;if(o){var l=e[r].themeStyle;if(a.preserveContentSizes){var s=o.left+o.width/2,f=o.top+o.height/2;s*=t,f*=n,o.left=s-o.width/2,o.top=f-o.height/2}else{var d=h()?h()/o.height:1;o.left*=t,o.width*=t,o.top*=n,o.height*=n,!a.updateFontSize||"description"!==r&&"variable"!==r||h()&&(o.fontSize=i.roundNumber(d*o.height,2))}}})}var o={},l={minW:320,maxW:1e6,minH:175,maxH:250};o.getContentDim=function(i){var r=i.header?t.getTableHeight(i.header)+(i.header.style.spaceBefore||0):5,h={w:i.style.width,h:i.style.height-r,top:r},o=n(i),l=e.mixin({},h);return l.w=Math.max(o.minW,Math.min(o.maxW,l.w)),l.h=Math.max(o.minH,Math.min(o.maxH,l.h)),l.left=Math.max(0,(h.w-l.w)/2),l.top=Math.max(0,(h.h-l.h)/2),h.prettyfiedBox=l,i.variableTables&&(h.innerBox=a(i.variableTables.map(function(e){return e.style})),h.innerBox.top-=r),h},o.resizeLayout=function(e,t,i){function n(t,n){e.variableTables.forEach(function(e){e.style.left*=t,e.style.top=(e.style.top-f)*n+f;var a=e.style.width*t,r=e.style.height*n;o.resizeVariableTable(e,a,r,{preserveContentSizes:void 0!==i.preserveContentSizes?i.preserveContentSizes:!0,updateFontSize:i.updateFontSize})})}i=i||{};var a=void 0!==i.usePrettyBox?i.usePrettyBox:!0,r=!a&&o.getContentDim(e);if(e.style.width=t.w,e.style.height=t.h,e.header&&(e.header.style.width=e.style.width,e.header.data.columns[0].style.width="100%"),e.variableTables){var h,l,s=o.getContentDim(e),f=s.top;if(a){h=s.prettyfiedBox.w/s.innerBox.w,l=s.prettyfiedBox.h/s.innerBox.h,n(h,l),s=o.getContentDim(e);var d=s.prettyfiedBox.left-s.innerBox.left,p=s.prettyfiedBox.top-s.innerBox.top;e.variableTables.forEach(function(e){e.style.left+=d,e.style.top+=p})}else h=s.w/r.w,l=s.h/r.h,n(h,l)}};var s=["shape","image","variable","description"];return o.getVariableTableContentDim=function(e){return a(r(e))},o.resizeVariableTable=function(e,t,i,n){t=t||e.style.width,i=i||e.style.height;var a=t/e.style.width||1,r=i/e.style.height||1;e.style.width=t,e.style.height=i,h(e,a,r,n)},o});