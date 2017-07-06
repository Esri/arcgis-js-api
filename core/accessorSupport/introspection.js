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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./utils","./metadata","./ensureType","./extensions","./decorators/cast"],function(e,t,r,a,s,o,n,c){function i(e){for(var t=e.declaredClass,c=e.properties||{},i=0,p=Object.getOwnPropertyNames(c);i<p.length;i++){var v=p[i],b=c[v],g=typeof b;null==b?s.setPropertyMetadata(e,v,{value:b}):Array.isArray(b)?s.setPropertyMetadata(e,v,{type:[b[0]],value:null}):"object"===g?a.getProperties(b)||b instanceof Date?s.setPropertyMetadata(e,v,{type:b.constructor,value:b}):s.setPropertyMetadata(e,v,b):"boolean"===g?s.setPropertyMetadata(e,v,{type:Boolean,value:b}):"string"===g?s.setPropertyMetadata(e,v,{type:String,value:b}):"number"===g?s.setPropertyMetadata(e,v,{type:Number,value:b}):"function"===g&&s.setPropertyMetadata(e,v,{type:b,value:null})}for(var f=0,P=Object.getOwnPropertyNames(e);f<P.length;f++){var O=P[f],_=e[O],M=void 0,v=void 0,j=void 0;if((M=u.exec(O))?(v=M[1],j=d[M[2]]):(M=y.exec(O))&&(v=M[2][0].toLowerCase()+M[2].substr(1),j=M[1].toLowerCase()),v&&j){var h=s.getPropertyMetadata(e,v);r.setObject(j,_,h)}}for(var m=0,w=Object.getOwnPropertyNames(s.getPropertiesMetadata(e));m<w.length;m++){var v=w[m],C=s.getPropertyMetadata(e,v),j=C.type;if(void 0===C.value&&l.call(e,v)&&(C.value=e[v]),!C.cast&&j)switch(j){case Number:C.cast=o.ensureNumber;break;case Boolean:C.cast=o.ensureBoolean;break;case String:C.cast=o.ensureString;break;case Date:C.cast=o.ensureDate;break;default:Array.isArray(j)?C.cast=o.ensureArray(j[0]):C.cast=o.ensureType(j)}}return n.processPrototypeMetadatas(s.getPropertiesMetadata(e),t),s.getPropertiesMetadata(e)}function p(e){for(var t=e.prototype,r=t.declaredClass,o=e._meta.bases,i={},p=o.length-1;p>=0;p--)a.merge(i,s.getMetadata(o[p].prototype));var l=i.properties;n.processClassMetadatas(l,r),Object.defineProperty(e,"__accessorMetadata__",{value:l});for(var u={},d=function(e){var t=l[e];u[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}},y=0,v=Object.getOwnPropertyNames(l);y<v.length;y++){var b=v[y];d(b)}if(Object.defineProperties(e.prototype,u),i.parameters)for(var g=Object.getOwnPropertyNames(i.parameters),f=0,P=g;f<P.length;f++){var O=P[f],_=Object.getOwnPropertyDescriptor(t,O)||{value:t[O]},M=c.autocastMethod(t,O,_);M&&Object.defineProperty(t,O,M)}return i}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.prototype.hasOwnProperty,u=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Writer|Caster)$/,d={Getter:"get",Setter:"set",Reader:"json.read.reader",Writer:"json.write.writer",Caster:"cast"},y=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=i,t.processClass=p});