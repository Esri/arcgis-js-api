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

define(["require","exports","tslib","../../maybe","../../multiOriginJSONSupportUtils","../../urlUtils","../../uuid","../metadata","../PropertyOrigin","./property","../../../portal/support/resourceUtils","../../../support/persistableUrlUtils","@dojo/framework/shim/Promise"],(function(e,t,r,i,n,o,s,u,a,l,c,p){"use strict";function f(t,n,u,a,l,p,f,v){var g=s.generateUUID(),h=m(u,a,f),y=o.join(i.get(v,"prefix"),g),w=y+"."+c.resourceContentExtension(h),S=f.portalItem.resourceFromPath(w);o.isBlobProtocol(a)&&f.resources.pendingOperations.push(function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(t,r){e(["../../../request"],t,r)}))];case 1:return[4,r.sent()(t,{responseType:"blob"})];case 2:return[2,r.sent().data]}}))}))}(a).then((function(e){S.path=y+"."+c.resourceContentExtension(e),l[p]=S.itemRelativeUrl})).catch((function(){}))),d(t,n,S,h,f.resources.toAdd),l[p]=S.itemRelativeUrl}function d(e,t,r,i,n){n.push({resource:r,content:i,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function m(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}Object.defineProperty(t,"__esModule",{value:!0}),t.persistable=void 0,t.persistable=function(e){var t=i.isSome(e)&&e.origins?e.origins:[void 0];return function(s,v){for(var g=function(e,t,s){if(i.isSome(e)&&"resource"===e.type)return function(e,t,s){var l=u.getOwnPropertyMetadata(t,s);return{type:String,read:function(e,t,r){var i=p.read(e,t,r);return l.type===String?i:"function"==typeof l.type?new l.type({url:i}):void 0},write:{writer:function(t,u,v,g){if(!g||!g.resources)return"string"==typeof t?void(u[v]=p.toJSON(t,g)):void(u[v]=t.write({},g));var h=function(e){if(i.isNone(e))return null;if("string"==typeof e)return e;return e.url}(t),y=h?p.toJSON(h,r.__assign(r.__assign({},g),{verifyItemRelativeUrls:g&&g.verifyItemRelativeUrls?{writtenUrls:g.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null})):null,w=l.type!==String&&(!n.isMultiOriginJSONMixin(this)||g&&g.origin&&this.originIdOf(s)>a.nameToId(g.origin));g&&g.portalItem&&i.isSome(y)&&!o.isAbsolute(y)?w?function(e,t,r,i,n,s,u,a){var l=u.portalItem.resourceFromPath(i),p=m(r,i,u),v=c.resourceContentExtension(p),g=o.getPathExtension(l.path);if(v!==g)return void f(e,t,r,i,n,s,u,a);d(e,t,l,p,u.resources.toUpdate),n[s]=i}(this,s,t,y,u,v,g,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(y,u,v,g):g&&g.portalItem&&(i.isNone(y)||i.isSome(p.itemIdFromResourceUrl(y))||o.isBlobProtocol(y)||w)?f(this,s,t,y,u,v,g,e):u[v]=y}}}}(e,t,s);switch(i.isSome(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":var l=p.read,v=p.write;return{read:l,write:v}}}(e,s,v),h=0,y=t;h<y.length;h++){var w=y[h],S=l.propertyJSONMeta(s,w,v);for(var U in g)S[U]=g[U]}}}}));