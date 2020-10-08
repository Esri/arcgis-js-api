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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/CacheUtil"],(function(e){var t={};function a(){return e.get("ImageDataHolder.imageData")}function n(){return e.get("ImageDataHolder.fileNameToOriginal")}return t.putImageData=function(e,t){if("string"==typeof e&&t){var r=e.toLowerCase();n()[r]=e,a()[r]=t}else console.error("Invalid image filename or data!")},t.getImageData=function(e){return"string"!=typeof e?null:a()[e.toLowerCase()]},t.findFileNameByData=function(e){var t=a();for(var r in t)if(e===t[r])return n()[r];return null},t}));