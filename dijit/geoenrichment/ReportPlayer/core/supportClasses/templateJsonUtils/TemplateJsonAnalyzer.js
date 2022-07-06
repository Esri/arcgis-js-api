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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["./query/TemplateJsonQueryUtil"],(function(a){var e={collectVariablesStats:function(e){var n={};return a.processTemplateFieldInfos(e,(function(a){a.infographicJson&&a.infographicJson.variables?a.infographicJson.variables.forEach((function(a){n[a]=1})):a.hasVariable&&(a.usedMapTos?a.usedMapTos.forEach((function(a){n[a]=1})):a.fullName&&(n[a.fullName]=1))})),n},collectMapItemIdsAndNames:function(e){var n={},r={};a.calcNumberOfMaps(e,(function(a){a.defaultBasemapId&&(n[a.defaultBasemapId]=1),a.defaultBasemapName&&(r[a.defaultBasemapName]=1),a.webMapId&&(n[a.webMapId]=1),a.webMapName&&(r[a.webMapName]=1)}));var s=[];for(var o in n)s.push(o);var f=[];for(var o in r)f.push(o);return{itemIds:s,mapNames:f}}};return e}));