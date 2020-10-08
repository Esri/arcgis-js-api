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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(o,r,e,t,p){"use strict";return function(o){function r(r){var e=o.call(this,r)||this;return e._oAuthCred=null,e.appId=null,e.authNamespace="/",e.expiration=20160,e.forceLogin=!1,e.locale=null,e.minTimeUntilExpiration=30,e.popup=!1,e.popupCallbackUrl="oauth-callback.html",e.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",e.portalUrl="https://www.arcgis.com",e.preserveUrlHash=!1,e}var t;return e.__extends(r,o),t=r,r.prototype.clone=function(){return t.fromJSON(this.toJSON())},e.__decorate([p.property({json:{write:!0}})],r.prototype,"appId",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"authNamespace",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"expiration",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"forceLogin",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"locale",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"minTimeUntilExpiration",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"popup",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"popupCallbackUrl",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"popupWindowFeatures",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"portalUrl",void 0),e.__decorate([p.property({json:{write:!0}})],r.prototype,"preserveUrlHash",void 0),r=t=e.__decorate([p.subclass("esri.identity.OAuthInfo")],r)}(t.JSONSupport)}));