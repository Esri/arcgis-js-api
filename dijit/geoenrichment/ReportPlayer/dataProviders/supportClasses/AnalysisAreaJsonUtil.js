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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],function(e,t){var a={areasToJson:function(t,a){function r(t){if(!t)return null;t.getLayer()&&(t=new e(t.geometry,t.symbol,t.attributes,t.infoTemplate));var r=t.toJson();return a&&a.excludeInfoTemplate&&delete r.infoTemplate,r}return t.map(function(e){var t={};for(var a in e)"string"==typeof e[a]&&(t[a]=e[a]);return t.feature=r(e.feature),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(r),t.geographies=e.geographies,t})},areasFromJson:function(a){function r(a){if(!a)return null;var r=a.infoTemplate&&new t(a.infoTemplate);delete a.infoTemplate;var n=new e(a);return r&&n.setInfoTemplate(r),n}return a.map(function(e){var t={};for(var a in e)"string"==typeof e[a]&&(t[a]=e[a]);return t.feature=r(e.feature),t.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(r),t.geographies=e.geographies,t})}};return a});