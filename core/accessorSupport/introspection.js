// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./utils","./ensureType","./extensions"],function(e,t,a,r,s){function o(e){var a=e.declaredClass;return null!=a&&null!=t.prototypeMetadatas[a]}function n(e){var o=e.declaredClass,n=e.properties;if(o||(o=e.declaredClass="accessor_"+v++),t.prototypeMetadatas[o])return t.prototypeMetadatas[o];n||(n=e.properties={});for(var c=0,l=Object.getOwnPropertyNames(n);c<l.length;c++){var u=l[c],f=n[u],b=typeof f;null==f?n[u]={value:f}:"object"===b?a.getProperties(f)||f instanceof Date?n[u]={type:f.constructor,value:f}:Array.isArray(f)&&(n[u]={type:f,value:null}):"boolean"===b?n[u]={type:Boolean,value:f}:"string"===b?n[u]={type:String,value:f}:"number"===b?n[u]={type:Number,value:f}:"function"===b&&(n[u]={type:f,value:null})}for(var g=0,M=Object.getOwnPropertyNames(e);g<M.length;g++){var h=M[g],_=e[h],O=void 0,u=void 0,j=void 0;(O=p.exec(h))?(u=O[1],j=d[O[2]]):(O=y.exec(h))&&(u=O[2][0].toLowerCase()+O[2].substr(1),j=O[1].toLowerCase()),u&&j&&(n[u]||(n[u]={}),"read"===j?n[u].json?n[u].json.read=_:n[u].json={read:_}:n[u][j]=_)}for(var m=0,C=Object.getOwnPropertyNames(n);m<C.length;m++){var u=C[m],P=n[u],j=P.type;if(void 0===P.value&&i.call(e,u)&&(P.value=e[u]),!P.cast&&j)switch(j){case Number:P.cast=r.ensureNumber;break;case Boolean:P.cast=r.ensureBoolean;break;case String:P.cast=r.ensureString;break;case Date:P.cast=r.ensureDate;break;default:P.cast=Array.isArray(j)?r.ensureArray(j[0]):r.ensureType(j)}}return s.processPrototypeMetadatas(n,o),t.prototypeMetadatas[o]=n,n}function c(e){var r=e.prototype.declaredClass;if(t.classMetadatas[r])return t.classMetadatas[r];for(var o=e._meta.bases,c=[],l=o.length-1;l>=0;l--){var u=o[l].prototype,i=n(u);i&&c.push(i)}var p=c.reduce(a.merge,{});return s.processClassMetadatas(p,r),t.classMetadatas[r]=p,p}function l(e){var a=e.declaredClass;return t.classMetadatas[a]?t.classMetadatas[a]:null}function u(e){for(var t=c(e),a={},r=function(e){var r=t[e];a[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):r.value},set:function(t){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});if(!Object.isFrozen(this))if(a.initialized){if(r.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);a.set(e,t)}else a.setDefault(e,t)}}},s=0,o=Object.getOwnPropertyNames(t);s<o.length;s++){var n=o[s];r(n)}return Object.defineProperties(e.prototype,a),e}var i=Object.prototype.hasOwnProperty,p=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Caster)$/,d={Getter:"get",Setter:"set",Reader:"read",Caster:"cast"},y=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.prototypeMetadatas={},t.classMetadatas={};var v=0;t.hasPrototypeMetadata=o,t.createPrototypeMetadata=n,t.createClassMetadata=c,t.getInstanceMetadatas=l,t.defineProperties=u});