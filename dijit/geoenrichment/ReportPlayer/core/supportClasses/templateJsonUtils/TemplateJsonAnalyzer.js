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

define(["./query/TemplateJsonQueryUtil"],(function(a){var e={collectVariablesStats:function(e){var n={};return a.processTemplateFieldInfos(e,(function(a){a.infographicJson&&a.infographicJson.variables?a.infographicJson.variables.forEach((function(a){n[a]=1})):a.hasVariable&&(a.usedMapTos?a.usedMapTos.forEach((function(a){n[a]=1})):a.fullName&&(n[a.fullName]=1))})),n},collectMapItemIds:function(e){var n={};a.calcNumberOfMaps(e,(function(a){a.webMapId&&(n[a.webMapId]=1),a.defaultBasemapId&&(n[a.defaultBasemapId]=1)}));var r=[];for(var o in n)r.push(o);return r}};return e}));