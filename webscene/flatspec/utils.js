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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sorted=e.ScanContext=e.flatten=e.collectClassPaths=void 0,e.collectClassPaths=function(t){return function t(e,n,r,o){if(r.has(e))return o;r.add(e),n&&e.id&&(o[n]=e);for(var s=0,a=e.properties;s<a.length;s++){var u=a[s];if("string"!=typeof u.type){var p=n?n+"."+u.name:u.name;t(u.type,p,r,o)}}return r.delete(e),o}(t,"",new Set,{})},e.flatten=function(t){var e=function t(e,n,r){for(var o=0,s=e.properties;o<s.length;o++){var a=s[o],u=n?n+"."+a.name:a.name;"string"==typeof a.type?r.push({name:u,type:a.type,default:a.default,enum:a.enum}):0===a.type.properties.length?r.push({name:u,type:"unknown",default:a.default,enum:a.enum}):t(a.type,u,r)}return r}(t,"",[]);return e.sort((function(t,e){return t.name.localeCompare(e.name)})),e};var n=function(){function t(){this.stack=[],this.seen=new Map}return t.prototype.addProperty=function(t){this.currentClass.properties.push(t)},t.prototype.push=function(t,e){this.seen.set(e.id,e),this.stack.push({klass:e,propertyName:t})},t.prototype.pop=function(){return this.stack.pop().klass},Object.defineProperty(t.prototype,"currentClass",{get:function(){return this.stack.length?this.stack[this.stack.length-1].klass:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pathString",{get:function(){return this.stack.map((function(t){return t.propertyName})).filter((function(t){return!!t})).join(".")},enumerable:!1,configurable:!0}),t}();e.ScanContext=n,e.sorted=function(t){var e=t.slice();return e.sort(),e}}));