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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],function(e,t){return{areasToJson:function(t,r){function a(t){if(!t)return null;t.getLayer()&&(t=new e(t.geometry,t.symbol,t.attributes,t.infoTemplate));var a=t.toJson();return r&&r.excludeInfoTemplate&&delete a.infoTemplate,a}return t.map(function(e){var t={};for(var r in e)"string"==typeof e[r]&&(t[r]=e[r]);return t.feature=a(e.feature),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),t.geographies=e.geographies,t})},areasFromJson:function(r){function a(r){if(!r)return null;if(r instanceof e)return r;var a=r.infoTemplate&&new t(r.infoTemplate);delete r.infoTemplate;var n=new e(r);return a&&n.setInfoTemplate(a),n}return r.map(function(e){var t={};for(var r in e)"string"==typeof e[r]&&(t[r]=e[r]);return t.feature=a(e.feature),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),t.geographies=e.geographies,t})}}});