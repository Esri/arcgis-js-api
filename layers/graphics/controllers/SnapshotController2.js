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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Accessor","../../../core/Evented","../../../core/Promise","../../../core/accessorSupport/decorators"],function(e,r,t,o,p,n,i,s,a){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r){var t=e.call(this)||this;return t._pendingQueries=new Map,t.extent=null,t.hasAllFeatures=!1,t.hasFeatures=!1,t.maxPageSize=null,t.pageSize=null,t.paginationEnabled=!1,t}return t(r,e),r.prototype.initialize=function(){},r.prototype.destroy=function(){this._pendingQueries=null},Object.defineProperty(r.prototype,"updating",{get:function(){return!!(this._pendingQueries&&this._pendingQueries.size>0)},enumerable:!0,configurable:!0}),o([a.property()],r.prototype,"_pendingQueries",void 0),o([a.property()],r.prototype,"extent",void 0),o([a.property()],r.prototype,"hasAllFeatures",void 0),o([a.property()],r.prototype,"hasFeatures",void 0),o([a.property()],r.prototype,"maxPageSize",void 0),o([a.property()],r.prototype,"pageSize",void 0),o([a.property()],r.prototype,"paginationEnabled",void 0),o([a.property({dependsOn:["_pendingQueries"]})],r.prototype,"updating",null),r=o([a.subclass("esri.layers.graphics.controllers.SnapshotController")],r)}(a.declared(n,s,i));r.default=u});