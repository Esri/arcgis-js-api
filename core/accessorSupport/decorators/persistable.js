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

define(["require","exports","tslib","../../maybe","../../multiOriginJSONSupportUtils","../../urlUtils","../../uuid","../metadata","../PropertyOrigin","./property","../../../portal/support/resourceUtils","../../../support/persistableUrlUtils","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,o,s,u,a,l,c,p){function f(r,n,u,a,l,p,f,v){var h=s.generateUUID(),g=d(u,a,f),y=o.join(i.get(v,"prefix"),h),w=y+"."+c.resourceContentExtension(g),U=f.portalItem.resourceFromPath(w);o.isBlobProtocol(a)&&f.resources.pendingOperations.push(function(r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(r,t){e(["../../../request"],r,t)}))];case 1:return[4,t.sent()(r,{responseType:"blob"})];case 2:return[2,t.sent().data]}}))}))}(a).then((function(e){U.path=y+"."+c.resourceContentExtension(e),l[p]=U.itemRelativeUrl})).catch((function(){}))),m(r,n,U,g,f.resources.toAdd),l[p]=U.itemRelativeUrl}function m(e,r,t,i,n){n.push({resource:t,content:i,finish:function(t){!function(e,r,t){"string"==typeof e[r]?e[r]=t.url:e[r].url=t.url}(e,r,t)}})}function d(e,r,t){return"string"==typeof e?{url:r}:new Blob([JSON.stringify(e.toJSON(t))],{type:"application/json"})}Object.defineProperty(r,"__esModule",{value:!0}),r.persistable=function(e){var r=i.isSome(e)&&e.origins?e.origins:[void 0];return function(s,v){for(var h=function(e,r,s){if(i.isSome(e)&&"resource"===e.type)return function(e,r,s){var l=u.getOwnPropertyMetadata(r,s);return{read:function(e,r,t){var i=p.read(e,r,t);return l.type===String?i:"function"==typeof l.type?new l.type({url:i}):void 0},write:{writer:function(r,u,v,h){if(!h||!h.resources)return"string"==typeof r?void(u[v]=p.toJSON(r,h)):void(u[v]=r.write({},h));var g=function(e){if(i.isNone(e))return null;if("string"==typeof e)return e;return e.url}(r),y=g?p.toJSON(g,t.__assign(t.__assign({},h),{verifyItemRelativeUrls:h&&h.verifyItemRelativeUrls?{writtenUrls:h.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null})):null,w=l.type!==String&&(!n.isMultiOriginJSONMixin(this)||h&&h.origin&&this.originIdOf(s)>a.nameToId(h.origin));h&&h.portalItem&&i.isSome(y)&&!o.isAbsolute(y)?w?function(e,r,t,i,n,s,u,a){var l=u.portalItem.resourceFromPath(i),p=d(t,i,u),v=c.resourceContentExtension(p),h=o.getPathExtension(l.path);if(v!==h)return void f(e,r,t,i,n,s,u,a);m(e,r,l,p,u.resources.toUpdate),n[s]=i}(this,s,r,y,u,v,h,e):function(e,r,t,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),r[t]=e}(y,u,v,h):h&&h.portalItem&&(i.isNone(y)||i.isSome(p.itemIdFromResourceUrl(y))||o.isBlobProtocol(y)||w)?f(this,s,r,y,u,v,h,e):u[v]=y}}}}(e,r,s);switch(i.isSome(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":var l=p.read,v=p.write;return{read:l,write:v}}}(e,s,v),g=0,y=r;g<y.length;g++){var w=y[g],U=l.propertyJSONMeta(s,w,v);for(var S in h)U[S]=h[S]}}}}));