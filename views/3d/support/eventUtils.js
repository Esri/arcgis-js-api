// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/watchUtils","dojo/on","dojo/_base/lang"],function(n,e,t){function r(){this.handles=[],this.ids={}}function a(n){var e={};for(var t in n){var r=n[t];if("function"==typeof r)e[t]=r;else for(var a in r)e[t+"."+a]=r[a]}return e}function i(n,r){var a={};for(var i in n){var o=n[i],s={};"object"==typeof o&&(s=t.mixin({},o),delete s.handler,o=o.handler),r&&(o=function(n){return function(){n.apply(r,arguments)}}(o));var u,h,l=i.split(".");1===l.length?(u="",h=i[0]):(u=l.slice(0,l.length-1).join("."),h=l[l.length-1]),a[u]||(a[u]=[]),a[u].push({eventName:h,handler:o,installer:s.pausable?e.pausable:e})}return a}r.prototype.remove=function(){this.handles.forEach(function(n){n.remove()}),this.handles.length=0,this.ids={}},r.prototype.push=function(){2===arguments.length&&"string"==typeof arguments[0]?(this.handles.push(arguments[1]),this.ids[arguments[0]]=arguments[1]):this.handles.push.apply(this.handles,arguments)},r.prototype.byId=function(n){return this.ids[n]};var o={Handles:r,on:function(e,t,o,s){var u=new r,h={};if("string"==typeof t){var l={};l[t]=o,t=l,o=s}var f=i(a(t),o);for(var v in f){var c=new r;h[v]=c,v?u.push(n.init(e,v,function(n,e,t){return function(r){n.remove(),r&&t.forEach(function(t){n.push(e+"."+t.eventName,t.installer(r,t.eventName,t.handler))})}}(c,v,f[v]))):f[v].forEach(function(n){c.push(v+"."+n.eventName,n.installer(e,n.eventName,n.handler))})}var p=new r,d=p.remove;return p.remove=function(){for(var n in h)h[n].remove();h={},u.remove(),d.call(p)},p.byId=function(n){for(var e in h){var t=h[e],r=t.byId(n);if(r)return r}return null},p}};return o});