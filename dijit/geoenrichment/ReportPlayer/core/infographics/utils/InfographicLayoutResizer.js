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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,i){function a(e){return{minW:"number"==typeof e.style.minWidth?e.style.minWidth:50,maxW:"number"==typeof e.style.maxWidth?e.style.maxWidth:1e6,minH:"number"==typeof e.style.minHeight?e.style.minHeight:50,maxH:"number"==typeof e.style.maxHeight?e.style.maxHeight:1e6}}function n(e){var t={l:1e6,t:1e6,w:0,h:0};return e.forEach(function(e){t.l=Math.min(t.l,e.left),t.t=Math.min(t.t,e.top),t.w=Math.max(t.w,e.left+e.width),t.h=Math.max(t.h,e.top+e.height)}),t.w=t.w-t.l,t.h=t.h-t.t,t}function r(e){var t=[];return s.forEach(function(i){e[i]&&t.push(e[i].style)}),t}function h(e,t,a,n){n=n||{},s.forEach(function(r){function h(){var t=e[r].themeStyle;return l.fontSize||t&&t.fontSize}var l=e[r]&&e[r].style;if(l)if(n.preserveElementsSize){var s=l.left+l.width/2,o=l.top+l.height/2;s*=t,o*=a,l.left=s-l.width/2,l.top=o-l.height/2}else{var f=h()?h()/l.height:1;l.left*=t,l.width*=t,l.top*=a,l.height*=a,!n.updateFontSize||"description"!==r&&"variable"!==r||h()&&(l.fontSize=i.roundNumber(f*l.height,2))}})}var l={};l.getContentDim=function(i){var h=i.header?t.getTableHeight(i.header)+(i.header.style.spaceBefore||0):5,l={w:i.style.width,h:i.style.height-h,t:h,l:0,prettyBoxConstraints:a(i),hasHeader:!!i.header};if(i.variableTables){var s=[],o=[];i.variableTables.forEach(function(t){s.push(t.style),r(t).forEach(function(i){i=e.mixin({},i),i.left+=t.style.left,i.top+=t.style.top,o.push(i)})}),l.vtInnerBox=n(s),l.innerBox=n(o)}return l},l.resizeLayout=function(e,t,i,a){a=a||{};var n=l.getContentDim(e);if(e.style.width=t,e.style.height=i,e.header)if(e.header.data.columns[0].style.width="100%",a.preserveHeaderPosition){var r=t/n.w;e.header.style.left*=r,e.header.style.width*=r}else e.header.style.left=0,e.header.style.spaceBefore=0,e.header.style.width=e.style.width;e.variableTables&&e.variableTables.length&&l._resizeVariableTables(e,n,a)},l._resizeVariableTables=function(e,t,i){function a(t,i){e.variableTables.forEach(function(e){e.style.left+=t,e.style.top+=i})}function n(t,i){e.variableTables.forEach(function(e){e.style.left*=t,e.style.top=(e.style.top-d)*i+d;var a=e.style.width*t,n=e.style.height*i;l.resizeVariableTable(e,a,n,{preserveElementsSize:!h,updateFontSize:o})})}function r(e,t,i,a,n,r){var h=1,l=0,s=!1;return t>1?i>=r?l=(a-i)/2:a<=n?l=(a-i)/2:i>n&&a<r?h=t:i<n&&a>n?(l=(n-i)/2,s=!0,h=a/n):i<r&&a>r&&(h=r/e,l=(a-r)/2):a>=r?l=(a-i)/2:i<=n?l=(a-i)/2:i<r&&a>n?h=t:a<n&&i>n?(h=n/e,l=(a-n)/2):i>r&&a<r&&(l=(r-i)/2,s=!0,h=a/r),{scale:h,delta:l,shiftFirst:s}}i=i||{};var h=i.allowResizeInnerElements,s=i.ignoreMinMaxConstraints,o=i.updateFontSize,f=l.getContentDim(e),d=f.t,y=1,u=1;if(y=f.w/t.w,u=f.h/t.h,s)n(y,u);else{var m=f.vtInnerBox,c=r(m.w,y,t.w,f.w,f.prettyBoxConstraints.minW,f.prettyBoxConstraints.maxW),p=r(m.h,u,t.h,f.h,f.prettyBoxConstraints.minH,f.prettyBoxConstraints.maxH);c.shiftFirst?(a(c.delta,0),n(c.scale,1)):(n(c.scale,1),a(c.delta,0)),p.shiftFirst?(a(0,p.delta),n(1,p.scale)):(n(1,p.scale),a(0,p.delta))}i.headerChanged&&(i.headerPreChangeDim.hasHeader?(a(0,-(i.headerPreChangeDim.t-f.t)),n(1,f.h/i.headerPreChangeDim.h)):(a(0,f.t-i.headerPreChangeDim.t),n(1,f.h/i.headerPreChangeDim.h)))};var s=["shape","image","variable","description"];return l.getVariableTableContentDim=function(e){return n(r(e))},l.resizeVariableTable=function(e,t,i,a){t=t||e.style.width,i=i||e.style.height;var n=t/e.style.width||1,r=i/e.style.height||1;e.style.width=t,e.style.height=i,h(e,n,r,a)},l.VARIABLE_TABLE_ELEMENTS=s,l});