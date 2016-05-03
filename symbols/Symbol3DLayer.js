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

define(["dojo/_base/lang","../core/lang","../core/JSONSupporter","../Color"],function(e,o,r,t){var a=r.createSubclass({classMetadata:{properties:{color:{type:t}},reader:{exclude:["transparency"]}},color:void 0,toJSON:function(){return{color:this.color?[this.color.r,this.color.g,this.color.b]:void 0,transparency:this.color?100*(1-this.color.a):void 0}},_colorReader:function(e,r){var t=null!=r.transparency?1-.01*r.transparency:1;return e&&o.isDefined(e[0])?[e[0],e[1],e[2],t]:void 0},clone:function(){return new a(o.clone({color:this.color}))}}),n=r.createSubclass({classMetadata:{properties:{material:{type:a},enable:{}}},enable:!0,type:null,material:void 0,_materialReader:function(e){var o=new a;return o.read(e),o},toJSON:function(){return{type:this.type,enable:this.enable,material:this.material?this.material.toJSON():void 0,elevationInfo:this.elevationInfo?e.clone(this.elevationInfo):void 0}}});return n});