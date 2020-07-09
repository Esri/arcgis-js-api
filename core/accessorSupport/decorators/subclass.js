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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../extensions","../metadata"],(function(e,t,r,a,s){Object.defineProperty(t,"__esModule",{value:!0});var o=new Set,n=new Set;function i(e,t){return null==t.get?function(){return this.__accessor__?this.__accessor__.getterStatic(e,t):t.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(e,t):t.value}}function c(e){var t=e.prototype,r=t.declaredClass,o=s.getOwnClassMetadata(t).properties;a.processClassMetadatas(o,r);for(var n={},c=function(e){var t=o[e];n[e]={enumerable:!0,configurable:!0,get:i(e,t),set:function(r){var a=this.__accessor__;if(a){if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}}},l=0,p=Object.getOwnPropertyNames(o);l<p.length;l++){c(p[l])}Object.defineProperties(e.prototype,n)}t.subclass=function(e){return function(t){t.prototype.declaredClass=e,a.processPrototypeMetadatas(s.getOwnClassMetadata(t.prototype).properties,e),c(t);for(var i=[],l=[],p=t.prototype;p;)p.hasOwnProperty("initialize")&&!o.has(p.initialize)&&(o.add(p.initialize),i.push(p.initialize)),p.hasOwnProperty("destroy")&&!n.has(p.destroy)&&(n.add(p.destroy),l.push(p.destroy)),p=Object.getPrototypeOf(p);o.clear(),n.clear();var u=function(e){function t(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var s=e.apply(this,r)||this;return s.constructor===t&&"function"==typeof s.postscript&&(i.length&&Object.defineProperty(s,"initialize",{enumerable:!1,configurable:!0,value:function(){for(var e=i.length-1;e>=0;e--)i[e].call(this)}}),l.length&&Object.defineProperty(s,"destroy",{enumerable:!1,configurable:!0,value:function(){for(var e=0;e<l.length;e++)l[e].call(this)}}),s.postscript.apply(s,r)),s}return r.__extends(t,e),t}(t);return u.__accessorMetadata__=s.getOwnClassMetadata(t.prototype),u.prototype.declaredClass=e,u}},t.processClass=c}));