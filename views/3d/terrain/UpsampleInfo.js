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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../support/ObjectPool","../lib/glMatrix"],function(t,i){function e(t,i,e,s){this.offset=o.create(),this.scale=0,this.tile=null,void 0!==t&&this.init(t,i,e,s)}var o=i.vec2d;return e.prototype.init=function(t,i,e,o){this.tile=t,this.offset[0]=i,this.offset[1]=e,this.scale=o},e.Pool=new t(400,e),e});