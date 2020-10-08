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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./PortalQueryParams"],(function(t,e,r,o,n,p,u,a){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.access=null,r.created=null,r.description=null,r.id=null,r.isInvitationOnly=!1,r.modified=null,r.owner=null,r.portal=null,r.snippet=null,r.sortField=null,r.sortOrder=null,r.tags=null,r.title=null,r}return r.__extends(e,t),Object.defineProperty(e.prototype,"thumbnailUrl",{get:function(){var t=this.url,e=this.thumbnail;return t&&e?this.portal._normalizeUrl(t+"/info/"+e+"?f=json"):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},enumerable:!1,configurable:!0}),e.prototype.fetchCategorySchema=function(t){var e=this;return this.portal._request(this.url+"/categorySchema",t).then((function(r){var o=r.categorySchema||[];return o.some((function(t){return"contentCategorySetsGroupQuery.LivingAtlas"===t.source}))?e._fetchCategorySchemaSet("LivingAtlas",t):o}))},e.prototype.fetchMembers=function(t){return this.portal._request(this.url+"/users",t)},e.prototype.getThumbnailUrl=function(t){var e=this.thumbnailUrl;return e&&t&&(e+="&w="+t),e},e.prototype.toJSON=function(){throw new o("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},e.prototype.queryItems=function(t,e){var r=u.ensureType(a,t);return parseFloat(this.portal.currentVersion)>5?(r=r||new a,this.portal._queryPortal("/content/groups/"+this.id+"/search",r,"PortalItem",e)):((r=r?r.clone():new a).query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,e))},e.prototype._fetchCategorySchemaSet=function(t,e){var r=this;return this.portal._fetchSelf(this.portal.authMode,!0,e).then((function(t){var n=t.contentCategorySetsGroupQuery;if(n){var p=new a;return p.disableExtraQuery=!0,p.num=1,p.query=n,r.portal.queryGroups(p,e)}throw new o("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((function(r){if(r.total){var n=r.results[0],p=new a;return p.num=1,p.query='typekeywords:"'+t+'"',n.queryItems(p,e)}throw new o("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((function(t){return t.total?t.results[0].fetchData("json",e).then((function(t){var e=t&&t.categorySchema;return e&&e.length?e:[]})):[]}))},r.__decorate([p.property()],e.prototype,"access",void 0),r.__decorate([p.property({type:Date})],e.prototype,"created",void 0),r.__decorate([p.property()],e.prototype,"description",void 0),r.__decorate([p.property()],e.prototype,"id",void 0),r.__decorate([p.property()],e.prototype,"isInvitationOnly",void 0),r.__decorate([p.property({type:Date})],e.prototype,"modified",void 0),r.__decorate([p.property()],e.prototype,"owner",void 0),r.__decorate([p.property()],e.prototype,"portal",void 0),r.__decorate([p.property()],e.prototype,"snippet",void 0),r.__decorate([p.property()],e.prototype,"sortField",void 0),r.__decorate([p.property()],e.prototype,"sortOrder",void 0),r.__decorate([p.property()],e.prototype,"tags",void 0),r.__decorate([p.property()],e.prototype,"thumbnail",void 0),r.__decorate([p.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],e.prototype,"thumbnailUrl",null),r.__decorate([p.property()],e.prototype,"title",void 0),r.__decorate([p.property({dependsOn:["portal.restUrl"],readOnly:!0})],e.prototype,"url",null),e=r.__decorate([p.subclass("esri.portal.PortalGroup")],e)}(n.JSONSupport)}));