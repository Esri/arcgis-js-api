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

define(["require","exports","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,r,t,a,s,n,o){function c(e){var r=e.declaredClass,o=e.properties||{};for(var c in o){var p=o[c],y=typeof p;null==p?s.setPropertyMetadata(e,c,{value:p}):Array.isArray(p)?s.setPropertyMetadata(e,c,{type:[p[0]],value:null}):"object"===y?n.getProperties(p)||p instanceof Date?s.setPropertyMetadata(e,c,{type:p.constructor,value:p}):s.setPropertyMetadata(e,c,p):"boolean"===y?s.setPropertyMetadata(e,c,{type:Boolean,value:p}):"string"===y?s.setPropertyMetadata(e,c,{type:String,value:p}):"number"===y?s.setPropertyMetadata(e,c,{type:Number,value:p}):"function"===y&&s.setPropertyMetadata(e,c,{type:p,value:null})}var l=s.getPropertiesMetadata(e);for(var c in l){var f=l[c],d=f.type,v=f.types;f.cast||(d?f.cast=i(d):v&&(Array.isArray(v)?f.cast=t.ensureArrayTyped(t.ensureOneOfType(v[0])):f.cast=t.ensureOneOfType(v))),f.range&&(f.cast=u(f.cast,f.range))}return a.processPrototypeMetadatas(l,r),l}function i(e){var r=0,a=e;if(t.isLongFormType(e))return t.ensureLongFormType(e);for(;Array.isArray(a)&&1===a.length&&"string"!=typeof a[0]&&"number"!=typeof a[0];)a=a[0],r++;var s=a;return t.isOneOf(s)?0===r?t.ensureOneOf(s):t.ensureNArrayTyped(t.ensureOneOf(s),r):1===r?t.ensureArray(s):r>1?t.ensureNArray(s,r):t.ensureType(e)}function u(e,r){return function(t){var a=+e(t);return null!=r.min&&(a=Math.max(r.min,a)),null!=r.max&&(a=Math.min(r.max,a)),a}}function p(e,r){return null==r.get?function(){return this.__accessor__?this.__accessor__.getterStatic(e,r):r.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(e,r):r.value}}function y(e){for(var r=e.prototype,t=r.declaredClass,n=e._meta.bases,c={},i=n.length-1;i>=0;i--)s.merge(c,s.getMetadata(n[i].prototype));var u=c.properties;a.processClassMetadatas(u,t),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:u,autoDestroy:!!c.autoDestroy}});for(var y={},l=0,f=Object.getOwnPropertyNames(u);l<f.length;l++){var d=f[l];!function(e){var r=u[e];y[e]={enumerable:!0,configurable:!0,get:p(e,r),set:function(t){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});if(!Object.isFrozen(this)){if(a.initialized&&r.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&r.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,t)}}}}(d)}if(Object.defineProperties(e.prototype,y),c.parameters)for(var v=Object.getOwnPropertyNames(c.parameters),_=0,g=v;_<g.length;_++){var O=g[_],m=Object.getOwnPropertyDescriptor(r,O)||{value:r[O]},b=o.autocastMethod(r,O,m);b&&Object.defineProperty(r,O,b)}return c}Object.defineProperty(r,"__esModule",{value:!0}),r.processPrototype=c,r.processClass=y});