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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport","./PortalQueryParams"],function(t,r,e,o,p,l,n,i,u){var y=function(t){function r(r){var e=t.call(this)||this;return e.access=null,e.created=null,e.description=null,e.id=null,e.isInvitationOnly=!1,e.modified=null,e.owner=null,e.portal=null,e.snippet=null,e.sortField=null,e.sortOrder=null,e.tags=null,e.title=null,e}return e(r,t),Object.defineProperty(r.prototype,"thumbnailUrl",{get:function(){var t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(t+"/info/"+r+"?f=json"):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")},r.prototype.getThumbnailUrl=function(t){var r=this.thumbnailUrl;return r&&t&&(r+="&w="+t),r},r.prototype.toJSON=function(){throw new n("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},r.prototype.queryItems=function(t){return t=t?t.clone():new u,t.query="group:"+this.id+(t.query?" "+t.query:""),this.portal.queryItems(t)},r}(l.declared(i));return o([l.property()],y.prototype,"access",void 0),o([l.property({type:Date})],y.prototype,"created",void 0),o([l.property()],y.prototype,"description",void 0),o([l.property()],y.prototype,"id",void 0),o([l.property()],y.prototype,"isInvitationOnly",void 0),o([l.property({type:Date})],y.prototype,"modified",void 0),o([l.property()],y.prototype,"owner",void 0),o([l.property()],y.prototype,"portal",void 0),o([l.property()],y.prototype,"snippet",void 0),o([l.property()],y.prototype,"sortField",void 0),o([l.property()],y.prototype,"sortOrder",void 0),o([l.property()],y.prototype,"tags",void 0),o([l.property()],y.prototype,"thumbnail",void 0),o([l.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],y.prototype,"thumbnailUrl",null),o([l.property()],y.prototype,"title",void 0),o([l.property({dependsOn:["portal.restUrl"],readOnly:!0})],y.prototype,"url",null),o([p(0,l.cast(u))],y.prototype,"queryItems",null),y=o([l.subclass("esri.portal.PortalGroup")],y)});