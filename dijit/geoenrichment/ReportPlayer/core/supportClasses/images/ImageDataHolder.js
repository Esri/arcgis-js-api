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

define(["esri/dijit/geoenrichment/utils/CacheUtil"],(function(e){var a,t={};function n(){return e.get("ImageDataHolder.imageData")}function r(){return e.get("ImageDataHolder.fileNameToOriginal")}return t.setImageDataHolder4x=function(e){a=e;var t=n();for(var r in t)a.putImageData(r,t[r])},t.putImageData=function(e,t){if(a)a.putImageData(e,t);else if("string"==typeof e&&t){var i=e.toLowerCase();r()[i]=e,n()[i]=t}else console.error("Invalid image filename or data!")},t.getImageData=function(e){return a?a.getImageData(e):"string"!=typeof e?null:n()[e.toLowerCase()]},t.findFileNameByData=function(e){if(a)return a.findFileNameByData(e);var t=n();for(var i in t)if(e===t[i])return r()[i];return null},t}));