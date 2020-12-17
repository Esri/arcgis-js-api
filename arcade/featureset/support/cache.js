// COPYRIGHT © 2020 Esri
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

define(["require","exports"],(function(t,e){"use strict";return function(){function t(){this._databaseTypeMetaData={},this._layerInfo={}}return t.prototype.clearDatabaseType=function(t){void 0===this._databaseTypeMetaData[t]&&delete this._databaseTypeMetaData[t]},t.prototype.getDatabaseType=function(t){return"MUSTBESET"===t?null:void 0===this._databaseTypeMetaData[t]?null:this._databaseTypeMetaData[t]},t.prototype.setDatabaseType=function(t,e){this._databaseTypeMetaData[t]=e},t.prototype.getLayerInfo=function(t){return void 0===this._layerInfo[t]?null:this._layerInfo[t]},t.prototype.setLayerInfo=function(t,e){this._layerInfo[t]=e},t.prototype.clearLayerInfo=function(t){void 0!==this._layerInfo[t]&&delete this._layerInfo[t]},t.applicationCache=null,t}()}));