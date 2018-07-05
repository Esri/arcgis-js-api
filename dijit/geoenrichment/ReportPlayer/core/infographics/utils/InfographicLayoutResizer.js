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

define(["dojo/_base/lang","../../supportClasses/TableUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,i){function n(e){return{minW:"number"==typeof e.style.minWidth?e.style.minWidth:50,maxW:"number"==typeof e.style.maxWidth?e.style.maxWidth:1e6,minH:"number"==typeof e.style.minHeight?e.style.minHeight:50,maxH:"number"==typeof e.style.maxHeight?e.style.maxHeight:1e6}}function a(e){var t={l:1e6,t:1e6,w:0,h:0};return e.forEach(function(e){t.l=Math.min(t.l,e.left),t.t=Math.min(t.t,e.top),t.w=Math.max(t.w,e.left+e.width),t.h=Math.max(t.h,e.top+e.height)}),t.w=t.w-t.l,t.h=t.h-t.t,t}function r(e){var t=[];return s.forEach(function(i){e[i]&&t.push(e[i].style)}),t}function h(e,t,n,a){a=a||{},s.forEach(function(r){function h(){var t=e[r].themeStyle;return o.fontSize||t&&t.fontSize}var o=e[r]&&e[r].style;if(o)if(a.preserveContentSizes){var s=o.left+o.width/2,l=o.top+o.height/2;s*=t,l*=n,o.left=s-o.width/2,o.top=l-o.height/2}else{var f=h()?h()/o.height:1;o.left*=t,o.width*=t,o.top*=n,o.height*=n,!a.updateFontSize||"description"!==r&&"variable"!==r||h()&&(o.fontSize=i.roundNumber(f*o.height,2))}})}var o={};o.getContentDim=function(i){var h=i.header?t.getTableHeight(i.header)+(i.header.style.spaceBefore||0):5,o={w:i.style.width,h:i.style.height-h,t:h,l:0},s=n(i),l={};if(l.w=Math.max(s.minW,Math.min(s.maxW,o.w)),l.h=Math.max(s.minH,Math.min(s.maxH,o.h)),l.l=Math.max(0,(o.w-l.w)/2),l.t=h+Math.max(0,(o.h-l.h)/2),o.prettyfiedBox=l,o.prettyBoxConstraints=s,o.hasHeader=!!i.header,i.variableTables){var f=[];i.variableTables.forEach(function(t){r(t).forEach(function(i){i=e.mixin({},i),i.left+=t.style.left,i.top+=t.style.top,f.push(i)})}),o.innerBox=a(f)}return o},o.resizeLayout=function(e,t,i,n){var a=o.getContentDim(e);e.style.width=t,e.style.height=i,e.header&&(e.header.style.width=e.style.width,e.header.data.columns[0].style.width="100%"),e.variableTables&&e.variableTables.length&&o._resizeVariableTables(e,a,n)},o._resizeVariableTables=function(e,t,i){function n(t,i){e.variableTables.forEach(function(e){e.style.left*=t,e.style.top=(e.style.top-u)*i+u;var n=e.style.width*t,a=e.style.height*i;o.resizeVariableTable(e,n,a,{preserveContentSizes:f,updateFontSize:m})})}function a(t,i){e.variableTables.forEach(function(e){e.style.left+=t,e.style.top+=i})}i=i||{};var r,h,s,l,f=void 0===i.preserveContentSizes||i.preserveContentSizes,y=void 0===i.usePrettyBox||i.usePrettyBox,m=i.updateFontSize,d=o.getContentDim(e),u=d.t;r=1,h=1,s=0,l=0,y&&d.w>d.prettyBoxConstraints.maxW?s=(d.w-t.w)/2:r=d.w/t.w,y&&d.h>d.prettyBoxConstraints.maxH?l=(d.h-t.h)/2:h=d.h/t.h,n(r,h),a(s,l),y&&(d=o.getContentDim(e),r=1,h=1,s=0,l=0,(d.innerBox.w<d.prettyBoxConstraints.minW||d.innerBox.w>d.prettyBoxConstraints.maxW)&&(r=d.prettyfiedBox.w/d.innerBox.w,s=d.prettyfiedBox.l-d.innerBox.l),(d.innerBox.h<d.prettyBoxConstraints.minH||d.innerBox.h>d.prettyBoxConstraints.maxH)&&(h=d.prettyfiedBox.h/d.innerBox.h,l=d.prettyfiedBox.t-d.innerBox.t),n(r,h),a(s,l)),i.headerChanged&&(i.headerPreChangeDim.hasHeader?(a(0,-(i.headerPreChangeDim.t-d.t)),n(1,d.h/i.headerPreChangeDim.h)):(a(0,d.t-i.headerPreChangeDim.t),n(1,d.h/i.headerPreChangeDim.h)))};var s=["shape","image","variable","description"];return o.getVariableTableContentDim=function(e){return a(r(e))},o.resizeVariableTable=function(e,t,i,n){t=t||e.style.width,i=i||e.style.height;var a=t/e.style.width||1,r=i/e.style.height||1;e.style.width=t,e.style.height=i,h(e,a,r,n)},o});