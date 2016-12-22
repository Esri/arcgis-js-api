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

define(["dojo/has"],function(e){var t=e("dojo-debug-messages"),r=function(e,t){this.name=e,t&&this.mixIn(t)};return r.prototype={name:null,getter:null,setter:null,reader:null,getterArity:0,setterArity:0,dependsOn:null,chain:null,value:void 0,readOnly:!1,copy:null,type:null,mixIn:function(e){if(e.hasOwnProperty("getter")&&(this.getter=e.getter,this.getterArity=e.getter.length),e.hasOwnProperty("setter")&&(this.setter=e.setter,this.setterArity=e.setter.length),e.hasOwnProperty("reader")&&(this.reader=e.reader),e.hasOwnProperty("value")&&(this.value=e.value),e.hasOwnProperty("readOnly")&&(this.readOnly=e.readOnly),e.hasOwnProperty("copy")&&(this.copy=e.copy),e.hasOwnProperty("type")&&(this.type=e.type),e.hasOwnProperty("dependsOn")&&(this.dependsOn=this.dependsOn?this.dependsOn.concat(e.dependsOn):e.dependsOn.concat()),e.hasOwnProperty("json")){var t=this.json;t||(this.json=t={}),e.json.hasOwnProperty("ignore")&&(t.ignore=e.json.ignore),e.json.readFrom&&(t.readFrom=t.readFrom?t.readFrom.concat(e.json.readFrom):e.json.readFrom.slice())}e.hasOwnProperty("chain")&&(this.chain?this.chain=this.chain.concat(e.chain.filter(function(e){return-1===this.chain.indexOf(e)},this)):this.chain=e.chain.concat())},getDescriptor:function(){var e=this,r={enumerable:!0,configurable:!0};return r.get=function(){return this._accessorProps?this._accessorProps.get(e.name):void 0},r.set=function(r){var n=this._accessorProps,s=e.name;if(!n)return void Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:r});if(!Object.isFrozen(this)){if(e.readOnly)throw new TypeError("Cannot assign to read only property '"+s+"' of "+this.declaredClass);if(t&&n.access[s])throw new Error("["+this.declaredClass+"] _"+s+"Setter function is trying to write the property");if(!e.setter&&n.get(s)===r)return r;n.access[s]=!0,n.set(s,r),n.access[s]=!1}},r}},r});