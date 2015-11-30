// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","../kernel","dojo/uacss","dojo/Deferred","dojo/promise/all","dojo/json","dojo/Evented","dojo/Stateful","../request","./utils"],function(e,r,t,s,i,n,o,a,h,p,l){var c=e([a,h],{constructor:function(e){this.defaults={appid:"",hitsPerInterval:100,intervalSeconds:60,referrers:[],proxies:[]};var t=r.mixin({},this.defaults,e);this.set(t),this._init()},createProxies:function(e){var t=new i;return this._registerApp(this._appItem).then(r.hitch(this,function(){for(var s={referrers:this.referrers,hitsPerInterval:this.hitsPerInterval,intervalSeconds:this.intervalSeconds},i=[],n=0;n<e.length;n++){var a=e[n];i.push({sourceUrl:a.sourceUrl})}var h=this._sharingBaseUrl+"content/users/"+this._owner+"/";this._folderId&&(h+=this._folderId+"/"),h+="items/"+this.appid+"/createProxies",p({url:h,content:{proxies:o.stringify(i),serviceProxyParams:o.stringify(s),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){this.set("proxies",e.appProxies||[]),t.resolve(e.appProxies)}),t.reject)}),t.reject),t.promise},deleteProxies:function(e){var t=new i;e||(e=[]);for(var s=[],o=0;o<e.length;o++)s.push(this._deleteProxy(e[o]));return n(s).then(r.hitch(this,function(e){for(var r,s=0;s<e.length;s++)r?e[s].length<r.length&&(r=e[s]):r=e[s];this.set("proxies",r),t.resolve(r)}),t.reject),t.promise},_deleteProxy:function(e){var t=new i,s=this._sharingBaseUrl+"content/users/"+this._owner+"/";return this._folderId&&(s+=this._folderId+"/"),s+="items/"+this.appid+"/proxies/"+e.proxyId+"/delete",p({url:s,content:{f:"json"},callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){t.resolve(e.appProxies||[])}),t.reject),t.promise},_parseUrl:function(e){var r=document.createElement("a");return r.href=e,r},_init:function(){this.appid?l.getItem(this.appid).then(r.hitch(this,function(e){this._appItem=e,this._folderId=e.item.ownerFolder;var r=this._parseUrl(e.item.url);this._sharingBaseUrl="//"+r.hostname+"/sharing/rest/";var t=r.pathname.substring(0,r.pathname.lastIndexOf("/")),s=r.hostname+t,i="http://"+s,n="https://"+s;this.referrers.push(i),this.referrers.push(n),this._owner=e.item.owner;var o=e.item.typeKeywords.indexOf("App Proxy");-1!==o&&e.item.appProxies&&this.set("proxies",e.item.appProxies),this.emit("load",{}),this.set("loaded",!0)})):console.error("AppProxyManager: appid required.")},_registerApp:function(e){var t=new i,s=e.item.id,n=this._sharingBaseUrl+"oauth2/",a=this.referrers;if(this._registered&&this._registered===this.appid)t.resolve(e);else{var h=e.item.typeKeywords;-1!==h.indexOf("Registered App")?t.resolve(e):p({url:n+"/registerApp",content:{itemId:s,appType:"browser",redirect_uris:o.stringify(a),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){this._registered=this.appid,t.resolve(e)}),t.reject)}return t.promise}});return s("extend-esri")&&r.setObject("arcgis.AppProxyManager",c,t),c});