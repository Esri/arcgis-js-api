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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../object","./ensureType","./extensions","./metadata","./utils","./decorators/cast"],function(e,t,r,a,s,o,n,p){function c(e){for(var t=e.declaredClass,p=e.properties||{},c=0,y=Object.getOwnPropertyNames(p);c<y.length;c++){var v=y[c],g=p[v],O=typeof g;null==g?o.setPropertyMetadata(e,v,{value:g}):Array.isArray(g)?o.setPropertyMetadata(e,v,{type:[g[0]],value:null}):"object"===O?n.getProperties(g)||g instanceof Date?o.setPropertyMetadata(e,v,{type:g.constructor,value:g}):o.setPropertyMetadata(e,v,g):"boolean"===O?o.setPropertyMetadata(e,v,{type:Boolean,value:g}):"string"===O?o.setPropertyMetadata(e,v,{type:String,value:g}):"number"===O?o.setPropertyMetadata(e,v,{type:Number,value:g}):"function"===O&&o.setPropertyMetadata(e,v,{type:g,value:null})}for(var P=0,b=Object.getOwnPropertyNames(e);P<b.length;P++){var _=b[P],M=e[_],v=void 0,h=void 0,j=l.exec(_);if(j?(v=j[1],h=d[j[2]]):(j=f.exec(_))&&(v=j[2][0].toLowerCase()+j[2].substr(1),h=j[1].toLowerCase()),v&&h){var w=o.getPropertyMetadata(e,v);r.setDeepValue(h,M,w)}}for(var m=0,A=Object.getOwnPropertyNames(o.getPropertiesMetadata(e));m<A.length;m++){var v=A[m],C=o.getPropertyMetadata(e,v),h=C.type,N=C.types;void 0===C.value&&u.call(e,v)&&(C.value=e[v]),!C.cast&&h?C.cast=i(h):!C.cast&&N&&(Array.isArray(N)?C.cast=a.ensureArrayTyped(a.ensureOneOfType(N[0])):C.cast=a.ensureOneOfType(N))}return s.processPrototypeMetadatas(o.getPropertiesMetadata(e),t),o.getPropertiesMetadata(e)}function i(e){for(var t=0,r=e;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],t++;var s=r;return a.isOneOf(s)?0===t?a.ensureOneOf(s):a.ensureNArrayTyped(a.ensureOneOf(s),t):1===t?a.ensureArray(s):t>1?a.ensureNArray(s,t):a.ensureType(e)}function y(e){for(var t=e.prototype,r=t.declaredClass,a=e._meta.bases,n={},c=a.length-1;c>=0;c--)o.merge(n,o.getMetadata(a[c].prototype));var i=n.properties;s.processClassMetadatas(i,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:i,autoDestroy:!!n.autoDestroy}});for(var y={},u=0,l=Object.getOwnPropertyNames(i);u<l.length;u++){var d=l[u];!function(e){var t=i[e];y[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}}(d)}if(Object.defineProperties(e.prototype,y),n.parameters)for(var f=Object.getOwnPropertyNames(n.parameters),v=0,g=f;v<g.length;v++){var O=g[v],P=Object.getOwnPropertyDescriptor(t,O)||{value:t[O]},b=p.autocastMethod(t,O,P);b&&Object.defineProperty(t,O,b)}return n}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.prototype.hasOwnProperty,l=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,d={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},f=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=c,t.processClass=y});