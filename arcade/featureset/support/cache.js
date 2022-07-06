/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class a{constructor(){this._databaseTypeMetaData={},this._layerInfo={}}clearDatabaseType(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]}getDatabaseType(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]}setDatabaseType(a,e){this._databaseTypeMetaData[a]=e}getLayerInfo(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]}setLayerInfo(a,e){this._layerInfo[a]=e}clearLayerInfo(a){void 0!==this._layerInfo[a]&&delete this._layerInfo[a]}}a.applicationCache=null;export{a as default};
