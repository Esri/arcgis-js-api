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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(r,e,o,t,n,p){return function(r){function e(e){var o=r.call(this)||this;return o.adminTokenServiceUrl=null,o.currentVersion=null,o.hasPortal=null,o.hasServer=null,o.owningSystemUrl=null,o.owningTenant=null,o.server=null,o.shortLivedTokenValidity=null,o.tokenServiceUrl=null,o.webTierAuth=null,o}return o(e,r),t([p.property({json:{write:!0}})],e.prototype,"adminTokenServiceUrl",void 0),t([p.property({json:{write:!0}})],e.prototype,"currentVersion",void 0),t([p.property({json:{write:!0}})],e.prototype,"hasPortal",void 0),t([p.property({json:{write:!0}})],e.prototype,"hasServer",void 0),t([p.property({json:{write:!0}})],e.prototype,"owningSystemUrl",void 0),t([p.property({json:{write:!0}})],e.prototype,"owningTenant",void 0),t([p.property({json:{write:!0}})],e.prototype,"server",void 0),t([p.property({json:{write:!0}})],e.prototype,"shortLivedTokenValidity",void 0),t([p.property({json:{write:!0}})],e.prototype,"tokenServiceUrl",void 0),t([p.property({json:{write:!0}})],e.prototype,"webTierAuth",void 0),e=t([p.subclass("esri.identity.ServerInfo")],e)}(p.declared(n))});