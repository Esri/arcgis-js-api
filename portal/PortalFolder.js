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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport"],function(e,r,t,o,p,l,n){var u=function(e){function r(r){var t=e.call(this)||this;return t.created=null,t.id=null,t.portal=null,t.title=null,t.username=null,t}return t(r,e),Object.defineProperty(r.prototype,"url",{get:function(){var e=this.get("portal.restUrl");return e?e+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){throw new l("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},r}(p.declared(n));return o([p.property({type:Date})],u.prototype,"created",void 0),o([p.property()],u.prototype,"id",void 0),o([p.property()],u.prototype,"portal",void 0),o([p.property()],u.prototype,"title",void 0),o([p.property({dependsOn:["portal.restUrl"],readOnly:!0})],u.prototype,"url",null),o([p.property()],u.prototype,"username",void 0),u=o([p.subclass("esri.portal.PortalFolder")],u)});