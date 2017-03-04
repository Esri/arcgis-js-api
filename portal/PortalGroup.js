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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/accessorSupport/decorators","../core/Error","../core/JSONSupport","./PortalQueryParams"],function(r,t,e,o,p,l,n,i,u){var s=function(r){function t(t){var e=r.call(this)||this;return e.access=null,e.created=null,e.description=null,e.id=null,e.isInvitationOnly=!1,e.modified=null,e.owner=null,e.portal=null,e.snippet=null,e.sortField=null,e.sortOrder=null,e.tags=null,e.title=null,e}return e(t,r),Object.defineProperty(t.prototype,"url",{get:function(){var r=this.get("portal.restUrl");return r?r+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0}),t.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")},t.prototype.toJSON=function(){throw new n("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},t.prototype.queryItems=function(r){return r=r?r.clone():new u,r.query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r)},t}(l.declared(i));return o([l.property()],s.prototype,"access",void 0),o([l.property({type:Date})],s.prototype,"created",void 0),o([l.property()],s.prototype,"description",void 0),o([l.property()],s.prototype,"id",void 0),o([l.property()],s.prototype,"isInvitationOnly",void 0),o([l.property({type:Date})],s.prototype,"modified",void 0),o([l.property()],s.prototype,"owner",void 0),o([l.property()],s.prototype,"portal",void 0),o([l.property()],s.prototype,"snippet",void 0),o([l.property()],s.prototype,"sortField",void 0),o([l.property()],s.prototype,"sortOrder",void 0),o([l.property()],s.prototype,"tags",void 0),o([l.property()],s.prototype,"title",void 0),o([l.property({dependsOn:["portal.restUrl"],readOnly:!0})],s.prototype,"url",null),o([p(0,l.cast(u))],s.prototype,"queryItems",null),s=o([l.subclass("esri.portal.PortalGroup")],s)});