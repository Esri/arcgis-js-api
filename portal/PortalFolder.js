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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessoireSupport/typescript","../core/Error","../core/JSONSupporter"],function(t,e,r,o,p,l,n){var i=function(t){function e(){t.call(this),this.created=null,this.id=null,this.portal=null,this.title=null,this.url=null,this.username=null}return r(e,t),e.prototype._urlGetter=function(){var t=this.get("portal.restUrl");return t?t+"/content/users/"+this.username+"/"+this.id:null},e.prototype.toJSON=function(){throw new l("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},o([p.shared("esri.portal.PortalFolder")],e.prototype,"declaredClass",void 0),o([p.property({type:Date})],e.prototype,"created",void 0),o([p.property()],e.prototype,"id",void 0),o([p.property()],e.prototype,"portal",void 0),o([p.property()],e.prototype,"title",void 0),o([p.property({dependsOn:["portal.restUrl"],readOnly:!0})],e.prototype,"url",void 0),o([p.property()],e.prototype,"username",void 0),e=o([p.subclass()],e)}(n);return i});