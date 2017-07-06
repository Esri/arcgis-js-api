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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor"],function(r,e,t,o,p,s){var u=function(r){function e(e){var t=r.call(this)||this;return t.nextQueryParams=null,t.queryParams=null,t.results=null,t.total=null,t}return t(e,r),e}(p.declared(s));return o([p.property()],u.prototype,"nextQueryParams",void 0),o([p.property()],u.prototype,"queryParams",void 0),o([p.property()],u.prototype,"results",void 0),o([p.property()],u.prototype,"total",void 0),u=o([p.subclass("esri.portal.PortalQueryResult")],u)});