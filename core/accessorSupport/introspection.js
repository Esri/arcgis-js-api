// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./utils","./metadata","./ensureType","./extensions","./decorators/cast"],function(e,t,r,a,s,o,n,p){function c(e){for(var t=e.declaredClass,p=e.properties||{},c=0,y=Object.getOwnPropertyNames(p);c<y.length;c++){var v=y[c],g=p[v],P=typeof g;null==g?s.setPropertyMetadata(e,v,{value:g}):Array.isArray(g)?s.setPropertyMetadata(e,v,{type:[g[0]],value:null}):"object"===P?a.getProperties(g)||g instanceof Date?s.setPropertyMetadata(e,v,{type:g.constructor,value:g}):s.setPropertyMetadata(e,v,g):"boolean"===P?s.setPropertyMetadata(e,v,{type:Boolean,value:g}):"string"===P?s.setPropertyMetadata(e,v,{type:String,value:g}):"number"===P?s.setPropertyMetadata(e,v,{type:Number,value:g}):"function"===P&&s.setPropertyMetadata(e,v,{type:g,value:null})}for(var O=0,b=Object.getOwnPropertyNames(e);O<b.length;O++){var _=b[O],M=e[_],v=void 0,j=void 0,h=u.exec(_);if(h?(v=h[1],j=d[h[2]]):(h=f.exec(_),h&&(v=h[2][0].toLowerCase()+h[2].substr(1),j=h[1].toLowerCase())),v&&j){var w=s.getPropertyMetadata(e,v);r.setObject(j,M,w)}}for(var m=0,A=Object.getOwnPropertyNames(s.getPropertiesMetadata(e));m<A.length;m++){var v=A[m],C=s.getPropertyMetadata(e,v),j=C.type,N=C.types;void 0===C.value&&l.call(e,v)&&(C.value=e[v]),!C.cast&&j?C.cast=i(j):!C.cast&&N&&(Array.isArray(N)?C.cast=o.ensureArrayTyped(o.ensureOneOfType(N[0])):C.cast=o.ensureOneOfType(N))}return n.processPrototypeMetadatas(s.getPropertiesMetadata(e),t),s.getPropertiesMetadata(e)}function i(e){for(var t=0,r=e;Array.isArray(r);)r=r[0],t++;return 1===t?o.ensureArray(r):t>1?o.ensureNArray(r,t):o.ensureType(e)}function y(e){for(var t=e.prototype,r=t.declaredClass,o=e._meta.bases,c={},i=o.length-1;i>=0;i--)a.merge(c,s.getMetadata(o[i].prototype));var y=c.properties;n.processClassMetadatas(y,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:y,autoDestroy:!!c.autoDestroy}});for(var l={},u=function(e){var t=y[e];l[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}},d=0,f=Object.getOwnPropertyNames(y);d<f.length;d++){var v=f[d];u(v)}if(Object.defineProperties(e.prototype,l),c.parameters)for(var g=Object.getOwnPropertyNames(c.parameters),P=0,O=g;P<O.length;P++){var b=O[P],_=Object.getOwnPropertyDescriptor(t,b)||{value:t[b]},M=p.autocastMethod(t,b,_);M&&Object.defineProperty(t,b,M)}return c}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.prototype.hasOwnProperty,u=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,d={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},f=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=c,t.processClass=y});