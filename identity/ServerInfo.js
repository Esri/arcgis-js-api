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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(e,r,o,t,n){"use strict";return function(e){function r(r){var o=e.call(this,r)||this;return o.adminTokenServiceUrl=null,o.currentVersion=null,o.hasPortal=null,o.hasServer=null,o.owningSystemUrl=null,o.owningTenant=null,o.server=null,o.shortLivedTokenValidity=null,o.tokenServiceUrl=null,o.webTierAuth=null,o}return o.__extends(r,e),o.__decorate([n.property({json:{write:!0}})],r.prototype,"adminTokenServiceUrl",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"currentVersion",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"hasPortal",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"hasServer",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"owningSystemUrl",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"owningTenant",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"server",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"shortLivedTokenValidity",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"tokenServiceUrl",void 0),o.__decorate([n.property({json:{write:!0}})],r.prototype,"webTierAuth",void 0),r=o.__decorate([n.subclass("esri.identity.ServerInfo")],r)}(t.JSONSupport)}));