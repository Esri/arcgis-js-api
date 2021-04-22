// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/kernel","esri/request","./requests/EveryRequest","./requests/UniversalClient","../ReportPlayer/dataProvider/commands/mapToImage/MapToURLUtil","./CacheUtil","./ProjectionUtil","./UrlUtil"],(function(e,r,t,n,s,o,u,i,a){"use strict";var l={query:function(r,t,s,o){s=s||"results",o=o||100;var u="number"==typeof(t=t||{}).num?t.num:-1,i=t.num=u<0||t.num>o?o:t.num;return t.start=t.start||1,r(t).then((function(o){var a=o[s],l=o.total-t.start+1;if(u>=0&&l>u&&(l=u),(l-=i)<=0)return o;t.num=i;for(var c=[];l>0;)t.start+=i,c.push(r.bind(null,e.mixin({},t))),l-=i;return n(c,{stopOnError:!0}).then((function(e){return e.forEach((function(e){Array.prototype.push.apply(a,e[s])})),o}))}))},queryCommon:function(n,s){return l.query((function(o){var u=r.id.findCredential(n)||r.id.credentials[0];return t({url:n,content:e.mixin({f:"json",token:u?u.token:void 0},s,o),handleAs:"json"},{usePost:!0})})).then((function(e){return e.results}))},getPortalSelf:function(e){return s.requestPublicFirst(a.combine(e,"sharing/rest/portals/self"),{})},getDefaultBasemaps:function(e){var r=u.get("PortalUtil.basemaps");return r[e]||(r[e]=l.getPortalSelf(e).then((function(r){return s.request(a.combine(e,"sharing/rest/community/groups"),{content:{q:r.useVectorBasemaps?r.vectorBasemapGalleryGroupQuery:r.basemapGalleryGroupQuery,f:"json"},handleAs:"json"}).then((function(r){var t=r.results[0];return t?s.request(a.combine(e,"sharing/rest/search"),{content:{q:"group:"+t.id+' AND type:"web map"',num:100,f:"json"},handleAs:"json"}).then((function(e){return e.results})):null}))}))),r[e]},tryConfigureServicesFromAGOLPublic:function(){return l.getPortalSelf("https://www.arcgis.com").then((function(e){var r=e&&e.helperServices;r&&(r.geometry&&i.setGeometryServiceUrl(r.geometry.url),r.printTask&&o.setPrintMapTaskUrl(r.printTask.url))})).otherwise((function(e){console.log(e)}))}};return l}));