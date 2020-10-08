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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.areLabelsVisible=i.getLayersForScale=i.serializeTimeOptions=i.serializeLayerDefinitions=i.isBaseLayer=i.isTiledLayer=void 0,i.isTiledLayer=function(e){return e&&"base-tile"===e.type||"tile"===e.type||"elevation"===e.type||"imagery-tile"===e.type||"base-elevation"===e.type||"open-street-map"===e.type||"wcs"===e.type||"web-tile"===e.type||"wmts"===e.type||"vector-tile"===e.type},i.isBaseLayer=function(e){return e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.indexOf(e)>-1},i.serializeLayerDefinitions=function(e){var i=/[:;]/,n=[],r=!1;if(e&&(e.forEach((function(e,t){n.push([t,e]),!r&&i.test(e)&&(r=!0)})),n.length>0)){var t=void 0;if(r){var a={};n.forEach((function(e){a[e[0]]=e[1]})),t=JSON.stringify(a)}else{var s=[];n.forEach((function(e){s.push(e[0]+":"+e[1])})),t=s.join(";")}return t}return null},i.serializeTimeOptions=function(e){if(e){var i=[];return e.forEach((function(e,n){i.push('"'+n+'":'+JSON.stringify(e))})),i.length?"{"+i.join(",")+"}":void 0}},i.getLayersForScale=function(e,i){var n=[];if(e>0&&i)for(var r=function(r){if(i[r].parentLayerId>=0&&-1===n.indexOf(i[r].parentLayerId)&&i.some((function(e){return e.id===i[r].parentLayerId})))return"continue";if(i[r].id>=0){var t=!0,a=i[r].maxScale,s=i[r].minScale;(a>0||s>0)&&(a>0&&s>0?t=a<=e&&e<=s:a>0?t=a<=e:s>0&&(t=e<=s)),t&&n.push(i[r].id)}},t=0;t<i.length;t++)r(t);return n},i.areLabelsVisible=function(e){return!0===e.labelsVisible&&null!=e.labelingInfo&&e.labelingInfo.length>0}}));