// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             *
             * @memberof module:esri/layers/mixins/ArcGISMapService
             */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","./ArcGISService","../support/commonProperties"],function(e,r,t,p,o,i,s,a,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map(function(e){return e.toLowerCase().trim()});if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var p=this.type,o=-1!==t.indexOf("query"),i=-1!==t.indexOf("map"),s=!!r.exportTilesAllowed,a=-1!==t.indexOf("tilemap"),l="tile"!==p&&!!r.supportsDynamicLayers,n="tile"!==p&&(!r.tileInfo||l),u="tile"!==p&&(!r.tileInfo||l),y="tile"!==p;return{operations:{supportsQuery:o,supportsExportMap:i,supportsExportTiles:s,supportsTileMap:a},exportMap:i?{supportsSublayersChanges:y,supportsDynamicLayers:l,supportsSublayerVisibility:n,supportsSublayerDefinitionExpression:u}:null,exportTiles:s?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},p([o.property({readOnly:!0})],r.prototype,"capabilities",void 0),p([o.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),p([o.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),p([o.property({type:i})],r.prototype,"fullExtent",void 0),p([o.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),p([o.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),p([o.property(l.popupEnabled)],r.prototype,"popupEnabled",void 0),p([o.property({type:s})],r.prototype,"spatialReference",void 0),p([o.property()],r.prototype,"version",void 0),p([o.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=p([o.subclass("esri.layers.mixins.ArcGISMapService")],r)}(o.declared(a))});