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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var e={_getCellStyle:function(e,r){e.style=e.style||{};var t=e.style.fields=e.style.fields||{};return t[r.field]=t[r.field]||{}},_getCellStyleState:function(e){return{backgroundColor:e.backgroundColor,overrideStyle:e.overrideStyle,key:e.backgroundColor+"."+e.overrideStyle}},getStyleInfo:function(r,t){e.resetStyling(r,t);var l=[];return r.some((function(r){var o=function(r){var l;return!t.some((function(t){var o=e._getCellStyle(r,t),n=e._getCellStyleState(o);if(l&&l.key!==n.key)return!0;l=n}))&&l}(r);if(!o)return!0;if(l.length)if(1===l.length){if(l[0].key===o.key)return!0;l.push(o)}else{if(!o.backgroundColor&&!o.overrideStyle)return;if(!l.some((function(e){return e.key===o.key})))return!0}else l.push(o)}))?null:{states:l}},setAlternatingColors:function(r,t,l,o){e.resetStyling(r,t),l&&l.states.length&&(1===l.states.length&&"Default"===l.states[0].overrideStyle&&l.states.push({overrideStyle:"AlternatingRow"}),1===l.states.length&&"AlternatingRow"===l.states[0].overrideStyle&&l.states.unshift({overrideStyle:"Default"}),r.forEach((function(r,n){var i=n%2?l.states[1]:l.states[0];t.forEach((function(t){var l=e._getCellStyle(r,t);o&&o.forceOverrideOriginal?(l.backgroundColor=i.backgroundColor,l.overrideStyle=i.overrideStyle):(l.__isStyled=!0,l.__originalBackgroundColor=l.backgroundColor,l.backgroundColor=i.backgroundColor,l.__originalOverrideStyle=l.overrideStyle,l.overrideStyle=i.overrideStyle)}))})))},resetStyling:function(r,t){r.forEach((function(r){t.forEach((function(t){var l=e._getCellStyle(r,t);l.__isStyled&&(delete l.__isStyled,l.backgroundColor=l.__originalBackgroundColor,delete l.__originalBackgroundColor,l.overrideStyle=l.__originalOverrideStyle,delete l.__originalOverrideStyle)}))}))}};return e}));