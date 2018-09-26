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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../object","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,t,r,a,s,o,n,p){function c(e){for(var t=e.declaredClass,p=e.properties||{},c=0,y=Object.getOwnPropertyNames(p);c<y.length;c++){var u=y[c],g=p[u],O=typeof g;null==g?o.setPropertyMetadata(e,u,{value:g}):Array.isArray(g)?o.setPropertyMetadata(e,u,{type:[g[0]],value:null}):"object"===O?n.getProperties(g)||g instanceof Date?o.setPropertyMetadata(e,u,{type:g.constructor,value:g}):o.setPropertyMetadata(e,u,g):"boolean"===O?o.setPropertyMetadata(e,u,{type:Boolean,value:g}):"string"===O?o.setPropertyMetadata(e,u,{type:String,value:g}):"number"===O?o.setPropertyMetadata(e,u,{type:Number,value:g}):"function"===O&&o.setPropertyMetadata(e,u,{type:g,value:null})}for(var P=0,b=Object.getOwnPropertyNames(e);P<b.length;P++){var _=b[P],j=e[_],u=void 0,M=void 0,h=d.exec(_);if(h?(u=h[1],M=f[h[2]]):(h=v.exec(_))&&(u=h[2][0].toLowerCase()+h[2].substr(1),M=h[1].toLowerCase()),u&&M){var w=o.getPropertyMetadata(e,u);r.setDeepValue(M,j,w)}}for(var m=0,A=Object.getOwnPropertyNames(o.getPropertiesMetadata(e));m<A.length;m++){var u=A[m],C=o.getPropertyMetadata(e,u),M=C.type,N=C.types;void 0===C.value&&l.call(e,u)&&(C.value=e[u]),!C.cast&&M?C.cast=i(M):!C.cast&&N&&(Array.isArray(N)?C.cast=a.ensureArrayTyped(a.ensureOneOfType(N[0])):C.cast=a.ensureOneOfType(N))}return s.processPrototypeMetadatas(o.getPropertiesMetadata(e),t),o.getPropertiesMetadata(e)}function i(e){if(a.isOneOf(e))return a.ensureOneOf(e);for(var t=0,r=e;Array.isArray(r);)r=r[0],t++;return 1===t?a.ensureArray(r):t>1?a.ensureNArray(r,t):a.ensureType(e)}function y(e){return g.test(e)?"replace":"merge"}function u(e){for(var t=e.prototype,r=t.declaredClass,a=e._meta.bases,c={},i=a.length-1;i>=0;i--)n.merge(c,o.getMetadata(a[i].prototype),y);var u=c.properties;s.processClassMetadatas(u,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:u,autoDestroy:!!c.autoDestroy}});for(var l={},d=0,f=Object.getOwnPropertyNames(u);d<f.length;d++){var v=f[d];!function(e){var t=u[e];l[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}}(v)}if(Object.defineProperties(e.prototype,l),c.parameters)for(var g=Object.getOwnPropertyNames(c.parameters),O=0,P=g;O<P.length;O++){var b=P[O],_=Object.getOwnPropertyDescriptor(t,b)||{value:t[b]},j=p.autocastMethod(t,b,_);j&&Object.defineProperty(t,b,j)}return c}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.prototype.hasOwnProperty,d=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,f={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},v=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=c;var g=/^properties\.[^.]+\.(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;t.processClass=u});