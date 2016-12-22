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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport","./PortalQueryParams"],function(t,r,e,o,p,i,l,n,s){var u=function(t){function r(r){t.call(this),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}return e(r,t),Object.defineProperty(r.prototype,"url",{get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")},r.prototype.toJSON=function(){throw new l("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},r.prototype.queryItems=function(t){return t=t?t.clone():new s,t.query="group:"+this.id+(t.query?" "+t.query:""),this.portal.queryItems(t)},o([i.property()],r.prototype,"access",void 0),o([i.property({type:Date})],r.prototype,"created",void 0),o([i.property()],r.prototype,"description",void 0),o([i.property()],r.prototype,"id",void 0),o([i.property()],r.prototype,"isInvitationOnly",void 0),o([i.property({type:Date})],r.prototype,"modified",void 0),o([i.property()],r.prototype,"owner",void 0),o([i.property()],r.prototype,"portal",void 0),o([i.property()],r.prototype,"snippet",void 0),o([i.property()],r.prototype,"sortField",void 0),o([i.property()],r.prototype,"sortOrder",void 0),o([i.property()],r.prototype,"tags",void 0),o([i.property()],r.prototype,"title",void 0),o([i.property({dependsOn:["portal.restUrl"],readOnly:!0})],r.prototype,"url",null),o([p(0,i.cast(s))],r.prototype,"queryItems",null),r=o([i.subclass("esri.portal.PortalGroup")],r)}(i.declared(n));return u});