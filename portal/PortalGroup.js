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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessoireSupport/typescript","../core/Error","../core/JSONSupporter","./PortalQueryParams"],function(t,r,e,o,p,i,n,l){var s=function(t){function r(){t.call(this),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=null,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.tags=null,this.title=null,this.url=null}return e(r,t),r.prototype._urlGetter=function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},r.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")},r.prototype.toJSON=function(){throw new i("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},r.prototype.queryItems=function(t){return t=t?t.clone():new l,t.query="group:"+this.id+(t.query?" "+t.query:""),this.portal.queryItems(t)},o([p.shared("esri.portal.PortalGroup")],r.prototype,"declaredClass",void 0),o([p.property()],r.prototype,"access",void 0),o([p.property({type:Date})],r.prototype,"created",void 0),o([p.property()],r.prototype,"description",void 0),o([p.property()],r.prototype,"id",void 0),o([p.property()],r.prototype,"isInvitationOnly",void 0),o([p.property({type:Date})],r.prototype,"modified",void 0),o([p.property()],r.prototype,"owner",void 0),o([p.property()],r.prototype,"portal",void 0),o([p.property()],r.prototype,"snippet",void 0),o([p.property()],r.prototype,"tags",void 0),o([p.property()],r.prototype,"title",void 0),o([p.property({dependsOn:["portal.restUrl"],readOnly:!0})],r.prototype,"url",void 0),r=o([p.subclass()],r)}(n);return s});