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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./utils","./metadata","./ensureType","./extensions","./decorators/cast"],function(e,t,r,a,s,o,n){function c(e){var t=e.declaredClass,n=e.properties;n=n||{};for(var c=0,p=Object.getOwnPropertyNames(n);c<p.length;c++){var y=p[c],g=n[y],v=typeof g;null==g?a.setPropertyMetadata(e,y,{value:g}):Array.isArray(g)?a.setPropertyMetadata(e,y,{type:[g[0]],value:null}):"object"===v?r.getProperties(g)||g instanceof Date?a.setPropertyMetadata(e,y,{type:g.constructor,value:g}):a.setPropertyMetadata(e,y,g):"boolean"===v?a.setPropertyMetadata(e,y,{type:Boolean,value:g}):"string"===v?a.setPropertyMetadata(e,y,{type:String,value:g}):"number"===v?a.setPropertyMetadata(e,y,{type:Number,value:g}):"function"===v&&a.setPropertyMetadata(e,y,{type:g,value:null})}for(var P=0,b=Object.getOwnPropertyNames(e);P<b.length;P++){var f=b[P],M=e[f],O=void 0,y=void 0,_=void 0;(O=d.exec(f))?(y=O[1],_=l[O[2]]):(O=u.exec(f))&&(y=O[2][0].toLowerCase()+O[2].substr(1),_=O[1].toLowerCase()),y&&_&&("read"===_?a.getPropertyMetadata(e,y).json?a.getPropertyMetadata(e,y).json.read=M:a.getPropertyMetadata(e,y).json={read:M}:a.getPropertyMetadata(e,y)[_]=M)}for(var h=0,j=Object.getOwnPropertyNames(a.getPropertiesMetadata(e));h<j.length;h++){var y=j[h],m=a.getPropertyMetadata(e,y),_=m.type;if(void 0===m.value&&i.call(e,y)&&(m.value=e[y]),!m.cast&&_)switch(_){case Number:m.cast=s.ensureNumber;break;case Boolean:m.cast=s.ensureBoolean;break;case String:m.cast=s.ensureString;break;case Date:m.cast=s.ensureDate;break;default:Array.isArray(_)?m.cast=s.ensureArray(_[0]):m.cast=s.ensureType(_)}}return o.processPrototypeMetadatas(a.getPropertiesMetadata(e),t),a.getPropertiesMetadata(e)}function p(e){for(var t=e.prototype,s=t.declaredClass,c=e._meta.bases,p={},i=c.length-1;i>=0;i--)r.merge(p,a.getMetadata(c[i].prototype));var d=p.properties;o.processClassMetadatas(d,s),Object.defineProperty(e,"__accessorMetadata__",{value:d});for(var l={},u=function(e){var t=d[e];l[e]={enumerable:!0,configurable:!0,get:function(){return this.__accessor__?this.__accessor__.get(e):t.value},set:function(r){var a=this.__accessor__;if(!a)return void Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(a.initialized&&t.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+e+"' of "+this.declaredClass);a.set(e,r)}}}},y=0,g=Object.getOwnPropertyNames(d);y<g.length;y++){var v=g[y];u(v)}if(Object.defineProperties(e.prototype,l),p.parameters)for(var P=Object.getOwnPropertyNames(p.parameters),b=0,f=P;b<f.length;b++){var M=f[b],O=Object.getOwnPropertyDescriptor(t,M)||{value:t[M]},_=n.autocastMethod(t,M,O);_&&Object.defineProperty(t,M,_)}return p}var i=Object.prototype.hasOwnProperty,d=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader|Caster)$/,l={Getter:"get",Setter:"set",Reader:"read",Caster:"cast"},u=/^_(set|get)([a-zA-Z0-9]+)Attr$/;t.processPrototype=c,t.processClass=p});