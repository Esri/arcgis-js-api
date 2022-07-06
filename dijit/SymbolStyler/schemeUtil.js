// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../../Color","../../styles/relationship","dojo/_base/array","dojo/_base/lang"],(function(o,r,s,e){var l={getColorRamps:function(o,r){var e=l.getColorRampsWithSchemes(o,r);return s.map(e,(function(o){return o.colors}))},getColorRampsWithSchemes:function(o,r){var e=l._unify(o),n=[];return s.forEach(e,(function(o){var s,e=r>0,a=!!o.colorsForClassBreaks;s=e&&a?l._getClassBreaksColors(o,r):o.colors,n.push({colors:l._createColors(s),scheme:o})})),n},_getClassBreaksColors:function(o,s){return l.is2DScheme(o)?r.getColors(o,s):l._maxSupportedClassBreakColors(o.colorsForClassBreaks,s)},_unify:function(o){return[o.primaryScheme].concat(o.secondarySchemes)},is2DScheme:function(o){return!!(o&&o.colorsForClassBreaks&&o.colorsForClassBreaks[0]&&o.colorsForClassBreaks[0].colors&&Array.isArray(o.colorsForClassBreaks[0].colors[0]))},_maxSupportedClassBreakColors:function(o,r){for(var s,e,l=o.length,n=0;n<l&&!(r<(e=o[n]).numClasses);n++)s=e.colors;return s},getColorsForClassBreaks:function(o,s){var e=o.colorsForClassBreaks;return e&&l.is2DScheme(o)?r.getColors(o,s):l._maxSupportedClassBreakColors(e,s)},getFillColors:function(o){var r,e=l._unify(o),n=[];return s.forEach(e,(function(o){(r=o.marker||o).colors?n=n.concat(r.colors):n.push(r.color)})),l._removeDuplicates(n)},_removeDuplicates:function(o){var r,e={};return s.filter(o,(function(o){return(r=!e[o.toHex()])&&(e[o.toHex()]=1),r}))},getOutlineColors:function(o){var r,e=l._unify(o),n=[];return s.forEach(e,(function(o){(r=o.marker||o).outline?n.push(r.outline.color):r.colors?n=n.concat(r.colors):r.color&&n.push(r.color)})),l._removeDuplicates(n)},flipColors:function(o){o&&(o.colors&&o.colors.reverse(),l.is2DScheme(o)?r.flipColors(o,!0):o.colorsForClassBreaks&&s.forEach(o.colorsForClassBreaks,(function(o){o.numClasses>1&&o.colors.reverse()})))},cloneScheme:function(r){var n,a;return r&&(n=e.mixin({},r),a=l.is2DScheme(r),n.colors&&(n.colors=l._createColors(n.colors)),n.colorsForClassBreaks&&(n.colorsForClassBreaks=s.map(n.colorsForClassBreaks,(function(o){return{numClasses:o.numClasses,colors:a?o.colors.map((function(o){return l._createColors(o)})):l._createColors(o.colors)}}))),n.noDataColor&&(n.noDataColor=new o(n.noDataColor)),n.outline&&(n.outline={color:n.outline.color&&new o(n.outline.color),width:n.outline.width})),n},_createColors:function(r,e){return s.map(r,(function(r){var s=new o(r);return null!=e&&(s.a=e),s}))}};return l}));