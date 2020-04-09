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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./PortalQueryParams"],(function(t,r,e,o,n,p,u,l,i,a){return function(t){function r(r){var e=t.call(this,r)||this;return e.access=null,e.created=null,e.description=null,e.id=null,e.isInvitationOnly=!1,e.modified=null,e.owner=null,e.portal=null,e.snippet=null,e.sortField=null,e.sortOrder=null,e.tags=null,e.title=null,e}return e(r,t),Object.defineProperty(r.prototype,"thumbnailUrl",{get:function(){var t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(t+"/info/"+r+"?f=json"):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"url",{get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0}),r.prototype.fetchCategorySchema=function(t){var r=this;return this.portal._request(this.url+"/categorySchema",t).then((function(e){var o=e.categorySchema||[];return o.some((function(t){return"contentCategorySetsGroupQuery.LivingAtlas"===t.source}))?r._fetchCategorySchemaSet("LivingAtlas",t):o}))},r.prototype.fetchMembers=function(t){return this.portal._request(this.url+"/users",t)},r.prototype.getThumbnailUrl=function(t){var r=this.thumbnailUrl;return r&&t&&(r+="&w="+t),r},r.prototype.toJSON=function(){throw new p("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},r.prototype.queryItems=function(t,r){var e=i.ensureType(a,t);return parseFloat(this.portal.currentVersion)>5?(e=e||new a,this.portal._queryPortal("/content/groups/"+this.id+"/search",e,"PortalItem",r)):((e=e?e.clone():new a).query="group:"+this.id+(e.query?" "+e.query:""),this.portal.queryItems(e,r))},r.prototype._fetchCategorySchemaSet=function(t,r){var e=this;return this.portal._fetchSelf(this.portal.authMode,!0,r).then((function(t){var o=t.contentCategorySetsGroupQuery;if(o){var n=new a;return n.disableExtraQuery=!0,n.num=1,n.query=o,e.portal.queryGroups(n,r)}throw new p("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((function(e){if(e.total){var o=e.results[0],n=new a;return n.num=1,n.query='typekeywords:"'+t+'"',o.queryItems(n,r)}throw new p("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((function(t){return t.total?t.results[0].fetchData("json",r).then((function(t){var r=t&&t.categorySchema;return r&&r.length?r:[]})):[]}))},o([l.property()],r.prototype,"access",void 0),o([l.property({type:Date})],r.prototype,"created",void 0),o([l.property()],r.prototype,"description",void 0),o([l.property()],r.prototype,"id",void 0),o([l.property()],r.prototype,"isInvitationOnly",void 0),o([l.property({type:Date})],r.prototype,"modified",void 0),o([l.property()],r.prototype,"owner",void 0),o([l.property()],r.prototype,"portal",void 0),o([l.property()],r.prototype,"snippet",void 0),o([l.property()],r.prototype,"sortField",void 0),o([l.property()],r.prototype,"sortOrder",void 0),o([l.property()],r.prototype,"tags",void 0),o([l.property()],r.prototype,"thumbnail",void 0),o([l.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],r.prototype,"thumbnailUrl",null),o([l.property()],r.prototype,"title",void 0),o([l.property({dependsOn:["portal.restUrl"],readOnly:!0})],r.prototype,"url",null),r=o([l.subclass("esri.portal.PortalGroup")],r)}(l.declared(u.JSONSupport))}));