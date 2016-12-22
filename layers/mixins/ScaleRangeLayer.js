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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor"],function(e,r,t,o,a,c){function i(){return c}var n=function(e){function r(){e.apply(this,arguments),this.minScale=0,this.maxScale=0}return t(r,e),o([a.property({json:{writeWith:["maxScale"],writable:!0}})],r.prototype,"minScale",void 0),o([a.property({json:{writeWith:["minScale"],writable:!0}})],r.prototype,"maxScale",void 0),r=o([a.subclass("esri.layers.mixins.ScaleRangeLayer")],r)}(a.declared(i()));return n});