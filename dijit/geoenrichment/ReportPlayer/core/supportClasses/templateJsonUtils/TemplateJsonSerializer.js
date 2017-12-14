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

define(["./query/TemplateJsonQueryUtil","../images/ImageDataHolder"],function(e,a){return{serialize:function(e){return this._attachImagesToTemplateJson(e),e},_attachImagesToTemplateJson:function(i){function t(e){var i=a.getImageData(e);i&&(n[e]=i)}var n={};e.processTemplateFieldInfos(i,function(e){e.isImage?t(e.imageJson.fileName):e.isInfographic&&e.infographicJson.variableTables&&e.infographicJson.variableTables.forEach(function(e){e.image&&t(e.image.imageJson.fileName)})}),e.processSectionElements(i,function(e){"img"===e.id&&t(e.fileName)}),i.imageData=n},deserialize:function(e){return this._takeImagesFromTemplateJson(e),e},_takeImagesFromTemplateJson:function(e){for(var i in e.imageData)a.putImageData(i,e.imageData[i]);delete e.imageData}}});