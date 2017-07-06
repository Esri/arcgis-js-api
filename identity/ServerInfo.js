// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/JSONSupport"],function(r,e,o,t,n,p){var i=function(r){function e(e){var o=r.call(this)||this;return o.adminTokenServiceUrl=null,o.currentVersion=null,o.hasPortal=null,o.hasServer=null,o.owningSystemUrl=null,o.owningTenant=null,o.server=null,o.shortLivedTokenValidity=null,o.tokenServiceUrl=null,o.webTierAuth=null,o}return o(e,r),e}(n.declared(p));return t([n.property({json:{write:!0}})],i.prototype,"adminTokenServiceUrl",void 0),t([n.property({json:{write:!0}})],i.prototype,"currentVersion",void 0),t([n.property({json:{write:!0}})],i.prototype,"hasPortal",void 0),t([n.property({json:{write:!0}})],i.prototype,"hasServer",void 0),t([n.property({json:{write:!0}})],i.prototype,"owningSystemUrl",void 0),t([n.property({json:{write:!0}})],i.prototype,"owningTenant",void 0),t([n.property({json:{write:!0}})],i.prototype,"server",void 0),t([n.property({json:{write:!0}})],i.prototype,"shortLivedTokenValidity",void 0),t([n.property({json:{write:!0}})],i.prototype,"tokenServiceUrl",void 0),t([n.property({json:{write:!0}})],i.prototype,"webTierAuth",void 0),i=t([n.subclass("esri.identity.ServerInfo")],i)});