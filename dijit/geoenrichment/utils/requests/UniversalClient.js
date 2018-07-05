// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/url","dojo/Deferred","dojo/request/xhr","dojo/io-query","dojo/sniff","dojo/when","esri/kernel","esri/config","esri/lang","esri/urlUtils","../UrlUtil","./BinaryData","./FileContent","./MultipartDataBuilder","./ErrorUtil"],function(e,t,r,n,o,i,s,l,a,u,d,h,p,f,c,m,v){function y(e,t){if(t)return void this.reject(t);var r=e.xhr,n=r.getResponseHeader&&r.getResponseHeader("Content-Type");e.status=r.status,e.data=new f(r.response||r.responseBody||r.responseText,n),this.resolve(e)}var g=0,w=s("safari"),j=e(null,{constructor:function(e){"string"==typeof e?this.url=e:"object"==typeof e&&t.mixin(this,e)},url:null,preventCache:null,usePost:!1,timeout:0,multipartThreshold:0,useCommonAuth:!1,useProxy:!1,allowSSL:null,send:function(e,t){return this.sendUrlRequest(this.prepareUrlRequest(e,t),"UniversalClient.send")},prepareUrlRequest:function(e,r){"string"==typeof e?e={urlSuffix:e}:e||(e={}),r||(r={});var n=e.url||this.url,o=e.urlSuffix;if(n||(n=o,o=null),!n)throw new Error("URL is missing.");var s=h.urlToObject(n);n=p.combine(s.path,o);var l=s.query||{};"object"==typeof r.content&&(l=t.mixin(l,r.content));var f=r.requireSSL;if(!0!==f&&!1===this.allowSSL&&(f=!1),!1!==f&&!0===this.allowSSL&&/^https/i.test(window.location.protocol)&&(f=!0),a.id){var v=a.id.findCredential(n);!v&&this.useCommonAuth&&(v="string"==typeof this.useCommonAuth?a.id.findCredential(this.useCommonAuth):a.id.credentials[0]),v&&(l.token||!1===l.token||(l.token=v.token),v.ssl&&!1!==f&&(f=!0))}!0===f&&(n=p.toHttpsUrl(n)),!1===l.token&&delete l.token;var y=r.handleAs||"json";"json"===y&&(l.f="json");var j=(r.sendAs||(r.usePost||this.usePost||l.token?"post":"get")).toLowerCase(),C="multipart"==j||!r.sendAs&&!r.sizeLimit&&null,T=0;for(var x in l){var E=l[x];E instanceof c?C=!0:("object"==typeof E&&(E=l[x]=JSON.stringify(E)),!C&&this.multipartThreshold>0&&(T+=x.length+(E?E.length:0)+2))}if(!1!==C&&this.multipartThreshold>0&&T>this.multipartThreshold&&(C=!0),r.useProxy||!h.hasSameOrigin(n,window.location.href)&&this.useProxy&&!r.hasOwnProperty("useProxy")){var L=p.getProxyUrl();L&&(n=L+"?"+n)}else h.getProxyRule(n)&&(n=h.getProxyRule(n).proxyUrl+"?"+n);var U=r.hasOwnProperty("preventCache")?r.preventCache:this.preventCache;U=U||null===U&&L||w?"_ts="+(new Date).getTime()+g++:"";var b={handleAs:y},k=Number(d.isDefined(r.timeout)?r.timeout:this.timeout);k&&(b.timeout=k);var R="get"!=j||C,S=C?null:i.objectToQuery(l);if(R||(R=S.length+n.length+U.length+1>=u.defaults.io.postLength),b.method=R?"POST":"GET",b.headers={"X-Requested-With":null},b.headers["Content-Type"]=void 0!==r.contentType?r.contentType:"application/x-www-form-urlencoded; charset=utf-8",C){var P=new m;P.addVariables(l),P.build(b)}else R?b.data=S:S&&(n+="?"+S,U&&(n+="&"+U),U=null);return!S&&U&&(n+="?"+U),{url:n,options:b,sizeLimit:r.sizeLimit}},sendUrlRequest:function(e,t){var r="string"==typeof e.options.data?e.options.data.length:null;if(e.sizeLimit&&r){if("function"==typeof e.sizeLimit?e.sizeLimit(r):r>e.sizeLimit)return(new n).reject(new Error("SIZE_LIMIT_EXCEEDED"))}t=t||"UniversalClient.sendUrlRequest";var i=e.deferred||new n,s="bin"==e.options.handleAs;s&&(e.options.handleAs="blob");var a=o(e.url,e.options,!0);s&&(a.handleResponse=y);var u=this;return a.then(function(r){if((r="json"==e.options.handleAs&&r&&v.parseError(r)||r)instanceof Error){if(!0===u.useCommonAuth&&498===r.code)var n=j.handleInvalidTokenError(r);l(n).always(function(){i.reject(r)})}else i.resolve(u._makeResponse(t,r))},function(e){i.reject(v.makeError(e))}),i.promise},requestToUrl:function(e){if(e.options.headers&&e.options.headers["Content-Type"]&&0==e.options.headers["Content-Type"].indexOf("multipart/form-data"))return null;var t=e.url,r=e.options.data;if(r){if(t.length+r.length>=u.defaults.io.postLength)return null;t+="?"+r}return t},_makeResponse:function(e,t){return t}});return j.makeError=v.makeError,j.handleInvalidTokenError=function(e){},j});