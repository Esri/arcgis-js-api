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

define(["../declare","../typescript","../JSONSupport","dojo/_base/lang"],function(e,r,t,n){function i(e,r){if(!e)return r;if(!r)return e;for(var t in r){var n=e[t],o=r[t];Array.isArray(o)&&Array.isArray(n)?e[t]=n.concat(o):"object"==typeof o&&"object"==typeof n?e[t]=i(n,o):e[t]=o}return e}var o={subclass:function(o,s){return function(s){var a=r.declareDefinition(s,o);p&&(a.instanceMembers.properties=i(p,a.instanceMembers.properties));var p=a.instanceMembers.properties;if(p)for(var c in p){var u=p[c];u&&!u.reader&&u.type&&(u.type===Date?u.reader=function(e){return null!=e?new Date(e):null}:-1!==u.type._meta.bases.indexOf(t)&&(u.reader=function(e){return function(r){return e.fromJSON(r)}}(u.type)))}return n.mixin(e(a.bases,a.instanceMembers),a.classMembers)}},shared:r.shared,property:function(e){return function(r,t){var n=Object.getPrototypeOf(r),i=n&&n.properties;r.properties&&r.properties!==i||(r.properties={}),r.properties=r.properties||{},r.properties[t]=e||{}}}};return o});