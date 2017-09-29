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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./utils","./metadata","./ensureType","./extensions","./decorators/cast"],function(e,t,r,a,s,o,n,c){function p(e){for(var t=e.declaredClass,c=e.properties||{},p=0,u=Object.getOwnPropertyNames(c);p<u.length;p++){var v=u[p],g=c[v],b=typeof g;null==g?s.setPropertyMetadata(e,v,{value:g}):Array.isArray(g)?s.setPropertyMetadata(e,v,{type:[g[0]],value:null}):"object"===b?a.getProperties(g)||g instanceof Date?s.setPropertyMetadata(e,v,{type:g.constructor,value:g}):s.setPropertyMetadata(e,v,g):"boolean"===b?s.setPropertyMetadata(e,v,{type:Boolean,value:g}):"string"===b?s.setPropertyMetadata(e,v,{type:String,value:g}):"number"===b?s.setPropertyMetadata(e,v,{type:Number,value:g}):"function"===b&&s.setPropertyMetadata(e,v,{type:g,value:null})}for(var P=0,O=Object.getOwnPropertyNames(e);P<O.length;P++){var _=O[P],M=e[_],v=void 0,h=void 0,j=l.exec(_);if(j?(v=j[1],h=d[j[2]]):(j=f.exec(_),j&&(v=j[2][0].toLowerCase()+j[2].substr(1),h=j[1].toLowerCase())),v&&h){var w=s.getPropertyMetadata(e,v);r.setObject(h,M,w)}}for(var m=0,A=Object.getOwnPropertyNames(s.getPropertiesMetadata(e));m<A.length;m++){var v=A[m],C=s.getPropertyMetadata(e,v),h=C.type,N=C.types;void 0===C.value&&y.call(e,v)&&(C.value=e[v]),!C.cast&&h?C.cast=i(h):!C.cast&&N&&(Array.isArray(N)?C.cast=o.ensureArrayTyped(o.ensureOneOfType(N[0])):C.cast=o.ensureOneOfType(N))}return n.processPrototypeMetadatas(s.getPropertiesMetadata(e),t),s.getPropertiesMetadata(e)}function i(e){switch(e){case Number:return o.ensureNumber;case Boolean:return o.ensureBoolean;case String:return o.ensureString;case Date:return o.ensureDate;default:return Array.isArray(e)?o.ensureArray(e[0]):o.ensureType(e)}}function u(e){for(var t=e.prototype,r=t.declaredClass,o=e._meta.bases,p={},i=o.length-1;i>=0;i--)a.merge(p,s.getMetadata(o[i].prototype));var u=p.properties;n.processClassMetadatas(u,r),Object.defineProperty(e,"__accessorMetadata__",{value:{properties:u,autoDestroy:!!p.autoDestroy}});for(var y={},l=function(e){var t=u[e];y[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);if(2===a.lifecycle&&t.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}},d=0,f=Object.getOwnPropertyNames(u);d<f.length;d++){var v=f[d];l(v)}if(Object.defineProperties(e.prototype,y),p.parameters)for(var g=Object.getOwnPropertyNames(p.parameters),b=0,P=g;b<P.length;b++){var O=P[b],_=Object.getOwnPropertyDescriptor(t,O)||{value:t[O]},M=c.autocastMethod(t,O,_);M&&Object.defineProperty(t,O,M)}return p}Object.defineProperty(t,"__esModule",{value:!0});var y=Object.prototype.hasOwnProperty,l=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,d={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},f=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=p,t.processClass=u});