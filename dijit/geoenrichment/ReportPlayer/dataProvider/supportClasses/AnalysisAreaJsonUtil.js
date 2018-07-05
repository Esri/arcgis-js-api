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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],function(e,r){return{areasToJson:function(r,t){function a(r){if(!r)return null;r.getLayer()&&(r=new e(r.geometry,r.symbol,r.attributes,r.infoTemplate));var a=r.toJson();return t&&t.excludeInfoTemplate&&delete a.infoTemplate,a}return r.map(function(e){var r={};for(var t in e)"string"==typeof e[t]&&(r[t]=e[t]);return r.feature=a(e.feature),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),r.geographies=e.geographies,r.buffer=e.buffer,r})},areasFromJson:function(t){function a(t){if(!t)return null;if(t instanceof e)return t;var a=t.infoTemplate&&new r(t.infoTemplate);delete t.infoTemplate;var n=new e(t);return a&&n.setInfoTemplate(a),n}return t.map(function(e){var r={};for(var t in e)"string"==typeof e[t]&&(r[t]=e[t]);return r.feature=a(e.feature),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(a),r.geographies=e.geographies,r.buffer=e.buffer,r})}}});