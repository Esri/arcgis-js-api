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

define(["../../Color","dojo/_base/array","dojo/_base/lang"],function(o,r,e){var n={getColorRamps:function(o,e){var s=n.getColorRampsWithSchemes(o,e);return r.map(s,function(o){return o.colors})},getColorRampsWithSchemes:function(o,e){var s=n._unify(o),l=[];return r.forEach(s,function(o){var r,s=e>0,c=!!o.colorsForClassBreaks;r=s&&c?n._maxSupportedClassBreakColors(o.colorsForClassBreaks,e):o.colors,l.push({colors:r,scheme:o})}),l},_unify:function(o){return[o.primaryScheme].concat(o.secondarySchemes)},_maxSupportedClassBreakColors:function(o,r){for(var e,n,s=o.length,l=0;s>l&&(n=o[l],!(r<n.numClasses));l++)e=n.colors;return e},getFillColors:function(o){var e,s=n._unify(o),l=[];return r.forEach(s,function(o){e=o.marker||o,e.colors?l=l.concat(e.colors):l.push(e.color)}),n._removeDuplicates(l)},_removeDuplicates:function(o){var e,n={};return r.filter(o,function(o){return e=!n[o.toHex()],e&&(n[o.toHex()]=1),e})},getOutlineColors:function(o){var e,s=n._unify(o),l=[];return r.forEach(s,function(o){e=o.marker||o,e.outline?l.push(e.outline.color):e.colors?l=l.concat(e.colors):l.push(e.color)}),n._removeDuplicates(l)},flipColors:function(o){o.colors&&o.colors.reverse(),o.colorsForClassBreaks&&r.forEach(o.colorsForClassBreaks,function(o){o.numClasses>1&&o.colors.reverse()})},cloneScheme:function(s){var l;return s&&(l=e.mixin({},s),l.colors=n._createColors(l.colors),l.colorsForClassBreaks=r.map(l.colorsForClassBreaks,function(o){return{numClasses:o.numClasses,colors:n._createColors(o.colors)}}),l.noDataColor&&(l.noDataColor=new o(l.noDataColor)),l.outline&&(l.outline={color:l.outline.color&&new o(l.outline.color),width:l.outline.width})),l},_createColors:function(e,n){return r.map(e,function(r){var e=new o(r);return null!=n&&(e.a=n),e})}};return n});