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

define(["dojo/_base/lang","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,i){var a={};function n(e){return{minW:"number"==typeof e.style.minWidth?e.style.minWidth:50,maxW:"number"==typeof e.style.maxWidth?e.style.maxWidth:1e6,minH:"number"==typeof e.style.minHeight?e.style.minHeight:50,maxH:"number"==typeof e.style.maxHeight?e.style.maxHeight:1e6}}function r(e){var t={l:1e6,t:1e6,w:0,h:0};return e.forEach((function(e){t.l=Math.min(t.l,e.left),t.t=Math.min(t.t,e.top),t.w=Math.max(t.w,e.left+e.width),t.h=Math.max(t.h,e.top+e.height)})),t.w=t.w-t.l,t.h=t.h-t.t,t}a.getContentDim=function(i){var a=i.header?t.getTableHeight(i.header)+(i.header.style.top||0):5,h={w:i.style.width,h:i.style.height-a,t:a,l:0,prettyBoxConstraints:n(i),hasHeader:!!i.header};if(i.variableTables){var s=[],o=[];i.variableTables.forEach((function(t){s.push(t.style),l(t).forEach((function(i){(i=e.mixin({},i)).left+=t.style.left,i.top+=t.style.top,o.push(i)}))})),h.vtInnerBox=r(s),h.innerBox=r(o)}return h},a.resizeLayout=function(e,t,i,n){n=n||{};var r=a.getContentDim(e);if(e.style.width=t,e.style.height=i,e.header)if(e.header.data.columns[0].style.width="100%",n.preserveHeaderPosition){var h=t/r.w;e.header.style.left*=h,e.header.style.width*=h}else e.header.style.left=0,e.header.style.top=0,e.header.style.width=e.style.width;e.variableTables&&e.variableTables.length&&a._resizeVariableTables(e,r,n)},a._resizeVariableTables=function(e,t,i){var n=(i=i||{}).allowResizeInnerElements,r=i.ignoreMinMaxConstraints,h=i.updateFontSize,l=a.getContentDim(e),s=l.t;function o(t,i){e.variableTables.forEach((function(e){e.style.left+=t,e.style.top+=i}))}function f(t,i){e.variableTables.forEach((function(e){e.style.left*=t,e.style.top=(e.style.top-s)*i+s;var r=e.style.width*t,l=e.style.height*i;a.resizeVariableTable(e,r,l,{preserveElementsSize:!n,updateFontSize:h})}))}var d,y;if(d=l.w/t.w,y=l.h/t.h,r)f(d,y);else{var u=function(e,t,i,a,n,r){var h=1,l=0,s=!1;return t>1?i>=r?l=(a-i)/2:a<=n?l=(a-i)/2:i>n&&a<r?h=t:i<n&&a>n?(l=(n-i)/2,s=!0,h=a/n):i<r&&a>r&&(h=r/e,l=(a-r)/2):a>=r?l=(a-i)/2:i<=n?l=(a-i)/2:i<r&&a>n?h=t:a<n&&i>n?(h=n/e,l=(a-n)/2):i>r&&a<r&&(l=(r-i)/2,s=!0,h=a/r),{scale:h,delta:l,shiftFirst:s}},m=l.vtInnerBox,c=u(m.w,d,t.w,l.w,l.prettyBoxConstraints.minW,l.prettyBoxConstraints.maxW),p=u(m.h,y,t.h,l.h,l.prettyBoxConstraints.minH,l.prettyBoxConstraints.maxH);c.shiftFirst?(o(c.delta,0),f(c.scale,1)):(f(c.scale,1),o(c.delta,0)),p.shiftFirst?(o(0,p.delta),f(1,p.scale)):(f(1,p.scale),o(0,p.delta))}i.headerChanged&&(i.headerPreChangeDim.hasHeader?(o(0,-(i.headerPreChangeDim.t-l.t)),f(1,l.h/i.headerPreChangeDim.h)):(o(0,l.t-i.headerPreChangeDim.t),f(1,l.h/i.headerPreChangeDim.h)))};var h=["shape","image","variable","description"];function l(e){var t=[];return h.forEach((function(i){e[i]&&t.push(e[i].style)})),t}return a.getVariableTableContentDim=function(e){return r(l(e))},a.resizeVariableTable=function(e,t,a,n){t=t||e.style.width,a=a||e.style.height;var r=t/e.style.width||1,l=a/e.style.height||1;e.style.width=t,e.style.height=a,function(e,t,a,n){n=n||{},h.forEach((function(r){var h=e[r]&&e[r].style;if(h)if(n.preserveElementsSize){var l=h.left+h.width/2,s=h.top+h.height/2;l*=t,s*=a,h.left=l-h.width/2,h.top=s-h.height/2}else{var o=function(){var t=e[r].themeStyle;return h.fontSize||t&&t.fontSize},f=o()?o()/h.height:1;h.left*=t,h.width*=t,h.top*=a,h.height*=a,!n.updateFontSize||"description"!==r&&"variable"!==r||o()&&(h.fontSize=i.roundNumber(f*h.height,2))}}))}(e,r,l,n)},a.VARIABLE_TABLE_ELEMENTS=h,a}));