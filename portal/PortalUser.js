/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/Error","../core/urlUtils","../core/uuid","./support/resourceExtension","../core/JSONSupport","./PortalFolder","./PortalGroup"],(function(t,e,r,o,n,l,p,u,s,i,a,d,c,y,h){"use strict";function _(t){return Object.freeze({__proto__:null,default:t})}var f;let m=f=function(r){function o(...t){var e;return(e=r.call(this,...t)||this).access=null,e.created=null,e.culture=null,e.description=null,e.email=null,e.fullName=null,e.modified=null,e.orgId=null,e.portal=null,e.preferredView=null,e.privileges=null,e.region=null,e.role=null,e.roleId=null,e.sourceJSON=null,e.units=null,e.username=null,e.userType=null,e}e._inheritsLoose(o,r);var n=o.prototype;return n.addItem=function(t){const e=t&&t.item,r=t&&t.data,o=t&&t.folder,n={method:"post"};e&&(n.query=e.createPostQuery(),null!=r&&("string"==typeof r?n.query.text=r:"object"==typeof r&&(n.query.text=JSON.stringify(r))));let l=this.userContentUrl;return o&&(l+="/"+("string"==typeof o?o:o.id)),this.portal._request(l+"/addItem",n).then((t=>(e.id=t.id,e.portal=this.portal,e.loaded?e.reload():e.load())))},n.deleteItem=function(t){let e=this.userContentUrl;return t.ownerFolder&&(e+="/"+t.ownerFolder),this.portal._request(e+`/items/${t.id}/delete`,{method:"post"}).then((()=>{t.id=null,t.portal=null}))},n.deleteItems=function(t){const e=this.userContentUrl+"/deleteItems",r=t.map((t=>t.id));if(r.length){const o={method:"post",query:{items:r.join(",")}};return this.portal._request(e,o).then((()=>{t.forEach((t=>{t.id=null,t.portal=null}))}))}return Promise.resolve(void 0)},n.fetchFolders=function(){const t={query:{num:1}};return this.portal._request(this.userContentUrl,t).then((t=>{let e;return e=t&&t.folders?t.folders.map((t=>{const e=y.fromJSON(t);return e.portal=this.portal,e})):[],e}))},n.fetchGroups=function(){return this.portal._request(this.url).then((t=>{let e;return e=t&&t.groups?t.groups.map((t=>{const e=h.fromJSON(t);return e.portal=this.portal,e})):[],e}))},n.fetchItems=function(e){e||(e={});let r,o=this.userContentUrl;return e.folder&&(o+="/"+e.folder.id),new Promise((function(e,r){t(["./PortalItem"],(function(t){e(_(t))}),r)})).then((({default:t})=>{r=t;const n={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"};return this.portal._request(o,{query:n})})).then((t=>{let e;return t&&t.items?(e=t.items.map((t=>{const e=r.fromJSON(t);return e.portal=this.portal,e})),Promise.all(e.map((t=>t.load()))).catch((t=>t)).then((()=>({items:e,nextStart:t.nextStart,total:t.total})))):{items:[],nextStart:-1,total:0}}))},n.fetchTags=function(){return this.portal._request(this.url+"/tags").then((t=>t.tags))},n.getThumbnailUrl=function(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e},n.queryFavorites=function(t){return this.favGroupId?(this._favGroup||(this._favGroup=new h({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new s("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))},n.toJSON=function(){throw new s("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},o.fromJSON=function(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new f;return e.sourceJSON=t,e.read(t),e},e._createClass(o,[{key:"thumbnailUrl",get:function(){const t=this.url,e=this.thumbnail;return t&&e?this.portal._normalizeUrl(`${t}/info/${e}?f=json`):null}},{key:"userContentUrl",get:function(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}},{key:"url",get:function(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}}]),o}(c.JSONSupport);return r.__decorate([p.property()],m.prototype,"access",void 0),r.__decorate([p.property({type:Date})],m.prototype,"created",void 0),r.__decorate([p.property()],m.prototype,"culture",void 0),r.__decorate([p.property()],m.prototype,"description",void 0),r.__decorate([p.property()],m.prototype,"email",void 0),r.__decorate([p.property()],m.prototype,"favGroupId",void 0),r.__decorate([p.property()],m.prototype,"fullName",void 0),r.__decorate([p.property({type:Date})],m.prototype,"modified",void 0),r.__decorate([p.property()],m.prototype,"orgId",void 0),r.__decorate([p.property()],m.prototype,"portal",void 0),r.__decorate([p.property()],m.prototype,"preferredView",void 0),r.__decorate([p.property()],m.prototype,"privileges",void 0),r.__decorate([p.property()],m.prototype,"region",void 0),r.__decorate([p.property()],m.prototype,"role",void 0),r.__decorate([p.property()],m.prototype,"roleId",void 0),r.__decorate([p.property()],m.prototype,"sourceJSON",void 0),r.__decorate([p.property()],m.prototype,"thumbnail",void 0),r.__decorate([p.property({readOnly:!0})],m.prototype,"thumbnailUrl",null),r.__decorate([p.property()],m.prototype,"units",void 0),r.__decorate([p.property({readOnly:!0})],m.prototype,"userContentUrl",null),r.__decorate([p.property({readOnly:!0})],m.prototype,"url",null),r.__decorate([p.property()],m.prototype,"username",void 0),r.__decorate([p.property()],m.prototype,"userType",void 0),m=f=r.__decorate([u.subclass("esri.portal.PortalUser")],m),m}));
