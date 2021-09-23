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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,i){var a={};function n(e){return{minW:"number"==typeof e.style.minWidth?e.style.minWidth:50,maxW:"number"==typeof e.style.maxWidth?e.style.maxWidth:1e6,minH:"number"==typeof e.style.minHeight?e.style.minHeight:50,maxH:"number"==typeof e.style.maxHeight?e.style.maxHeight:1e6}}function r(e){var t={l:1e6,t:1e6,w:0,h:0};return e.forEach((function(e){t.l=Math.min(t.l,e.left),t.t=Math.min(t.t,e.top),t.w=Math.max(t.w,e.left+e.width),t.h=Math.max(t.h,e.top+e.height)})),t.w=t.w-t.l,t.h=t.h-t.t,t}a.getContentDim=function(i){var a=i.header?t.getTableHeight(i.header)+(i.header.style.top||0):5,l={w:i.style.width,h:i.style.height-a,t:a,l:0,prettyBoxConstraints:n(i),hasHeader:!!i.header};if(i.variableTables){var s=[],o=[];i.variableTables.forEach((function(t){s.push(t.style),h(t).forEach((function(i){(i=e.mixin({},i)).left+=t.style.left,i.top+=t.style.top,o.push(i)}))})),l.vtInnerBox=r(s),l.innerBox=r(o)}return l},a.resizeLayout=function(e,t,i,n){n=n||{};var r=a.getContentDim(e);if(e.style.width=t,e.style.height=i,e.header)if(e.header.columns[0].style.width="100%",n.preserveHeaderPosition){var l=t/r.w;e.header.style.left*=l,e.header.style.width*=l}else e.header.style.left=0,e.header.style.top=0,e.header.style.width=e.style.width;e.variableTables&&e.variableTables.length&&a._resizeVariableTables(e,r,n)},a._resizeVariableTables=function(e,t,i){var n=(i=i||{}).allowResizeInnerElements,r=i.ignoreMinMaxConstraints,l=i.updateFontSize,h=a.getContentDim(e),s=h.t;function o(t,i){e.variableTables.forEach((function(e){e.style.left+=t,e.style.top+=i}))}function f(t,i){e.variableTables.forEach((function(e){e.style.left*=t,e.style.top=(e.style.top-s)*i+s;var r=e.style.width*t,h=e.style.height*i;a.resizeVariableTable(e,r,h,{preserveElementsSize:!n,updateFontSize:l})}))}var d,y;if(d=h.w/t.w,y=h.h/t.h,r)f(d,y);else{var u=function(e,t,i,a,n,r){var l=1,h=0,s=!1;return t>1?i>=r?h=(a-i)/2:a<=n?h=(a-i)/2:i>n&&a<r?l=t:i<n&&a>n?(h=(n-i)/2,s=!0,l=a/n):i<r&&a>r&&(l=r/e,h=(a-r)/2):a>=r?h=(a-i)/2:i<=n?h=(a-i)/2:i<r&&a>n?l=t:a<n&&i>n?(l=n/e,h=(a-n)/2):i>r&&a<r&&(h=(r-i)/2,s=!0,l=a/r),{scale:l,delta:h,shiftFirst:s}},m=h.vtInnerBox,c=u(m.w,d,t.w,h.w,h.prettyBoxConstraints.minW,h.prettyBoxConstraints.maxW),b=u(m.h,y,t.h,h.h,h.prettyBoxConstraints.minH,h.prettyBoxConstraints.maxH);c.shiftFirst?(o(c.delta,0),f(c.scale,1)):(f(c.scale,1),o(c.delta,0)),b.shiftFirst?(o(0,b.delta),f(1,b.scale)):(f(1,b.scale),o(0,b.delta))}i.headerChanged&&(i.headerPreChangeDim.hasHeader?(o(0,-(i.headerPreChangeDim.t-h.t)),f(1,h.h/i.headerPreChangeDim.h)):(o(0,h.t-i.headerPreChangeDim.t),f(1,h.h/i.headerPreChangeDim.h)))};var l=["shape","image","variable","description"];function h(e){var t=[];return l.forEach((function(i){e[i]&&t.push(e[i].style)})),t}return a.getVariableTableContentDim=function(e){return r(h(e))},a.resizeVariableTable=function(e,t,a,n){t=t||e.style.width,a=a||e.style.height;var r=t/e.style.width||1,h=a/e.style.height||1;e.style.width=t,e.style.height=a,function(e,t,a,n){n=n||{},l.forEach((function(r){var l=e[r]&&e[r].style;if(l)if(n.preserveElementsSize){var h=l.left+l.width/2,s=l.top+l.height/2;h*=t,s*=a,l.left=h-l.width/2,l.top=s-l.height/2}else{var o=function(){var t=e[r].themeStyle;return l.fontSize||t&&t.fontSize},f=o()?o()/l.height:1;l.left*=t,l.width*=t,l.top*=a,l.height*=a,!n.updateFontSize||"description"!==r&&"variable"!==r||o()&&(l.fontSize=i.roundNumber(f*l.height,2))}}))}(e,r,h,n)},a.fitVariableTableInBox=function(e,t){a.resizeVariableTable(e,t.w,t.h),e.style.left=0,e.style.top=0},a.VARIABLE_TABLE_ELEMENTS=l,a}));