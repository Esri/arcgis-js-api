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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./RangeDomain","./CodedValueDomain"],function(e,i,t,a,n,s,l){var o=e(null,{declaredClass:"esri.layers.Field",constructor:function(e){if(e&&i.isObject(e)){this.name=e.name,this.type=e.type,this.alias=e.alias,this.length=e.length,this.editable=e.editable,this.nullable=e.nullable,this.defaultValue=e.defaultValue,this.description=e.description?JSON.parse(e.description):null;var t=e.domain;if(t&&i.isObject(t))switch(t.type){case"range":this.domain=new s(t);break;case"codedValue":this.domain=new l(t)}}},toJson:function(){return n.fixJson({name:this.name,type:this.type,alias:this.alias,length:this.length,editable:this.editable,nullable:this.nullable,defaultValue:this.defaultValue,description:this.description?JSON.stringify(this.description):null,domain:this.domain?this.domain.toJson():null})},toJSON:function(){return this.toJson()}});return t("extend-esri")&&i.setObject("layers.Field",o,a),o});