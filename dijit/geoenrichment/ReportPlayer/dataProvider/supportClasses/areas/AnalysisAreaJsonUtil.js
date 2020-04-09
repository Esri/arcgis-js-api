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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],(function(e,n){function a(n,a){if(!n)return null;n.getLayer()&&(n=new e(n.geometry,n.symbol,n.attributes,n.infoTemplate));var t=n.toJson();return a&&delete t.infoTemplate,t}function t(a){if(!a)return null;if(a instanceof e)return a;var t=a.infoTemplate&&new n(a.infoTemplate);delete a.infoTemplate;var r=new e(a);return t&&r.setInfoTemplate(t),r}function r(e){var n={};for(var a in e){var t=e[a];("string"==typeof t||"number"==typeof t&&!isNaN(t))&&(n[a]=t)}return n}return{areasToJson:function(e,n){var t=n&&n.excludeInfoTemplate;return e.map((function(e){var n=r(e);return n.feature=a(e.feature,t),n.location=e.location&&a(e.location,t),n.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map((function(e){return a(e,t)})),n.geographies=e.geographies,n.buffer=e.buffer,n}))},combinedAreasInfoToJson:function(e){var n=r(e);return n.groups=e.groups&&e.groups.map((function(e){var n=r(e);return n.indexes=e.indexes.slice(),n.location=e.location&&a(e.location),n.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),n})),n},areasFromJson:function(e){return e.map((function(e){var n=r(e);return n.feature=t(e.feature),n.location=e.location&&t(e.location),n.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(t),n.geographies=e.geographies,n.buffer=e.buffer,n}))},combinedAreasInfoFromJson:function(e){var n=r(e);return n.groups=e.groups&&e.groups.map((function(e){var n=r(e);return n.indexes=e.indexes.slice(),n.location=e.location&&t(e.location),n.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(t),n})),n}}}));