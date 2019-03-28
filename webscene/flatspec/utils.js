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

define(["require","exports"],function(e,t){function n(e){return r(e,"",new Set,{})}function r(e,t,n,o){if(n.has(e))return o;n.add(e),t&&e.name&&(o[t]=e);for(var p=0,u=e.properties;p<u.length;p++){var a=u[p];if("string"!=typeof a.type){var s=t?t+"."+a.name:a.name;r(a.type,s,n,o)}}return n.delete(e),o}function o(e){var t=p(e,"",[]);return t.sort(function(e,t){return e.name.localeCompare(t.name)}),t}function p(e,t,n){for(var r=0,o=e.properties;r<o.length;r++){var u=o[r],a=t?t+"."+u.name:u.name;"string"==typeof u.type?n.push({name:a,type:u.type,default:u.default,enum:u.enum}):0===u.type.properties.length?n.push({name:a,type:"unknown",default:u.default,enum:u.enum}):p(u.type,a,n)}return n}function u(e){var t=e.slice();return t.sort(),t}Object.defineProperty(t,"__esModule",{value:!0}),t.collectClassPaths=n,t.flatten=o;var a=function(){function e(){this.stack=[],this.seen=new Map}return e.prototype.addProperty=function(e){this.currentClass.properties.push(e)},e.prototype.addSeen=function(e,t){this.seen.set(e,t)},e.prototype.push=function(e,t){this.seen.set(t.type,t),this.stack.push({klass:t,propertyName:e})},e.prototype.pop=function(){return this.stack.pop().klass},Object.defineProperty(e.prototype,"currentClass",{get:function(){return this.stack[this.stack.length-1].klass},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pathString",{get:function(){return this.stack.map(function(e){return e.propertyName}).filter(function(e){return!!e}).join(".")},enumerable:!0,configurable:!0}),e}();t.ScanContext=a,t.sorted=u});