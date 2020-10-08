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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/request/xhr","esri/dijit/geoenrichment/promise/all","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/FileContent","esri/dijit/geoenrichment/utils/requests/UniversalClient"],(function(e,t,r,n,i,s,o,u,l,a,c,h){function d(e,t){var n=e.substr(e.lastIndexOf("/")+1),i=o.getProxyRule(e),s=i&&i.proxyUrl?i.proxyUrl+"?"+e:e;return r(s,{method:"POST",handleAs:"arraybuffer",data:"token="+t,headers:{"X-Requested-With":null,"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"}}).then((function(e){var t=!/\.xml$|\.txt$|\.json$/i.test(n);return{name:n,data:t?u.base64FromByteSource(e):decodeURIComponent(escape(u.binaryStringFromByteSource(e)))}}))}var f=e(null,{id:null,_portalUrl:null,_baseUrl:null,constructor:function(e,t){this.id=e.id,this._portalUrl=t,this._baseUrl=a.combine(this._portalUrl,"sharing/rest")},getFiles:function(){var e=this;return this._getResources().then((function(t){var r=[];return t.map((function(t){var n=t.resource;"thumbnail.png"!==n&&r.push(e.getFileByName(n))})),n(r)}))},getFileByName:function(e){return d(this.getItemResourceUrl(e,!1),this._getToken())},getItemResourceUrl:function(e,t){var r=this._baseUrl+"/"+this._contentItemPath(this.id+"/resources/"+e);return t?a.addQueryPart(r,"token="+this._getToken()):r},updateFile:function(e,t){var r=this;return h.request({url:this._baseUrl,urlSuffix:"content/items/"+this.id}).then((function(n){var i=c.fromFileData(e,t);return h.request({url:r._baseUrl,urlSuffix:"content/users/"+n.owner+"/"+n.ownerFolder+"/items/"+r.id+"/updateResources"},{content:{file:i,filename:e}})}))},_contentItemPath:function(e){return"content/items/"+e},_getToken:function(){var e=i.id.findCredential(this._portalUrl)||i.id.credentials[0];return e&&e.token},_getResources:function(){var e=this;return l.query((function(r){return s({url:e._baseUrl+"/"+e._contentItemPath(e.id+"/resources"),content:t.mixin({f:"json",token:e._getToken()},r),handleAs:"json"},{usePost:!0})}),null,"resources").then((function(e){return e.resources}))},getPortalUrl:function(e){return e?/[^:]+:\/\/(.+)$/i.exec(this._portalUrl)[1]:this._portalUrl}});return f.loadResource=d,f}));