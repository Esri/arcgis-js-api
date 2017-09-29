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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/url","dojo/Deferred","dojo/request/xhr","dojo/io-query","dojo/sniff","dojo/when","esri/kernel","esri/config","esri/lang","esri/urlUtils","../UrlUtil","./BinaryData","./FileContent","./MultipartDataBuilder"],function(e,t,n,r,o,s,i,l,a,u,d,h,p,f,c,m){function v(e,t){if(t)return void this.reject(t);var n=e.xhr,r=n.getResponseHeader&&n.getResponseHeader("Content-Type");e.status=n.status,e.data=new f(n.response||n.responseBody||n.responseText,r),this.resolve(e)}var y=0,g=i("safari");return e(null,{constructor:function(e){"string"==typeof e?this.url=e:"object"==typeof e&&t.mixin(this,e)},url:null,preventCache:null,usePost:!1,timeout:0,multipartThreshold:0,useCommonAuth:!1,useProxy:!1,allowSSL:null,send:function(e,t){return this.sendUrlRequest(this.prepareUrlRequest(e,t),"UniversalClient.send")},prepareUrlRequest:function(e,n){"string"==typeof e?e={urlSuffix:e}:e||(e={}),n||(n={});var r=e.url||this.url,o=e.urlSuffix;if(r||(r=o,o=null),!r)throw new Error("URL is missing.");var i=h.urlToObject(r);r=p.combine(i.path,o);var l=i.query||{};"object"==typeof n.content&&(l=t.mixin(l,n.content));var f=n.requireSSL;if(f!==!0&&this.allowSSL===!1&&(f=!1),f!==!1&&this.allowSSL===!0&&/^https/i.test(window.location.protocol)&&(f=!0),a.id){var v=a.id.findCredential(r);!v&&this.useCommonAuth&&(v="string"==typeof this.useCommonAuth?a.id.findCredential(this.useCommonAuth):a.id.credentials[0]),v&&(l.token||l.token===!1||(l.token=v.token),v.ssl&&f!==!1&&(f=!0))}f===!0&&(r=p.toHttpsUrl(r)),l.token===!1&&delete l.token;var j=n.handleAs||"json";"json"===j&&(l.f="json");var w=(n.sendAs||(n.usePost||this.usePost||l.token?"post":"get")).toLowerCase(),T="multipart"==w?!0:n.sendAs?!1:null,C=0;for(var b in l){var k=l[b];k instanceof c?T=!0:("object"==typeof k&&(k=l[b]=JSON.stringify(k)),!T&&this.multipartThreshold>0&&(C+=b.length+(k?k.length:0)+2))}if(T!==!1&&this.multipartThreshold>0&&C>this.multipartThreshold&&(T=!0),n.useProxy||!h.hasSameOrigin(r,window.location.href)&&this.useProxy&&!n.hasOwnProperty("useProxy")){var x=p.getProxyUrl();x&&(r=x+"?"+r)}var R=n.hasOwnProperty("preventCache")?n.preventCache:this.preventCache;R=R||null===R&&x||g?"_ts="+(new Date).getTime()+y++:"";var S={handleAs:j},U=Number(d.isDefined(n.timeout)?n.timeout:this.timeout);U&&(S.timeout=U);var _="get"!=w||T,q=T?null:s.objectToQuery(l);if(_||(_=q.length+r.length+R.length+1>=u.defaults.io.postLength),S.method=_?"POST":"GET",S.headers={"X-Requested-With":null},S.headers["Content-Type"]="undefined"!=typeof n.contentType?n.contentType:"application/x-www-form-urlencoded; charset=utf-8",T){var A=new m;A.addVariables(l),A.build(S)}else _?S.data=q:q&&(r+="?"+q,R&&(r+="&"+R),R=null);return!q&&R&&(r+="?"+R),{url:r,options:S}},sendUrlRequest:function(e,t){t=t||"UniversalClient.sendUrlRequest";var n=e.deferred||new r,s="bin"==e.options.handleAs;s&&(e.options.handleAs="blob");var i=o(e.url,e.options,!0);s&&(i.handleResponse=v);var l=this;return i.then(function(r){r=l._handleResponse(r,e.options),r instanceof Error?(498===r.code&&l._handleInvalidTokenError(r),n.reject(r)):n.resolve(l._makeResponse(t.toString(),r))},function(e){n.reject(l._makeError(e))}),n.promise},requestToUrl:function(e){if(e.options.headers&&e.options.headers["Content-Type"]&&0==e.options.headers["Content-Type"].indexOf("multipart/form-data"))return null;var t=e.url,n=e.options.data;if(n){if(t.length+n.length>=u.defaults.io.postLength)return null;t+="?"+n}return t},_handleResponse:function(e,t){return"json"==t.handleAs&&e&&this._parseError(e)||e},_makeResponse:function(e,t){return t},_makeError:function(e){return e},_parseError:function(e){return e},_handleInvalidTokenError:function(e){}})});