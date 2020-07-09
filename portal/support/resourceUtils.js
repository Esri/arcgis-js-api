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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/Error","../../core/maybe","../../core/urlUtils","../../core/urlUtils"],(function(e,t,r,n,a,o,i,s){function u(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){var t=function(e){var t=s.getPathExtension(e);if(o.isNone(t))return[e,""];return[e.slice(0,e.length-t.length-1),"."+t]}(e),r=t[0],n=t[1],a=u(r);return[a[0],a[1],n]}function l(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return e instanceof Blob?[2,e]:[4,n(e.url,{responseType:"blob"})];case 1:return[2,t.sent().data]}}))}))}function p(e){return e instanceof Blob?e.type:(t=e.url,r=s.getPathExtension(t),d[r]||h);var t,r}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchResources=function(e,t,n){return void 0===t&&(t={}),r.__awaiter(this,void 0,void 0,(function(){var a,s,u,c,l,p,d,v,f,h;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,e.load(n)];case 1:return r.sent(),a=i.join(e.itemUrl,"resources"),s=t.start,u=void 0===s?1:s,c=t.num,l=void 0===c?10:c,p=t.sortOrder,d=void 0===p?"asc":p,v=t.sortField,f={query:{start:u,num:l,sortOrder:d,sortField:void 0===v?"created":v},signal:o.get(n,"signal")},[4,e.portal._request(a,f)];case 2:return[2,{total:(h=r.sent()).total,nextStart:h.nextStart,resources:h.resources.map((function(t){var r=t.created,n=t.size,a=t.resource;return{created:new Date(r),size:n,resource:e.resourceFromPath(a)}}))}]}}))}))},t.addOrUpdateResource=function(e,t,n,s){return r.__awaiter(this,void 0,void 0,(function(){var c,p,d,v,f,h;return r.__generator(this,(function(r){switch(r.label){case 0:if(!e.hasPath())throw new a("portal-item-resource-"+t+":invalid-path","Resource does not have a valid path");return[4,e.portalItem.load(s)];case 1:return r.sent(),c=i.join(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),p=u(e.path),d=p[0],v=p[1],[4,l(n)];case 2:return f=r.sent(),h=new FormData,d&&"."!==d&&h.append("resourcesPrefix",d),h.append("fileName",v),h.append("file",f,v),h.append("f","json"),o.isSome(s)&&s.access&&h.append("access",s.access),[4,e.portalItem.portal._request(c,{method:"post",body:h,signal:o.get(s,"signal")})];case 3:return r.sent(),[2,e]}}))}))},t.removeResource=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){var s;return r.__generator(this,(function(r){switch(r.label){case 0:if(!t.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");return[4,e.load(n)];case 1:return r.sent(),s=i.join(e.userItemUrl,"removeResources"),[4,e.portal._request(s,{method:"post",query:{resource:t.path},signal:o.get(n,"signal")})];case 2:return r.sent(),t.portalItem=null,[2]}}))}))},t.removeAllResources=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,e.load(t)];case 1:return r.sent(),n=i.join(e.userItemUrl,"removeResources"),[2,e.portal._request(n,{method:"post",query:{deleteAll:!0},signal:o.get(t,"signal")})]}}))}))},t.splitPrefixFileNameAndExtension=c,t.contentToBlob=l,t.getSiblingOfSameType=function(e,t){if(!e.hasPath())return null;var r=c(e.path),n=r[0],a=r[2];return e.portalItem.resourceFromPath(i.join(n,t+a))},t.resourceContentType=p,t.resourceContentExtension=function(e){return v[p(e)]||m};var d={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"},v={};for(var f in d)v[d[f]]=f;var h="text/plain",m=v[h]}));