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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             *
             * @memberof module:esri/layers/mixins/ArcGISCachedService
             */

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/accessorSupport/decorators","./ArcGISService","../support/TileInfo","../support/TilemapCache"],function(e,r,t,o,p,i,n,a,l,c){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.copyright=null,r.minScale=0,r.maxScale=0,r.spatialReference=null,r.tileInfo=null,r.tilemapCache=null,r}return o(r,e),Object.defineProperty(r.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),r.prototype.readTileInfo=function(e,r){var t=function(e){return Math.round(1e4*e)/1e4},o=r.minScale?t(r.minScale):1/0,p=r.maxScale?t(r.maxScale):-1/0;return e?(e.lods=e.lods.filter(function(e){var r=t(e.scale);return r<=o&&r>=p}),l.fromJSON(e)):null},r.prototype.readTilemapCache=function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new c({layer:this}):null},p([n.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),p([n.property({json:{origins:{service:{read:!1}}}})],r.prototype,"minScale",void 0),p([n.property({json:{origins:{service:{read:!1}}}})],r.prototype,"maxScale",void 0),p([n.property({type:i.SpatialReference})],r.prototype,"spatialReference",void 0),p([n.property({readOnly:!0,dependsOn:["version"]})],r.prototype,"supportsBlankTile",null),p([n.property({type:l})],r.prototype,"tileInfo",void 0),p([n.reader("service","tileInfo",["tileInfo","minScale","maxScale"])],r.prototype,"readTileInfo",null),p([n.property()],r.prototype,"tilemapCache",void 0),p([n.reader("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),p([n.property()],r.prototype,"version",void 0),r=p([n.subclass("esri.layers.mixins.ArcGISCachedService")],r)}(n.declared(a))});