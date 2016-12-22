// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport"],function(e,t,r,o,p,l,n){var i=function(e){function t(t){e.call(this),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}return r(t,e),Object.defineProperty(t.prototype,"url",{get:function(){var e=this.get("portal.restUrl");return e?e+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){throw new l("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},o([p.property({type:Date})],t.prototype,"created",void 0),o([p.property()],t.prototype,"id",void 0),o([p.property()],t.prototype,"portal",void 0),o([p.property()],t.prototype,"title",void 0),o([p.property({dependsOn:["portal.restUrl"],readOnly:!0})],t.prototype,"url",null),o([p.property()],t.prototype,"username",void 0),t=o([p.subclass("esri.portal.PortalFolder")],t)}(p.declared(n));return i});