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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(o,r,t,p,e,i){return function(o){function r(r){var t=o.call(this)||this;return t._oAuthCred=null,t.appId=null,t.authNamespace="/",t.expiration=20160,t.forceLogin=!1,t.locale=null,t.minTimeUntilExpiration=30,t.popup=!1,t.popupCallbackUrl="oauth-callback.html",t.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",t.portalUrl="https://www.arcgis.com",t}t(r,o),e=r,r.prototype.clone=function(){return e.fromJSON(this.toJSON())};var e;return p([i.property({json:{write:!0}})],r.prototype,"appId",void 0),p([i.property({json:{write:!0}})],r.prototype,"authNamespace",void 0),p([i.property({json:{write:!0}})],r.prototype,"expiration",void 0),p([i.property({json:{write:!0}})],r.prototype,"forceLogin",void 0),p([i.property({json:{write:!0}})],r.prototype,"locale",void 0),p([i.property({json:{write:!0}})],r.prototype,"minTimeUntilExpiration",void 0),p([i.property({json:{write:!0}})],r.prototype,"popup",void 0),p([i.property({json:{write:!0}})],r.prototype,"popupCallbackUrl",void 0),p([i.property({json:{write:!0}})],r.prototype,"popupWindowFeatures",void 0),p([i.property({json:{write:!0}})],r.prototype,"portalUrl",void 0),r=e=p([i.subclass("esri.identity.OAuthInfo")],r)}(i.declared(e))});