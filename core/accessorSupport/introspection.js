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

define(["require","exports","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,r,t,a,s,o,n){function c(e){var r=e.declaredClass,n=e.properties||{};for(var c in n){var u=n[c],y=typeof u;null==u?s.setPropertyMetadata(e,c,{value:u}):Array.isArray(u)?s.setPropertyMetadata(e,c,{type:[u[0]],value:null}):"object"===y?o.getProperties(u)||u instanceof Date?s.setPropertyMetadata(e,c,{type:u.constructor,value:u}):s.setPropertyMetadata(e,c,u):"boolean"===y?s.setPropertyMetadata(e,c,{type:Boolean,value:u}):"string"===y?s.setPropertyMetadata(e,c,{type:String,value:u}):"number"===y?s.setPropertyMetadata(e,c,{type:Number,value:u}):"function"===y&&s.setPropertyMetadata(e,c,{type:u,value:null})}var l=s.getPropertiesMetadata(e);for(var c in l){var f=l[c],d=f.type,v=f.types;f.cast||(d?f.cast=i(d):v&&(Array.isArray(v)?f.cast=t.ensureArrayTyped(t.ensureOneOfType(v[0])):f.cast=t.ensureOneOfType(v))),f.range&&(f.cast=p(f.cast,f.range))}return a.processPrototypeMetadatas(l,r),l}function i(e){for(var r=0,a=e;Array.isArray(a)&&1===a.length&&"string"!=typeof a[0]&&"number"!=typeof a[0];)a=a[0],r++;var s=a;return t.isOneOf(s)?0===r?t.ensureOneOf(s):t.ensureNArrayTyped(t.ensureOneOf(s),r):1===r?t.ensureArray(s):r>1?t.ensureNArray(s,r):t.ensureType(e)}function p(e,r){return function(t){var a=+e(t);return null!=r.min&&(a=Math.max(r.min,a)),null!=r.max&&(a=Math.min(r.max,a)),a}}function u(e){for(var r=e.prototype,t=r.declaredClass,o=e._meta.bases,c={},i=o.length-1;i>=0;i--)s.merge(c,s.getMetadata(o[i].prototype));var p=c.properties;a.processClassMetadatas(p,t),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:p,autoDestroy:!!c.autoDestroy}});for(var u={},y=0,l=Object.getOwnPropertyNames(p);y<l.length;y++){var f=l[y];!function(e){var r=p[e];u[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):r.value},set:function(t){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});if(!Object.isFrozen(this)){if(a.initialized&&r.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&r.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,t)}}}}(f)}if(Object.defineProperties(e.prototype,u),c.parameters)for(var d=Object.getOwnPropertyNames(c.parameters),v=0,O=d;v<O.length;v++){var g=O[v],b=Object.getOwnPropertyDescriptor(r,g)||{value:r[g]},P=n.autocastMethod(r,g,b);P&&Object.defineProperty(r,g,P)}return c}Object.defineProperty(r,"__esModule",{value:!0}),r.processPrototype=c,r.processClass=u});