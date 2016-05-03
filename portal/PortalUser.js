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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessoireSupport/typescript","../core/Error","../core/JSONSupporter","./PortalFolder","./PortalGroup","../core/promiseUtils","../core/requireUtils","dojo/promise/all"],function(t,r,e,o,n,l,p,i,u,a,s,d){var h=function(r){function p(){r.call(this),this.created=null,this.modified=null,this.portal=null,this.thumbnailUrl=null,this.userContentUrl=null,this.url=null,this.username=null}return e(p,r),p.prototype._thumbnailUrlGetter=function(){var t=this.url,r=this.thumbnail;return t&&r?this.portal._normalizeUrl(t+"/info/"+r):null},p.prototype._userContentUrlGetter=function(){var t=this.get("portal.restUrl");return t?t+"/content/users/"+this.username:null},p.prototype._urlGetter=function(){var t=this.get("portal.restUrl");return t?t+"/community/users/"+this.username:null},p.prototype.addItem=function(t){var r=this,e=t&&t.item,o=t&&t.data,n=t&&t.folder,l={method:"post"};e&&(l.query=e.toJSON(),"string"==typeof o?l.query.text=o:o&&"function"==typeof o.toJSON&&(l.query.text=JSON.stringify(o)));var p=this.userContentUrl;return n&&(p+="/"+n.id),this.portal._request(p+"/addItem",l).then(function(t){return e.id=t.id,e.portal=r.portal,e.loaded?e._reload():e.load()})},p.prototype.deleteItem=function(t){var r=this.userContentUrl;return t.ownerFolder&&(r+="/"+t.ownerFolder),this.portal._request(r+("/items/"+t.id+"/delete"),{method:"post"}).then(function(){t.id=null,t.portal=null})},p.prototype.fetchFolders=function(){var t=this,r={query:{num:1}};return this.portal._request(this.userContentUrl,r).then(function(r){var e;return e=r&&r.folders?r.folders.map(function(r){var e=i.fromJSON(r);return e.portal=t.portal,e}):[]})},p.prototype.fetchItems=function(r){var e=this;r||(r={});var o=this.userContentUrl;r.folder&&(o+="/"+r.folder.id);var n;return s.when(t,"./PortalItem").then(function(t){n=t;var l=r.num||10,p=r.start||1;return e.portal._request(o,{query:{folders:!1,num:l,start:p}})}).then(function(t){var r;return t&&t.items?(r=t.items.map(function(t){var r=n.fromJSON(t);return r.portal=e.portal,r.load(),r}),d(r).always(function(){return{items:r,nextStart:t.nextStart,total:t.total}})):{items:[],nextStart:-1,total:0}})},p.prototype.queryFavorites=function(t){return this.favGroupId?(this._favGroup||(this._favGroup=new u({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):a.reject(new l("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))},p.prototype.toJSON=function(){throw new l("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")},o([n.shared("esri.portal.PortalUser")],p.prototype,"declaredClass",void 0),o([n.property({type:Date})],p.prototype,"created",void 0),o([n.property()],p.prototype,"favGroupId",void 0),o([n.property({type:Date})],p.prototype,"modified",void 0),o([n.property()],p.prototype,"portal",void 0),o([n.property()],p.prototype,"thumbnail",void 0),o([n.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],p.prototype,"thumbnailUrl",void 0),o([n.property({dependsOn:["portal.restUrl"],readOnly:!0})],p.prototype,"userContentUrl",void 0),o([n.property({dependsOn:["portal.restUrl"],readOnly:!0})],p.prototype,"url",void 0),o([n.property()],p.prototype,"username",void 0),p=o([n.subclass()],p)}(p);return h});