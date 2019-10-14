// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function n(e){return r(e,"",new Set,{})}function r(e,t,n,o){if(n.has(e))return o;n.add(e),t&&e.id&&(o[t]=e);for(var u=0,a=e.properties;u<a.length;u++){var s=a[u];if("string"!=typeof s.type){var p=t?t+"."+s.name:s.name;r(s.type,p,n,o)}}return n.delete(e),o}function o(e){var t=u(e,"",[]);return t.sort(function(e,t){return e.name.localeCompare(t.name)}),t}function u(e,t,n){for(var r=0,o=e.properties;r<o.length;r++){var a=o[r],s=t?t+"."+a.name:a.name;"string"==typeof a.type?n.push({name:s,type:a.type,default:a.default,enum:a.enum}):0===a.type.properties.length?n.push({name:s,type:"unknown",default:a.default,enum:a.enum}):u(a.type,s,n)}return n}function a(e){var t=e.slice();return t.sort(),t}Object.defineProperty(t,"__esModule",{value:!0}),t.collectClassPaths=n,t.flatten=o;var s=function(){function e(){this.stack=[],this.seen=new Map}return e.prototype.addProperty=function(e){this.currentClass.properties.push(e)},e.prototype.push=function(e,t){this.seen.set(t.id,t),this.stack.push({klass:t,propertyName:e})},e.prototype.pop=function(){return this.stack.pop().klass},Object.defineProperty(e.prototype,"currentClass",{get:function(){return this.stack.length?this.stack[this.stack.length-1].klass:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pathString",{get:function(){return this.stack.map(function(e){return e.propertyName}).filter(function(e){return!!e}).join(".")},enumerable:!0,configurable:!0}),e}();t.ScanContext=s,t.sorted=a});