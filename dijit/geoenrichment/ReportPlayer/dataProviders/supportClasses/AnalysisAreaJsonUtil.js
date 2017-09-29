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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["esri/graphic","esri/dijit/PopupTemplate"],function(e,r){var a={areasToJson:function(e){function r(e){return e?(e.getLayer()&&e.getLayer().remove(e),e.toJson()):null}return e.map(function(e){var a={};for(var t in e)"string"==typeof e[t]&&(a[t]=e[t]);return a.feature=r(e.feature),a.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(r),a.geographies=e.geographies,a})},areasFromJson:function(a){function t(a){if(!a)return null;var t=a.infoTemplate&&new r(a.infoTemplate);delete a.infoTemplate;var n=new e(a);return t&&n.setInfoTemplate(t),n}return a.map(function(e){var r={};for(var a in e)"string"==typeof e[a]&&(r[a]=e[a]);return r.feature=t(e.feature),r.additionalFeatures=e.additionalFeatures&&e.additionalFeatures.map(t),r.geographies=e.geographies,r})}};return a});