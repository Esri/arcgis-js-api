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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators"],(function(e,t,r,o,p,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.created=null,r.id=null,r.portal=null,r.title=null,r.username=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"url",{get:function(){var e=this.get("portal.restUrl");return e?e+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){throw new o("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},r.__decorate([n.property({type:Date})],t.prototype,"created",void 0),r.__decorate([n.property()],t.prototype,"id",void 0),r.__decorate([n.property()],t.prototype,"portal",void 0),r.__decorate([n.property()],t.prototype,"title",void 0),r.__decorate([n.property({dependsOn:["portal.restUrl"],readOnly:!0})],t.prototype,"url",null),r.__decorate([n.property()],t.prototype,"username",void 0),t=r.__decorate([n.subclass("esri.portal.PortalFolder")],t)}(p.JSONSupport)}));