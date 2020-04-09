// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","../object","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],(function(e,t,r,a,s,o,n,p){Object.defineProperty(t,"__esModule",{value:!0});var c=Object.prototype.hasOwnProperty,i=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,y={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},l=/^_(set|get)([a-zA-Z0-9]+)Attr$/;function u(e){for(var t=0,r=e;Array.isArray(r);)r=r[0],t++;return 1===t?a.ensureArray(r):t>1?a.ensureNArray(r,t):a.ensureType(e)}t.processPrototype=function(e){for(var t=e.declaredClass,p=e.properties||{},d=0,f=Object.getOwnPropertyNames(p);d<f.length;d++){var v=p[M=f[d]],g=typeof v;null==v?o.setPropertyMetadata(e,M,{value:v}):Array.isArray(v)?o.setPropertyMetadata(e,M,{type:[v[0]],value:null}):"object"===g?n.getProperties(v)||v instanceof Date?o.setPropertyMetadata(e,M,{type:v.constructor,value:v}):o.setPropertyMetadata(e,M,v):"boolean"===g?o.setPropertyMetadata(e,M,{type:Boolean,value:v}):"string"===g?o.setPropertyMetadata(e,M,{type:String,value:v}):"number"===g?o.setPropertyMetadata(e,M,{type:Number,value:v}):"function"===g&&o.setPropertyMetadata(e,M,{type:v,value:null})}for(var P=0,O=Object.getOwnPropertyNames(e);P<O.length;P++){var b=O[P],_=e[b],M=void 0,h=void 0,j=i.exec(b);if(j?(M=j[1],h=y[j[2]]):(j=l.exec(b))&&(M=j[2][0].toLowerCase()+j[2].substr(1),h=j[1].toLowerCase()),M&&h){var w=o.getPropertyMetadata(e,M);r.setDeepValue(h,_,w)}}for(var m=0,A=Object.getOwnPropertyNames(o.getPropertiesMetadata(e));m<A.length;m++){M=A[m];var C=o.getPropertyMetadata(e,M),N=(h=C.type,C.types);void 0===C.value&&c.call(e,M)&&(C.value=e[M]),!C.cast&&h?C.cast=u(h):!C.cast&&N&&(Array.isArray(N)?C.cast=a.ensureArrayTyped(a.ensureOneOfType(N[0])):C.cast=a.ensureOneOfType(N))}return s.processPrototypeMetadatas(o.getPropertiesMetadata(e),t),o.getPropertiesMetadata(e)},t.processClass=function(e){for(var t=e.prototype,r=t.declaredClass,a=e._meta.bases,c={},i=a.length-1;i>=0;i--)n.merge(c,o.getMetadata(a[i].prototype));var y=c.properties;s.processClassMetadatas(y,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:y,autoDestroy:!!c.autoDestroy}});for(var l={},u=function(e){var t=y[e];l[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(a){if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}else Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}}},d=0,f=Object.getOwnPropertyNames(y);d<f.length;d++){u(f[d])}if(Object.defineProperties(e.prototype,l),c.parameters)for(var v=0,g=Object.getOwnPropertyNames(c.parameters);v<g.length;v++){var P=g[v],O=Object.getOwnPropertyDescriptor(t,P)||{value:t[P]},b=p.autocastMethod(t,P,O);b&&Object.defineProperty(t,P,b)}return c}}));