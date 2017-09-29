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

define(["./TemplateJsonQueryUtil","../images/ImageDataHolder"],function(e,a){return{serialize:function(e){return this._attachImagesToTemplateJson(e),e},_attachImagesToTemplateJson:function(t){function i(e){var t=a.getImageData(e);t&&(n[e]=t)}var n={};e.processTemplateFieldInfos(t,function(e){e&&e.isImage&&i(e.imageJson.fileName)},{innerFields:"all"}),e.processSectionElements(t,function(e){"img"==e.id&&i(e.fileName)}),t.imageData=n},deserialize:function(e){return this._takeImagesFromTemplateJson(e),e},_takeImagesFromTemplateJson:function(e){for(var t in e.imageData)a.putImageData(t,e.imageData[t]);delete e.imageData}}});