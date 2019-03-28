// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/lang","../../core/accessorSupport/decorators","./AlgorithmicColorRamp","./ColorRamp"],function(r,o,t,e,p,c,l,s){return function(r){function o(o){var t=r.call(this)||this;return t.colorRamps=null,t.type="multipart",t}e(o,r),s=o,o.prototype.clone=function(){return new s({colorRamps:p.clone(this.colorRamps)})};var s;return t([c.property({type:[l],json:{write:!0}})],o.prototype,"colorRamps",void 0),t([c.property({type:["multipart"]})],o.prototype,"type",void 0),o=s=t([c.subclass("esri.tasks.support.MultipartColorRamp")],o)}(c.declared(s))});