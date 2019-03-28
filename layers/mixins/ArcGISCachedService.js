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
             * @memberof module:esri/layers/mixins/ArcGISCachedService
             */

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/accessorSupport/decorators","./ArcGISService","../support/TileInfo","../support/TilemapCache"],function(e,r,t,o,l,n,p,i,a,c){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.copyright=null,r.minScale=0,r.maxScale=0,r.spatialReference=null,r.tileInfo=null,r.tilemapCache=null,r}return o(r,e),r.prototype.readMinScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},r.prototype.readMaxScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},Object.defineProperty(r.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),r.prototype.readTileInfo=function(e,r){if(!e)return null;var t=r.minScale,o=r.maxScale,l=r.minLOD,n=r.maxLOD;if(null!=l&&null!=n)e.lods=e.lods.filter(function(e){var r=e.level;return null!=r&&r>=l&&r<=n});else if(0!==t&&0!==o){var p=function(e){return Math.round(1e4*e)/1e4},i=t?p(t):1/0,c=o?p(o):-1/0;e.lods=e.lods.filter(function(e){var r=p(e.scale);return r<=i&&r>=c})}return a.fromJSON(e)},r.prototype.readTilemapCache=function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new c({layer:this}):null},l([p.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),l([p.property()],r.prototype,"minScale",void 0),l([p.reader("service","minScale")],r.prototype,"readMinScale",null),l([p.property()],r.prototype,"maxScale",void 0),l([p.reader("service","maxScale")],r.prototype,"readMaxScale",null),l([p.property({type:n.SpatialReference})],r.prototype,"spatialReference",void 0),l([p.property({readOnly:!0,dependsOn:["version"]})],r.prototype,"supportsBlankTile",null),l([p.property({type:a})],r.prototype,"tileInfo",void 0),l([p.reader("service","tileInfo",["tileInfo","minScale","maxScale"])],r.prototype,"readTileInfo",null),l([p.property()],r.prototype,"tilemapCache",void 0),l([p.reader("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),l([p.property()],r.prototype,"version",void 0),r=l([p.subclass("esri.layers.mixins.ArcGISCachedService")],r)}(p.declared(i))});