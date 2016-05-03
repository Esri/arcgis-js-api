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

define(["../core/declare","dojo/_base/lang","../core/lang","./Symbol3DLayer"],function(e,i,t,a){var n=e(a,{classMetadata:{reader:{exclude:["width"],add:["size"]}},type:"Path",size:0,_sizeReader:function(e,i){return e||i.width||0},material:null,toJSON:function(){var e={size:this.size};return i.mixin(e,this.inherited(arguments)),t.fixJson(e,!0)},clone:function(){return new n({enable:this.enable,material:this.material&&this.material.clone(),size:this.size})}});return n});