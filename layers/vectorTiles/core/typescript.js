// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["./declare","./lang"],(function(t,e){var r={declareDefinition:function(t,e){var r,n=[],o=Object.getPrototypeOf(t.prototype);if(o!==Object.prototype){var c=o.constructor;r=c.prototype,n.push(c)}e&&(n=n.concat(e));for(var s={},a=Object.getOwnPropertyNames(t.prototype),i=0;i<a.length;i++){var u=a[i];if("constructor"!==u){var p=u;"dojoConstructor"===u&&(p="constructor"),r&&t.prototype[u]===r[u]||(s[p]=t.prototype[u])}}a=Object.getOwnPropertyNames(t);var f=Object.getOwnPropertyNames(o.constructor),b={};for(i=0;i<a.length;i++)u=a[i],-1===f.indexOf(u)&&(b[u]=t[u]);return{bases:n,instanceMembers:s,classMembers:b}},subclass:function(n){return function(o){var c=r.declareDefinition(o,n);return e.mixin(t(c.bases,c.instanceMembers),c.classMembers)}},shared:function(t){return function(e,r){e[r]=t}}};return r}));