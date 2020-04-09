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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../request","../../core/promiseUtils","../../core/urlUtils","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","../support/commonProperties"],(function(e,r,t,o,p,s,i,a,n,l,u,c,y,d){Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISMapService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var o=this.type,p=-1!==t.indexOf("query"),s=-1!==t.indexOf("map"),i=!!r.exportTilesAllowed,a=-1!==t.indexOf("tilemap"),n="tile"!==o&&!!r.supportsDynamicLayers,l="tile"!==o&&(!r.tileInfo||n),u="tile"!==o&&(!r.tileInfo||n);return{operations:{supportsQuery:p,supportsExportMap:s,supportsExportTiles:i,supportsTileMap:a},exportMap:s?{supportsSublayersChanges:"tile"!==o,supportsDynamicLayers:n,supportsSublayerVisibility:l,supportsSublayerDefinitionExpression:u}:null,exportTiles:i?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},r.prototype.fetchSublayerInfo=function(e,r){return s(this,void 0,void 0,(function(){return p(this,(function(t){switch(t.label){case 0:return[4,this.fetchAllLayersAndTables(r)];case 1:return t.sent(),[2,this._allLayersAndTablesMap.get(e)]}}))}))},r.prototype.fetchAllLayersAndTables=function(e){return s(this,void 0,void 0,(function(){var r,t=this;return p(this,(function(o){switch(o.label){case 0:return[4,this.load(e)];case 1:return o.sent(),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=a(l.urlToObject(this.url).path+"/layers",{responseType:"json",query:{f:"json"}}).then((function(e){t._allLayersAndTablesMap=new Map;for(var r=0,o=e.data.layers;r<o.length;r++){var p=o[r];t._allLayersAndTablesMap.set(p.id,p)}return{result:e.data}}),(function(e){return{error:e}}))),[4,this._allLayersAndTablesPromise];case 2:if(r=o.sent(),n.throwIfAborted(e),"result"in r)return[2,r.result];throw r.error}}))}))},o([u.property({readOnly:!0})],r.prototype,"capabilities",void 0),o([u.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),o([u.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([u.property({type:c})],r.prototype,"fullExtent",void 0),o([u.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),o([u.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),o([u.property(d.popupEnabled)],r.prototype,"popupEnabled",void 0),o([u.property({type:y})],r.prototype,"spatialReference",void 0),o([u.property()],r.prototype,"version",void 0),o([u.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=o([u.subclass("esri.layers.mixins.ArcGISMapService")],r)}(u.declared(e))}}));