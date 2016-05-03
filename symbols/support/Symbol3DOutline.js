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

define(["../../core/JSONSupporter","../../core/screenUtils","../../core/lang","../../Color"],function(r,e,o,t){var n=r.createSubclass({classMetadata:{properties:{color:{type:t},size:{value:1}},reader:{exclude:["transparency"]}},getDefaults:function(){return{color:new t([0,0,0,1])}},toJSON:function(){return{color:this.color?[this.color.r,this.color.g,this.color.b]:void 0,transparency:this.color?100*(1-this.color.a):void 0,size:this.size}},clone:function(){return new n({color:o.clone(this.color),size:this.size})},_colorReader:function(r,e){var t=null!=e.transparency?1-.01*e.transparency:1;return r&&o.isDefined(r[0])?[r[0],r[1],r[2],t]:void 0},_sizeSetter:e.toPt});return n});