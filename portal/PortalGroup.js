/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","./PortalQueryParams"],(function(t,e,r,o,n,p,u,l,a,s){"use strict";let i=function(e){function o(t){var r;return(r=e.call(this,t)||this).access=null,r.created=null,r.description=null,r.id=null,r.isInvitationOnly=!1,r.modified=null,r.owner=null,r.portal=null,r.snippet=null,r.sortField=null,r.sortOrder=null,r.tags=null,r.title=null,r}t._inheritsLoose(o,e);var n=o.prototype;return n.fetchCategorySchema=function(t){return this.portal._request(this.url+"/categorySchema",t).then((e=>{const r=e.categorySchema||[];return r.some((t=>"contentCategorySetsGroupQuery.LivingAtlas"===t.source))?this._fetchCategorySchemaSet("LivingAtlas",t):r}))},n.fetchMembers=function(t){return this.portal._request(this.url+"/users",t)},n.getThumbnailUrl=function(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e},n.toJSON=function(){throw new r("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},n.queryItems=function(t,e){let r=u.ensureType(s,t);return parseFloat(this.portal.currentVersion)>5?(r=r||new s,this.portal._queryPortal(`/content/groups/${this.id}/search`,r,"PortalItem",e)):(r=r?r.clone():new s,r.query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,e))},n._fetchCategorySchemaSet=function(t,e){return this.portal._fetchSelf(this.portal.authMode,!0,e).then((t=>{const o=t.contentCategorySetsGroupQuery;if(o){const t=new s;return t.disableExtraQuery=!0,t.num=1,t.query=o,this.portal.queryGroups(t,e)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((o=>{if(o.total){const r=o.results[0],n=new s;return n.num=1,n.query=`typekeywords:"${t}"`,r.queryItems(n,e)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((t=>{if(t.total){return t.results[0].fetchData("json",e).then((t=>{const e=t&&t.categorySchema;return e&&e.length?e:[]}))}return[]}))},t._createClass(o,[{key:"thumbnailUrl",get:function(){const t=this.url,e=this.thumbnail;return t&&e?this.portal._normalizeUrl(`${t}/info/${e}?f=json`):null}},{key:"url",get:function(){const t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null}}]),o}(o.JSONSupport);return e.__decorate([n.property()],i.prototype,"access",void 0),e.__decorate([n.property({type:Date})],i.prototype,"created",void 0),e.__decorate([n.property()],i.prototype,"description",void 0),e.__decorate([n.property()],i.prototype,"id",void 0),e.__decorate([n.property()],i.prototype,"isInvitationOnly",void 0),e.__decorate([n.property({type:Date})],i.prototype,"modified",void 0),e.__decorate([n.property()],i.prototype,"owner",void 0),e.__decorate([n.property()],i.prototype,"portal",void 0),e.__decorate([n.property()],i.prototype,"snippet",void 0),e.__decorate([n.property()],i.prototype,"sortField",void 0),e.__decorate([n.property()],i.prototype,"sortOrder",void 0),e.__decorate([n.property()],i.prototype,"tags",void 0),e.__decorate([n.property()],i.prototype,"thumbnail",void 0),e.__decorate([n.property({readOnly:!0})],i.prototype,"thumbnailUrl",null),e.__decorate([n.property()],i.prototype,"title",void 0),e.__decorate([n.property({readOnly:!0})],i.prototype,"url",null),i=e.__decorate([a.subclass("esri.portal.PortalGroup")],i),i}));
