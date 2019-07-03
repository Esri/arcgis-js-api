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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/Accessor","../../../../../core/Evented","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators"],function(e,r,t,o,p,n,c,s,l,i){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.initialize=function(){},r.prototype.destroy=function(){},Object.defineProperty(r.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),o([i.property({readOnly:!0})],r.prototype,"supportsTileUpdates",null),o([i.property({constructOnly:!0})],r.prototype,"remoteClient",void 0),o([i.property({constructOnly:!0})],r.prototype,"service",void 0),o([i.property({dependsOn:["tileStore.tileScheme.spatialReference"]})],r.prototype,"spatialReference",null),o([i.property({constructOnly:!0})],r.prototype,"tileInfo",void 0),o([i.property({constructOnly:!0})],r.prototype,"tileStore",void 0),r=o([i.subclass("esri.views.2d.layers.features.processors.BaseProcessor")],r)}(i.declared(c,l,s));r.default=u});