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

define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(e,t,i,h){var r=e(h,{type:"Object",material:void 0,resource:void 0,width:void 0,height:void 0,depth:void 0,anchor:void 0,toJSON:function(){var e={width:this.width,height:this.height,depth:this.depth,anchor:this.anchor,resource:t.clone(this.resource)};return t.mixin(e,this.inherited(arguments)),i.fixJson(e,!0)},clone:function(){return new r({anchor:this.anchor,depth:this.depth,enable:this.enable,height:this.height,material:this.material&&this.material.clone(),resource:i.clone(this.resource),width:this.width})}});return r});