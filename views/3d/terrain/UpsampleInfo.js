// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/vec2f64"],(function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){this.offset=i.vec2f64.create(),this.scale=0,this.tile=null}return t.prototype.init=function(t,e,i,s){this.tile=t,this.offset[0]=e,this.offset[1]=i,this.scale=s},t.prototype.dispose=function(){this.tile=null,this.offset[0]=0,this.offset[1]=0,this.scale=0},t}();e.UpsampleInfo=s}));