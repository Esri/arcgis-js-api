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

define(["./declare","dojo/_base/lang"],function(e,t){var r={declareDefinition:function(e,t){var r,o=[],n=Object.getPrototypeOf(e.prototype);if(n!==Object.prototype){var c=n.constructor;r=c.prototype,o.push(c)}t&&(o=o.concat(t));for(var s={},a=Object.getOwnPropertyNames(e.prototype),i=0;i<a.length;i++){var u=a[i];if("constructor"!==u){var p=u;"dojoConstructor"===u&&(p="constructor"),r&&e.prototype[u]===r[u]||(s[p]=e.prototype[u])}}a=Object.getOwnPropertyNames(e);var f=Object.getOwnPropertyNames(n.constructor),b={};for(i=0;i<a.length;i++)u=a[i],-1===f.indexOf(u)&&(b[u]=e[u]);return{bases:o,instanceMembers:s,classMembers:b}},subclass:function(o){return function(n){var c=r.declareDefinition(n,o);return t.mixin(e(c.bases,c.instanceMembers),c.classMembers)}},shared:function(e){return function(t,r){t[r]=e}}};return r});