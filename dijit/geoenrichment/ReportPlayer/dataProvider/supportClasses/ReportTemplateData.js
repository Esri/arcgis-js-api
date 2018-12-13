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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/request/xhr","dojo/promise/all","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/PortalUtil"],function(e,t,r,n,o,i,s,u,l){return e(null,{id:null,_portal:null,_baseUrl:null,constructor:function(e,t){this.id=e.id,this._portal=t,this._baseUrl=this._portal.url+"/sharing/rest"},getFiles:function(){var e=this;return this._getResources().then(function(t){var o=[];return t.map(function(t){var n=t.resource;if("thumbnail.png"!==n){var i=e._baseUrl+"/"+e._contentItemPath(e.id+"/resources/"+n),l=s.getProxyRule(i),a=l&&l.proxyUrl?l.proxyUrl+"?"+i:i;o.push(r(a,{method:"POST",handleAs:"arraybuffer",data:"token="+e._getToken(),headers:{"X-Requested-With":null,"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"}}).then(function(e){var t=!/\.xml$|\.txt$|\.json$/i.test(n);return{name:n,data:t?u.base64FromByteSource(e):decodeURIComponent(escape(u.binaryStringFromByteSource(e)))}}))}}),n(o)})},_contentItemPath:function(e){return"content/items/"+e},_getToken:function(){return o.id.credentials[0].token},_getResources:function(){var e=this;return l.query(function(r){return i({url:e._baseUrl+"/"+e._contentItemPath(e.id+"/resources"),content:t.mixin({f:"json",token:e._getToken()},r),handleAs:"json"},{usePost:!0})},null,"resources").then(function(e){return e.resources})},getPortalUrl:function(e){return e?/[^:]+:\/\/(.+)$/i.exec(this._portal.url)[1]:this._portal.url}})});