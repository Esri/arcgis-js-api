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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../kernel","dojo/uacss","dojo/Deferred","dojo/promise/all","dojo/json","dojo/Evented","dojo/Stateful","../request","./utils"],function(e,r,t,s,i,a,o,n,h,p,l){var d=e([n,h],{constructor:function(e){this.defaults={appid:"",hitsPerInterval:0,intervalSeconds:60,referrers:[],proxies:[]};var t=r.mixin({},this.defaults,e);this.set(t),this._init()},createProxies:function(e){var t=new i;return this._registerApp(this._appItem).then(r.hitch(this,function(){var s={referrers:this.referrers},i=this.hitsPerInterval;isNaN(i)||(s.hitsPerInterval=i);var a=this.intervalSeconds;isNaN(a)||(s.intervalSeconds=a);for(var n=[],h=0;h<e.length;h++){var l=e[h];n.push({sourceUrl:l.sourceUrl})}var d=this._sharingBaseUrl+"content/users/"+this._owner+"/";this._folderId&&(d+=this._folderId+"/"),d+="items/"+this.appid+"/createProxies",p({url:d,content:{proxies:o.stringify(n),serviceProxyParams:o.stringify(s),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){this.set("proxies",e.appProxies||[]),t.resolve(e.appProxies)}),t.reject)}),t.reject),t.promise},deleteProxies:function(e){var t=new i,s={f:"json"},a=[];if(e&&e.length)for(var o=0;o<e.length;o++){var n=e[o];a.push(n.proxyId)}a&&a.length&&(s.proxies=a.toString());var h=this._sharingBaseUrl+"content/users/"+this._owner+"/";return this._folderId&&(h+=this._folderId+"/"),h+="items/"+this.appid+"/deleteProxies",p({url:h,content:s,callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){var r=this.proxies.slice(),s=e.results;if(r&&r.length&&s&&s.length)for(var i=0;i<r.length;i++)for(var a=r[i],o=a.proxyId,n=0;n<s.length;n++){var h=s[n],p=h.proxyId;p&&o&&p===o&&(a.proxied=!1)}this.set("proxies",r),t.resolve(r)}),t.reject),t.promise},_parseUrl:function(e){var r=document.createElement("a");return r.href=e,r},_init:function(){this.appid?l.getItem(this.appid).then(r.hitch(this,function(e){this._appItem=e,this._folderId=e.item.ownerFolder;var r=this._parseUrl(e.item.url);this._sharingBaseUrl="https://"+r.hostname+"/sharing/rest/";var t=r.pathname.substring(0,r.pathname.lastIndexOf("/"));t="/"===t.charAt(0)?t:"/"+t;var s=r.hostname+t,i="http://"+s,a="https://"+s;this.referrers.push(i),this.referrers.push(a),this._owner=e.item.owner;var o=e.item.typeKeywords.indexOf("App Proxy");-1!==o&&e.item.appProxies&&this.set("proxies",e.item.appProxies),this.emit("load",{}),this.set("loaded",!0)})):console.error("AppProxyManager: appid required.")},_registerApp:function(e){var t=new i,s=e.item.id,a=this._sharingBaseUrl+"oauth2/",n=this.referrers;if(this._registered&&this._registered===this.appid)t.resolve(e);else{var h=e.item.typeKeywords;-1!==h.indexOf("Registered App")?t.resolve(e):p({url:a+"/registerApp",content:{itemId:s,appType:"browser",redirect_uris:o.stringify(n),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(r.hitch(this,function(e){this._registered=this.appid,t.resolve(e)}),t.reject)}return t.promise}});return s("extend-esri")&&r.setObject("arcgis.AppProxyManager",d,t),d});