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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,t,r,a,s,o,n,p){function c(e){for(var t=e.declaredClass,p=e.properties||{},c=0,y=Object.getOwnPropertyNames(p);c<y.length;c++){var v=y[c],g=p[v],P=typeof g;null==g?o.setPropertyMetadata(e,v,{value:g}):Array.isArray(g)?o.setPropertyMetadata(e,v,{type:[g[0]],value:null}):"object"===P?n.getProperties(g)||g instanceof Date?o.setPropertyMetadata(e,v,{type:g.constructor,value:g}):o.setPropertyMetadata(e,v,g):"boolean"===P?o.setPropertyMetadata(e,v,{type:Boolean,value:g}):"string"===P?o.setPropertyMetadata(e,v,{type:String,value:g}):"number"===P?o.setPropertyMetadata(e,v,{type:Number,value:g}):"function"===P&&o.setPropertyMetadata(e,v,{type:g,value:null})}for(var O=0,b=Object.getOwnPropertyNames(e);O<b.length;O++){var _=b[O],M=e[_],v=void 0,j=void 0,h=u.exec(_);if(h?(v=h[1],j=d[h[2]]):(h=f.exec(_))&&(v=h[2][0].toLowerCase()+h[2].substr(1),j=h[1].toLowerCase()),v&&j){var w=o.getPropertyMetadata(e,v);r.setObject(j,M,w)}}for(var m=0,A=Object.getOwnPropertyNames(o.getPropertiesMetadata(e));m<A.length;m++){var v=A[m],C=o.getPropertyMetadata(e,v),j=C.type,N=C.types;void 0===C.value&&l.call(e,v)&&(C.value=e[v]),!C.cast&&j?C.cast=i(j):!C.cast&&N&&(Array.isArray(N)?C.cast=a.ensureArrayTyped(a.ensureOneOfType(N[0])):C.cast=a.ensureOneOfType(N))}return s.processPrototypeMetadatas(o.getPropertiesMetadata(e),t),o.getPropertiesMetadata(e)}function i(e){for(var t=0,r=e;Array.isArray(r);)r=r[0],t++;return 1===t?a.ensureArray(r):t>1?a.ensureNArray(r,t):a.ensureType(e)}function y(e){for(var t=e.prototype,r=t.declaredClass,a=e._meta.bases,c={},i=a.length-1;i>=0;i--)n.merge(c,o.getMetadata(a[i].prototype));var y=c.properties;s.processClassMetadatas(y,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:y,autoDestroy:!!c.autoDestroy}});for(var l={},u=0,d=Object.getOwnPropertyNames(y);u<d.length;u++){var f=d[u];!function(e){var t=y[e];l[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}}(f)}if(Object.defineProperties(e.prototype,l),c.parameters)for(var v=Object.getOwnPropertyNames(c.parameters),g=0,P=v;g<P.length;g++){var O=P[g],b=Object.getOwnPropertyDescriptor(t,O)||{value:t[O]},_=p.autocastMethod(t,O,b);_&&Object.defineProperty(t,O,_)}return c}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.prototype.hasOwnProperty,u=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,d={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},f=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=c,t.processClass=y});