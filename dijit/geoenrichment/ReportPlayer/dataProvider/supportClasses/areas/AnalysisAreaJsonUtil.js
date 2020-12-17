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

define(["esri/graphic","esri/dijit/PopupTemplate"],(function(e,r){function n(r,n){if(!r)return null;r.getLayer()&&(r=new e(r.geometry,r.symbol,r.attributes,r.infoTemplate));var a=r.toJson();return n&&delete a.infoTemplate,a}function a(n){if(!n)return null;if(n instanceof e)return n;var a=n.infoTemplate&&new r(n.infoTemplate);delete n.infoTemplate;var t=new e(n);return a&&t.setInfoTemplate(a),t}function t(e){var r={};for(var n in e){var a=e[n];("string"==typeof a||"number"==typeof a&&!isNaN(a))&&(r[n]=a)}return r}return{areasToJson:function(e,r){var a=r&&r.excludeInfoTemplate;return e.map((function(e){var r=t(e);return r.feature=n(e.feature,a),r.location=e.location&&n(e.location,a),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map((function(e){return n(e,a)})),r.geographies=e.geographies,r.buffer=e.buffer,r.featureServiceQueryInfos=e.featureServiceQueryInfos,r}))},combinedAreasInfoToJson:function(e){var r=t(e);return r.groups=e.groups&&e.groups.map((function(e){var r=t(e);return r.indexes=e.indexes.slice(),r.location=e.location&&n(e.location),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(n),r})),r},areasFromJson:function(e){return e.map((function(e){var r=t(e);return r.feature=a(e.feature),r.location=e.location&&a(e.location),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),r.geographies=e.geographies,r.buffer=e.buffer,r.featureServiceQueryInfos=e.featureServiceQueryInfos,r}))},combinedAreasInfoFromJson:function(e){var r=t(e);return r.groups=e.groups&&e.groups.map((function(e){var r=t(e);return r.indexes=e.indexes.slice(),r.location=e.location&&a(e.location),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),r})),r}}}));