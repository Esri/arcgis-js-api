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

define(["require","exports","tslib","../../has","../extensions","../metadata"],(function(e,t,r,s,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processClass=t.subclass=void 0;var n=new Set,i=new Set;function c(e,t){return null==t.get?void 0===t.value?function(){return this.__accessor__.store.get(e)}:function(){var r=this.__accessor__.store;return r.has(e)?r.get(e):t.value}:function(){return this.__accessor__.getterComputed(e,t)}}function l(e){var t=e.prototype,r=t.declaredClass,s=o.getOwnClassMetadata(t).properties;a.processClassMetadatas(s,r);for(var n={},i=function(e){var t=s[e];n[e]={enumerable:!0,configurable:!0,get:c(e,t),set:function(r){var s=this.__accessor__;if(void 0!==s){if(!Object.isFrozen(this)){if(s.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===s.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);s.set(e,r)}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}}},l=0,p=Object.getOwnPropertyNames(s);l<p.length;l++){i(p[l])}Object.defineProperties(e.prototype,n)}t.subclass=function(e){return function(t){t.prototype.declaredClass=e,a.processPrototypeMetadatas(o.getOwnClassMetadata(t.prototype).properties,e),l(t);for(var c=[],p=[],u=t.prototype;u;)u.hasOwnProperty("initialize")&&!n.has(u.initialize)&&(n.add(u.initialize),c.push(u.initialize)),u.hasOwnProperty("destroy")&&!i.has(u.destroy)&&(i.add(u.destroy),p.push(u.destroy)),u=Object.getPrototypeOf(u);n.clear(),i.clear();var d=function(e){function t(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var o=e.apply(this,r)||this;if(o.constructor===t&&"function"==typeof o.postscript){if(c.length&&Object.defineProperty(o,"initialize",{enumerable:!1,configurable:!0,value:function(){for(var e=c.length-1;e>=0;e--)c[e].call(this)}}),p.length){var n=!1;Object.defineProperty(o,"destroy",{enumerable:!1,configurable:!0,value:function(){if(n){if(s("esri-debug-messages"))try{throw new Error("instance is already destroyed")}catch(e){console.warn(e.stack)}}else{n=!0;for(var e=0;e<p.length;e++)p[e].call(this)}}})}o.postscript.apply(o,r)}return o}return r.__extends(t,e),t}(t);return d.__accessorMetadata__=o.getOwnClassMetadata(t.prototype),d.prototype.declaredClass=e,d}},t.processClass=l}));