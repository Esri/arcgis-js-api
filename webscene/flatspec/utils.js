// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.collectClassPaths=function(e){return function e(t,n,r,o){if(r.has(t))return o;r.add(t),n&&t.id&&(o[n]=t);for(var u=0,a=t.properties;u<a.length;u++){var s=a[u];if("string"!=typeof s.type){var p=n?n+"."+s.name:s.name;e(s.type,p,r,o)}}return r.delete(t),o}(e,"",new Set,{})},t.flatten=function(e){var t=function e(t,n,r){for(var o=0,u=t.properties;o<u.length;o++){var a=u[o],s=n?n+"."+a.name:a.name;"string"==typeof a.type?r.push({name:s,type:a.type,default:a.default,enum:a.enum}):0===a.type.properties.length?r.push({name:s,type:"unknown",default:a.default,enum:a.enum}):e(a.type,s,r)}return r}(e,"",[]);return t.sort((function(e,t){return e.name.localeCompare(t.name)})),t};var n=function(){function e(){this.stack=[],this.seen=new Map}return e.prototype.addProperty=function(e){this.currentClass.properties.push(e)},e.prototype.push=function(e,t){this.seen.set(t.id,t),this.stack.push({klass:t,propertyName:e})},e.prototype.pop=function(){return this.stack.pop().klass},Object.defineProperty(e.prototype,"currentClass",{get:function(){return this.stack.length?this.stack[this.stack.length-1].klass:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pathString",{get:function(){return this.stack.map((function(e){return e.propertyName})).filter((function(e){return!!e})).join(".")},enumerable:!0,configurable:!0}),e}();t.ScanContext=n,t.sorted=function(e){var t=e.slice();return t.sort(),t}}));