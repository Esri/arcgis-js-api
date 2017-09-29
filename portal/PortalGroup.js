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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport","./PortalQueryParams"],function(t,r,e,o,p,l,n,i,u){var y=function(t){function r(r){var e=t.call(this)||this;return e.access=null,e.created=null,e.description=null,e.id=null,e.isInvitationOnly=!1,e.modified=null,e.owner=null,e.portal=null,e.snippet=null,e.sortField=null,e.sortOrder=null,e.tags=null,e.title=null,e}return e(r,t),Object.defineProperty(r.prototype,"thumbnailUrl",{get:function(){var t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(t+"/info/"+r+"?f=json"):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")},r.prototype.getThumbnailUrl=function(t){var r=this.thumbnailUrl;return r&&t&&(r+="&w="+t),r},r.prototype.toJSON=function(){throw new n("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},r.prototype.queryItems=function(t){return t=t?t.clone():new u,t.query="group:"+this.id+(t.query?" "+t.query:""),this.portal.queryItems(t)},o([l.property()],r.prototype,"access",void 0),o([l.property({type:Date})],r.prototype,"created",void 0),o([l.property()],r.prototype,"description",void 0),o([l.property()],r.prototype,"id",void 0),o([l.property()],r.prototype,"isInvitationOnly",void 0),o([l.property({type:Date})],r.prototype,"modified",void 0),o([l.property()],r.prototype,"owner",void 0),o([l.property()],r.prototype,"portal",void 0),o([l.property()],r.prototype,"snippet",void 0),o([l.property()],r.prototype,"sortField",void 0),o([l.property()],r.prototype,"sortOrder",void 0),o([l.property()],r.prototype,"tags",void 0),o([l.property()],r.prototype,"thumbnail",void 0),o([l.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],r.prototype,"thumbnailUrl",null),o([l.property()],r.prototype,"title",void 0),o([l.property({dependsOn:["portal.restUrl"],readOnly:!0})],r.prototype,"url",null),o([p(0,l.cast(u))],r.prototype,"queryItems",null),r=o([l.subclass("esri.portal.PortalGroup")],r)}(l.declared(i));return y});