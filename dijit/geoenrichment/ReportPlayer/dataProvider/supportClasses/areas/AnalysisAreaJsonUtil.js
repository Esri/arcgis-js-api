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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],(function(e,t){function r(t,r){if(!t)return null;t.getLayer()&&(t=new e(t.geometry,t.symbol,t.attributes,t.infoTemplate));var n=t.toJson();return r&&delete n.infoTemplate,n}function n(r){if(!r)return null;if(r instanceof e)return r;var n=r.infoTemplate&&new t(r.infoTemplate);delete r.infoTemplate;var a=new e(r);return n&&a.setInfoTemplate(n),a}function a(e){var t={};for(var r in e){var n=e[r];("string"==typeof n||"number"==typeof n&&!isNaN(n))&&(t[r]=n)}return t}return{areasToJson:function(e,t){var n=t&&t.excludeInfoTemplate;return e.map((function(e){var t=a(e);return t.feature=r(e.feature,n),t.location=e.location&&r(e.location,n),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map((function(e){return r(e,n)})),t.geographies=e.geographies,t.buffer=e.buffer,t.featureServiceQueryInfos=e.featureServiceQueryInfos,t.dynamicAttributes=e.dynamicAttributes,t}))},combinedAreasInfoToJson:function(e){var t=a(e);return t.groups=e.groups&&e.groups.map((function(e){var t=a(e);return t.indexes=e.indexes.slice(),t.location=e.location&&r(e.location),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(r),t})),t},areasFromJson:function(e){return e.map((function(e){var t=a(e);return t.feature=n(e.feature),t.location=e.location&&n(e.location),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(n),t.geographies=e.geographies,t.buffer=e.buffer,t.featureServiceQueryInfos=e.featureServiceQueryInfos,t.dynamicAttributes=e.dynamicAttributes,t}))},combinedAreasInfoFromJson:function(e){var t=a(e);return t.groups=e.groups&&e.groups.map((function(e){var t=a(e);return t.indexes=e.indexes.slice(),t.location=e.location&&n(e.location),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(n),t})),t}}}));