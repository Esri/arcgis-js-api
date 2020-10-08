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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","../support/commonProperties"],(function(e,r,t,o,s,i,a,p,n,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISMapService=void 0,r.ArcGISMapService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t.__extends(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var o=this.type,s=-1!==t.indexOf("query"),i=-1!==t.indexOf("map"),a=!!r.exportTilesAllowed,p=-1!==t.indexOf("tilemap"),n="tile"!==o&&!!r.supportsDynamicLayers,l="tile"!==o&&(!r.tileInfo||n),u="tile"!==o&&(!r.tileInfo||n);return{operations:{supportsQuery:s,supportsExportMap:i,supportsExportTiles:a,supportsTileMap:p},exportMap:i?{supportsSublayersChanges:"tile"!==o,supportsDynamicLayers:n,supportsSublayerVisibility:l,supportsSublayerDefinitionExpression:u}:null,exportTiles:a?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},r.prototype.fetchSublayerInfo=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,this.fetchAllLayersAndTables(r)];case 1:return t.sent(),[2,this._allLayersAndTablesMap.get(e)]}}))}))},r.prototype.fetchAllLayersAndTables=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,a=this;return t.__generator(this,(function(p){switch(p.label){case 0:return[4,this.load(e)];case 1:return p.sent(),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=o(i.urlToObject(this.url).path+"/layers",{responseType:"json",query:t.__assign({f:"json"},this.customParameters)}).then((function(e){a._allLayersAndTablesMap=new Map;for(var r=0,t=e.data.layers;r<t.length;r++){var o=t[r];a._allLayersAndTablesMap.set(o.id,o)}return{result:e.data}}),(function(e){return{error:e}}))),[4,this._allLayersAndTablesPromise];case 2:if(r=p.sent(),s.throwIfAborted(e),"result"in r)return[2,r.result];throw r.error}}))}))},t.__decorate([a.property({readOnly:!0})],r.prototype,"capabilities",void 0),t.__decorate([a.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),t.__decorate([a.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),t.__decorate([a.property({type:p})],r.prototype,"fullExtent",void 0),t.__decorate([a.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),t.__decorate([a.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),t.__decorate([a.property(l.popupEnabled)],r.prototype,"popupEnabled",void 0),t.__decorate([a.property({type:n})],r.prototype,"spatialReference",void 0),t.__decorate([a.property()],r.prototype,"version",void 0),t.__decorate([a.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=t.__decorate([a.subclass("esri.layers.mixins.ArcGISMapService")],r)}(e)}}));