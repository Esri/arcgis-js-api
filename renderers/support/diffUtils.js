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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],function(e,n,t,r,i,o){function u(e){return e instanceof i?Object.keys(e.items):e instanceof r?o.getProperties(e).keys():e?Object.keys(e):[]}function c(e,n){return e instanceof i?e.items[n]:e[n]}function l(e,n){return Array.isArray(e)&&Array.isArray(n)?e.length!==n.length:!1}function f(e){return e?e.declaredClass:null}function a(e,n){var r=e.diff;if(r&&t.isFunction(r))return r.call(e,n);var i=u(e),o=u(n);if(0!==i.length||0!==o.length){if(!i.length||!o.length||l(e,n))return{type:"complete",oldValue:e,newValue:n};var s=o.filter(function(e){return-1===i.indexOf(e)}),p=i.filter(function(e){return-1===o.indexOf(e)}),y=i.filter(function(t){return o.indexOf(t)>-1&&c(e,t)!==c(n,t)}),g=y.concat(s,p).sort(),v=f(e),V=v&&d.indexOf(v)>-1;if(V&&g.length)return{type:"complete",oldValue:e,newValue:n};var h;for(var m in g){var O=g[m],b=c(e,O),j=c(n,O),x=void 0;t.isFunction(b)||t.isFunction(j)||b!==j&&(x="object"==typeof b&&"object"==typeof j&&f(b)===f(j)?a(b,j):{type:"complete",oldValue:b,newValue:j},x&&(h=h||{type:"partial",diff:{}},h.diff[O]=x))}return h}}function s(e,n){return t.isFunction(e)||t.isFunction(n)||!e&&!n?void 0:e&&n?a(e,n):{type:"complete",oldValue:e,newValue:n}}var d=["esri.Color"];n.diff=s});