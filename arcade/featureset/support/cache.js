/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";let a=function(){function a(){this._databaseTypeMetaData={},this._layerInfo={}}var t=a.prototype;return t.clearDatabaseType=function(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]},t.getDatabaseType=function(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]},t.setDatabaseType=function(a,t){this._databaseTypeMetaData[a]=t},t.getLayerInfo=function(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]},t.setLayerInfo=function(a,t){this._layerInfo[a]=t},t.clearLayerInfo=function(a){void 0!==this._layerInfo[a]&&delete this._layerInfo[a]},a}();return a.applicationCache=null,a}));
