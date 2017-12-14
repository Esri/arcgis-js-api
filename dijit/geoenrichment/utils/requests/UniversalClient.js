// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/url","dojo/Deferred","dojo/request/xhr","dojo/io-query","dojo/sniff","dojo/when","esri/kernel","esri/config","esri/lang","esri/urlUtils","../UrlUtil","./BinaryData","./FileContent","./MultipartDataBuilder","./ErrorUtil"],function(e,t,n,r,o,i,s,l,a,u,d,h,p,f,c,m,v){function y(e,t){if(t)return void this.reject(t);var n=e.xhr,r=n.getResponseHeader&&n.getResponseHeader("Content-Type");e.status=n.status,e.data=new f(n.response||n.responseBody||n.responseText,r),this.resolve(e)}var g=0,w=s("safari"),j=e(null,{constructor:function(e){"string"==typeof e?this.url=e:"object"==typeof e&&t.mixin(this,e)},url:null,preventCache:null,usePost:!1,timeout:0,multipartThreshold:0,useCommonAuth:!1,useProxy:!1,allowSSL:null,send:function(e,t){return this.sendUrlRequest(this.prepareUrlRequest(e,t),"UniversalClient.send")},prepareUrlRequest:function(e,n){"string"==typeof e?e={urlSuffix:e}:e||(e={}),n||(n={});var r=e.url||this.url,o=e.urlSuffix;if(r||(r=o,o=null),!r)throw new Error("URL is missing.");var s=h.urlToObject(r);r=p.combine(s.path,o);var l=s.query||{};"object"==typeof n.content&&(l=t.mixin(l,n.content));var f=n.requireSSL;if(f!==!0&&this.allowSSL===!1&&(f=!1),f!==!1&&this.allowSSL===!0&&/^https/i.test(window.location.protocol)&&(f=!0),a.id){var v=a.id.findCredential(r);!v&&this.useCommonAuth&&(v="string"==typeof this.useCommonAuth?a.id.findCredential(this.useCommonAuth):a.id.credentials[0]),v&&(l.token||l.token===!1||(l.token=v.token),v.ssl&&f!==!1&&(f=!0))}f===!0&&(r=p.toHttpsUrl(r)),l.token===!1&&delete l.token;var y=n.handleAs||"json";"json"===y&&(l.f="json");var j=(n.sendAs||(n.usePost||this.usePost||l.token?"post":"get")).toLowerCase(),T="multipart"==j?!0:n.sendAs||n.sizeLimit?!1:null,C=0;for(var E in l){var L=l[E];L instanceof c?T=!0:("object"==typeof L&&(L=l[E]=JSON.stringify(L)),!T&&this.multipartThreshold>0&&(C+=E.length+(L?L.length:0)+2))}if(T!==!1&&this.multipartThreshold>0&&C>this.multipartThreshold&&(T=!0),n.useProxy||!h.hasSameOrigin(r,window.location.href)&&this.useProxy&&!n.hasOwnProperty("useProxy")){var b=p.getProxyUrl();b&&(r=b+"?"+r)}var k=n.hasOwnProperty("preventCache")?n.preventCache:this.preventCache;k=k||null===k&&b||w?"_ts="+(new Date).getTime()+g++:"";var U={handleAs:y},x=Number(d.isDefined(n.timeout)?n.timeout:this.timeout);x&&(U.timeout=x);var S="get"!=j||T,R=T?null:i.objectToQuery(l);if(S||(S=R.length+r.length+k.length+1>=u.defaults.io.postLength),U.method=S?"POST":"GET",U.headers={"X-Requested-With":null},U.headers["Content-Type"]="undefined"!=typeof n.contentType?n.contentType:"application/x-www-form-urlencoded; charset=utf-8",T){var q=new m;q.addVariables(l),q.build(U)}else S?U.data=R:R&&(r+="?"+R,k&&(r+="&"+k),k=null);return!R&&k&&(r+="?"+k),{url:r,options:U,sizeLimit:n.sizeLimit}},sendUrlRequest:function(e,t){var n="string"==typeof e.options.data?e.options.data.length:null;if(e.sizeLimit&&n){var i="function"==typeof e.sizeLimit?e.sizeLimit(n):n>e.sizeLimit;if(i)return(new r).reject(new Error("SIZE_LIMIT_EXCEEDED"))}t=t||"UniversalClient.sendUrlRequest";var s=e.deferred||new r,l="bin"==e.options.handleAs;l&&(e.options.handleAs="blob");var a=o(e.url,e.options,!0);l&&(a.handleResponse=y);var u=this;return a.then(function(n){n="json"==e.options.handleAs&&n&&v.parseError(n)||n,n instanceof Error?(498===n.code&&j.handleInvalidTokenError(n),s.reject(n)):s.resolve(u._makeResponse(t,n))},function(e){s.reject(v.makeError(e))}),s.promise},requestToUrl:function(e){if(e.options.headers&&e.options.headers["Content-Type"]&&0==e.options.headers["Content-Type"].indexOf("multipart/form-data"))return null;var t=e.url,n=e.options.data;if(n){if(t.length+n.length>=u.defaults.io.postLength)return null;t+="?"+n}return t},_makeResponse:function(e,t){return t}});return j.makeError=v.makeError,j.handleInvalidTokenError=function(e){},j});