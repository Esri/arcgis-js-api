// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./polyfill/tsSupport/assign","./polyfill/tsSupport/spreadarray","../request","./parser","./featureset/support/RecentlyUsedCache","./executionError"],(function(e,r,t,o,i,l,n,u,s,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ArcadeModuleResolver=void 0;var c=function(){function e(e){this.portalUri=e}return e.prototype.extractRegexGroups=function(e,r){for(var t=[],o=0,i=r;o<i.length;o++){t[i[o]]=""}for(var l=0,n=1;n<e.length;n++){var u=e[n];if(null!=u&&(t[r[l]]=u,++l>=r.length))break}return t},e.prototype.normalizeModuleUri=function(r){if(r.startsWith("portal+")){for(var t=r.substring(7),o="",i=t,l=!1,n=0,u=[/(.+)\/home\/item\.html\?id\=(.+)$/gi,/(.+)\/sharing\/rest\/content\/items\/(.+)$/gi,/(.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(.+)$/gi];n<u.length;n++){var s=u[n].exec(t);if(null!==s){i=(c=this.extractRegexGroups(s,["portalurl","itemid"])).itemid,o=c.portalurl,l=!0;break}}if(!1===l){if(!/^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi.test(t))throw new a.ModuleError(a.ModuleErrorCodes.UnsupportedUriProtocol,{uri:r});i=t,o=this.portalUri}i.includes("/")&&(i=i.split("/")[0]),i.includes("?")&&(i=i.split("?")[0]);var c,d="current",p=/(.*)@([0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi.exec(i);if(null!==p)i=(c=this.extractRegexGroups(p,["itemid","versionstring"])).itemid,d=c.versionstring;var h=(o=(t||o).replace(/\/+$/,"")).indexOf("/sharing");return{url:t=(o=-1!==h?o+"/":o+"/sharing/rest/")+"content/items/"+i+"/resources/"+d+".arc",scheme:"portal",uri:"PO:"+t}}if(r.startsWith("mock")){if("mock"===r){return{url:"",scheme:"mock",data:'\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ',uri:"mock"}}var f=r.replace("mock:","");if(void 0!==e.mocks[f])return{url:"",scheme:"mock",data:e.mocks[f],uri:r}}throw new a.ModuleError(a.ModuleErrorCodes.UnrecognisedUri,{uri:r})},e.prototype.fetchModule=function(r){return t(this,void 0,void 0,(function(){var t,i,l,n;return o(this,(function(o){switch(o.label){case 0:if(t=e.cachedModules.getFromCache(r.uri))return[2,t];i=this.fetchSource(r),e.cachedModules.addToCache(r.uri,i),l=null,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,i];case 2:return l=o.sent(),[3,4];case 3:throw n=o.sent(),e.cachedModules.removeFromCache(r.uri),n;case 4:return[2,l]}}))}))},e.prototype.fetchSource=function(e){var r;return t(this,void 0,void 0,(function(){var t;return o(this,(function(o){switch(o.label){case 0:return"portal"!==e.scheme?[3,2]:[4,n({url:e.url,handleAs:"text",content:{},callbackParamName:"callback"})];case 1:if(t=o.sent())return[2,u.parseScript(t,[])];o.label=2;case 2:if("mock"===e.scheme)return[2,u.parseScript(null!==(r=e.data)&&void 0!==r?r:"",[])];throw new a.ModuleError(a.ModuleErrorCodes.UnsupportedUriProtocol)}}))}))},e.create=function(r){return new e(r)},e.getDefault=function(){var r;return null!==(r=this._default)&&void 0!==r?r:e._default=e._moduleResolverFactory()},Object.defineProperty(e,"moduleResolverClass",{set:function(e){this._moduleResolverFactory=e,this._default=null},enumerable:!1,configurable:!0}),e.mocks={},e.cachedModules=new s(30),e._default=null,e._moduleResolverFactory=function(){return new e("https://www.arcgis.com")},e}();r.ArcadeModuleResolver=c}));