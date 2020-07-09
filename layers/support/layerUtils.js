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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isTiledLayer=function(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"imagery-tile"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type},n.isBaseLayer=function(e){return e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.indexOf(e)>-1},n.serializeLayerDefinitions=function(e){var n=/[:;]/,i=[],t=!1;if(e&&(e.forEach((function(e,r){i.push([r,e]),!t&&n.test(e)&&(t=!0)})),i.length>0)){var r=void 0;if(t){var a={};i.forEach((function(e){a[e[0]]=e[1]})),r=JSON.stringify(a)}else{var o=[];i.forEach((function(e){o.push(e[0]+":"+e[1])})),r=o.join(";")}return r}return null},n.serializeTimeOptions=function(e){if(e){var n=[];return e.forEach((function(e,i){n.push('"'+i+'":'+JSON.stringify(e))})),n.length?"{"+n.join(",")+"}":void 0}},n.getLayersForScale=function(e,n){var i=[];if(e>0&&n)for(var t=function(t){if(n[t].parentLayerId>=0&&-1===i.indexOf(n[t].parentLayerId)&&n.some((function(e){return e.id===n[t].parentLayerId})))return"continue";if(n[t].id>=0){var r=!0,a=n[t].maxScale,o=n[t].minScale;(a>0||o>0)&&(a>0&&o>0?r=a<=e&&e<=o:a>0?r=a<=e:o>0&&(r=e<=o)),r&&i.push(n[t].id)}},r=0;r<n.length;r++)t(r);return i},n.areLabelsVisible=function(e){return!0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}}));