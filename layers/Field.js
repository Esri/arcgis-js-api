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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./RangeDomain","./CodedValueDomain"],function(e,t,i,a,n,s,l){var o=e(null,{declaredClass:"esri.layers.Field",constructor:function(e){if(e&&t.isObject(e)){this.name=e.name,this.type=e.type,this.alias=e.alias,this.length=e.length,this.editable=e.editable,this.nullable=e.nullable;var i=e.domain;if(i&&t.isObject(i))switch(i.type){case"range":this.domain=new s(i);break;case"codedValue":this.domain=new l(i)}}},toJson:function(){return n.fixJson({name:this.name,type:this.type,alias:this.alias,length:this.length,editable:this.editable,nullable:this.nullable,domain:this.domain?this.domain.toJson():null})},toJSON:function(){return this.toJson()}});return i("extend-esri")&&t.setObject("layers.Field",o,a),o});