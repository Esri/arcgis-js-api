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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./Symbol3DLayer"],function(t,e,i,n,o){var s=t(o,{type:"Text",material:void 0,size:void 0,_sizeSetter:n.toPt,text:void 0,font:void 0,toJSON:function(){var t={font:this.font?e.clone(this.font):void 0,size:null!=this.size?this.size:void 0};return e.mixin(t,this.inherited(arguments)),i.fixJson(t,!0)},clone:function(){return new s({enable:this.enable,font:this.font&&this.font.clone(),material:this.material&&this.material.clone(),size:this.size,text:this.text})}});return s});