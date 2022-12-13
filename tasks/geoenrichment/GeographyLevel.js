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

define(["../../declare"],(function(t){var r=t("esri.tasks.geoenrichment.GeographyLevel",null,{layerID:null,datasetID:null,countryID:null,constructor:function(t){t&&(this.layerID=t.layer||t.layerID||null,this.datasetID=t.dataset||t.datasetID||null,this.countryID=t.sourceCountry||t.countryID||null)},toJson:function(){var t={};return this.layerID&&(t.layer=this.layerID),this.datasetID&&(t.dataset=this.datasetID),this.countryID&&(t.sourceCountry=this.countryID),t}});return r.fromJsonArray=function(t){var n=[];if(!t)return n;for(var e=0;e<t.length;e++){var a=t[e];a instanceof r||(a=new r(a)),n.push(a)}return n},r.toJsonArray=function(t){if(!t||0===t.length)return null;for(var r=[],n=0;n<t.length;n++)r.push(t[n].toJson());return r},r}));