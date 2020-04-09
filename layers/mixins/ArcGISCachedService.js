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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/accessorSupport/decorators","../support/serviceTileInfoProperty","../support/TilemapCache"],(function(e,r,t,p,o,i,l,a,n){Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISCachedService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.copyright=null,r.minScale=0,r.maxScale=0,r.spatialReference=null,r.tileInfo=null,r.tilemapCache=null,r}return p(r,e),r.prototype.readMinScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},r.prototype.readMaxScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},Object.defineProperty(r.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),r.prototype.readTilemapCache=function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new n.TilemapCache({layer:this}):null},o([l.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([l.property()],r.prototype,"minScale",void 0),o([l.reader("service","minScale")],r.prototype,"readMinScale",null),o([l.property()],r.prototype,"maxScale",void 0),o([l.reader("service","maxScale")],r.prototype,"readMaxScale",null),o([l.property({type:i.SpatialReference})],r.prototype,"spatialReference",void 0),o([l.property({readOnly:!0,dependsOn:["version"]})],r.prototype,"supportsBlankTile",null),o([l.property(a.serviceTileInfoProperty)],r.prototype,"tileInfo",void 0),o([l.property()],r.prototype,"tilemapCache",void 0),o([l.reader("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),o([l.property()],r.prototype,"version",void 0),r=o([l.subclass("esri.layers.mixins.ArcGISCachedService")],r)}(l.declared(e))}}));