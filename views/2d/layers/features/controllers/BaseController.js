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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators"],function(e,t,r,o,n,p,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("add",this.tileAdded.bind(this)),this.tileStore.on("remove",this.tileRemoved.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),o([i.property()],t.prototype,"processor",void 0),o([i.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([i.property({constructOnly:!0})],t.prototype,"service",void 0),o([i.property({dependsOn:["tileStore.spatialReference"]})],t.prototype,"spatialReference",null),o([i.property({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([i.subclass()],t)}(i.declared(n,p));t.default=s});