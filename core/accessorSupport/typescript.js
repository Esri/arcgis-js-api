// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../declare","../typescript","../JSONSupport","../lang"],function(e,r,t,n){function i(e,r){if(!e)return r;if(!r)return e;for(var t in r){var n=e[t],p=r[t];Array.isArray(p)&&Array.isArray(n)?e[t]=n.concat(p):e[t]="object"==typeof p&&"object"==typeof n?i(n,p):p}return e}return{subclass:function(p,s){return function(s){var o=r.declareDefinition(s,p);a&&(o.instanceMembers.properties=i(a,o.instanceMembers.properties));var a=o.instanceMembers.properties;if(a)for(var c in a){var u=a[c];u&&!u.reader&&u.type&&(u.type===Date?u.reader=function(e){return null!=e?new Date(e):null}:-1!==u.type._meta.bases.indexOf(t)&&(u.reader=function(e){return function(r){return e.fromJSON(r)}}(u.type)))}return n.mixin(e(o.bases,o.instanceMembers),o.classMembers)}},shared:r.shared,property:function(e){return function(r,t){var n=Object.getPrototypeOf(r),i=n&&n.properties;r.properties&&r.properties!==i||(r.properties={}),r.properties=r.properties||{},r.properties[t]=e||{}}}}});