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

define(["require","exports","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],(function(e,r,t,a,s,n,o){function u(e){var r=0,a=e;if(t.isLongFormType(e))return t.ensureLongFormType(e);for(;Array.isArray(a)&&1===a.length&&"string"!=typeof a[0]&&"number"!=typeof a[0];)a=a[0],r++;var s=a;if(t.isOneOf(s))return 0===r?t.ensureOneOf(s):t.ensureNArrayTyped(t.ensureOneOf(s),r);if(1===r)return t.ensureArray(s);if(r>1)return t.ensureNArray(s,r);var n=e;return n.from?n.from:t.ensureType(n)}function i(e,r){return function(t){var a=+e(t);return null!=r.step&&(a=Math.round(a/r.step)*r.step),null!=r.min&&(a=Math.max(r.min,a)),null!=r.max&&(a=Math.min(r.max,a)),a}}function c(e,r){return null==r.get?function(){return this.__accessor__?this.__accessor__.getterStatic(e,r):r.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(e,r):r.value}}Object.defineProperty(r,"__esModule",{value:!0}),r.processPrototype=function(e){var r=e.declaredClass,o=e.properties||{};for(var c in o){var p=o[c],y=typeof p;null==p?s.setPropertyMetadata(e,c,{value:p}):Array.isArray(p)?s.setPropertyMetadata(e,c,{type:[p[0]],value:null}):"object"===y?n.getProperties(p)||p instanceof Date?s.setPropertyMetadata(e,c,{type:p.constructor,value:p}):s.setPropertyMetadata(e,c,p):"boolean"===y?s.setPropertyMetadata(e,c,{type:Boolean,value:p}):"string"===y?s.setPropertyMetadata(e,c,{type:String,value:p}):"number"===y?s.setPropertyMetadata(e,c,{type:Number,value:p}):"function"===y&&s.setPropertyMetadata(e,c,{type:p,value:null})}var l=s.getPropertiesMetadata(e);for(var c in l){var f=l[c],d=f.type,v=f.types;f.cast||(d?f.cast=u(d):v&&(Array.isArray(v)?f.cast=t.ensureArrayTyped(t.ensureOneOfType(v[0])):f.cast=t.ensureOneOfType(v))),f.range&&(f.cast=i(f.cast,f.range))}return a.processPrototypeMetadatas(l,r),l},r.processClass=function(e){for(var r=e.prototype,t=r.declaredClass,n=e._meta.bases,u={},i=n.length-1;i>=0;i--)s.merge(u,s.getMetadata(n[i].prototype));var p=u.properties;a.processClassMetadatas(p,t),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:p,autoDestroy:!!u.autoDestroy}});for(var y={},l=function(e){var r=p[e];y[e]={enumerable:!0,configurable:!0,get:c(e,r),set:function(t){var a=this.__accessor__;if(a){if(!Object.isFrozen(this)){if(a.initialized&&r.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&r.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,t)}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}}},f=0,d=Object.getOwnPropertyNames(p);f<d.length;f++){l(d[f])}if(Object.defineProperties(e.prototype,y),u.parameters)for(var v=0,_=Object.getOwnPropertyNames(u.parameters);v<_.length;v++){var g=_[v],O=Object.getOwnPropertyDescriptor(r,g)||{value:r[g]},m=o.autocastMethod(r,g,O);m&&Object.defineProperty(r,g,m)}return u}}));