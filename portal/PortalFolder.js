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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators"],function(e,r,t,o,p,l,n){return function(e){function r(r){var t=e.call(this)||this;return t.created=null,t.id=null,t.portal=null,t.title=null,t.username=null,t}return t(r,e),Object.defineProperty(r.prototype,"url",{get:function(){var e=this.get("portal.restUrl");return e?e+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){throw new p("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},o([n.property({type:Date})],r.prototype,"created",void 0),o([n.property()],r.prototype,"id",void 0),o([n.property()],r.prototype,"portal",void 0),o([n.property()],r.prototype,"title",void 0),o([n.property({dependsOn:["portal.restUrl"],readOnly:!0})],r.prototype,"url",null),o([n.property()],r.prototype,"username",void 0),r=o([n.subclass("esri.portal.PortalFolder")],r)}(n.declared(l))});