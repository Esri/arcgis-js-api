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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,t,r,a,s,n,o){function c(e){var t=e.declaredClass,o=e.properties||{};for(var c in o){var p=o[c],y=typeof p;null==p?s.setPropertyMetadata(e,c,{value:p}):Array.isArray(p)?s.setPropertyMetadata(e,c,{type:[p[0]],value:null}):"object"===y?n.getProperties(p)||p instanceof Date?s.setPropertyMetadata(e,c,{type:p.constructor,value:p}):s.setPropertyMetadata(e,c,p):"boolean"===y?s.setPropertyMetadata(e,c,{type:Boolean,value:p}):"string"===y?s.setPropertyMetadata(e,c,{type:String,value:p}):"number"===y?s.setPropertyMetadata(e,c,{type:Number,value:p}):"function"===y&&s.setPropertyMetadata(e,c,{type:p,value:null})}var l=s.getPropertiesMetadata(e);for(var c in l){var f=l[c],d=f.type,v=f.types;f.cast||(d?f.cast=i(d):v&&(Array.isArray(v)?f.cast=r.ensureArrayTyped(r.ensureOneOfType(v[0])):f.cast=r.ensureOneOfType(v))),f.range&&(f.cast=u(f.cast,f.range))}return a.processPrototypeMetadatas(l,t),l}function i(e){for(var t=0,a=e;Array.isArray(a)&&1===a.length&&"string"!=typeof a[0]&&"number"!=typeof a[0];)a=a[0],t++;var s=a;return r.isOneOf(s)?0===t?r.ensureOneOf(s):r.ensureNArrayTyped(r.ensureOneOf(s),t):1===t?r.ensureArray(s):t>1?r.ensureNArray(s,t):r.ensureType(e)}function u(e,t){return function(r){var a=+e(r);return null!=t.min&&(a=Math.max(t.min,a)),null!=t.max&&(a=Math.min(t.max,a)),a}}function p(e,t){return null==t.get?function(){return this.__accessor__?this.__accessor__.getterStatic(e,t):t.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(e,t):t.value}}function y(e){for(var t=e.prototype,r=t.declaredClass,n=e._meta.bases,c={},i=n.length-1;i>=0;i--)s.merge(c,s.getMetadata(n[i].prototype));var u=c.properties;a.processClassMetadatas(u,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:u,autoDestroy:!!c.autoDestroy}});for(var y={},l=0,f=Object.getOwnPropertyNames(u);l<f.length;l++){var d=f[l];!function(e){var t=u[e];y[e]={enumerable:!0,configurable:!0,get:p(e,t),set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}}(d)}if(Object.defineProperties(e.prototype,y),c.parameters)for(var v=Object.getOwnPropertyNames(c.parameters),_=0,g=v;_<g.length;_++){var O=g[_],b=Object.getOwnPropertyDescriptor(t,O)||{value:t[O]},P=o.autocastMethod(t,O,b);P&&Object.defineProperty(t,O,P)}return c}Object.defineProperty(t,"__esModule",{value:!0}),t.processPrototype=c,t.processClass=y});