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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./AlgorithmicColorRamp","./ColorRamp"],(function(r,o,t,e,p,s,c){"use strict";return function(r){function o(o){var t=r.call(this,o)||this;return t.colorRamps=null,t.type="multipart",t}var c;return t.__extends(o,r),c=o,o.prototype.clone=function(){return new c({colorRamps:e.clone(this.colorRamps)})},t.__decorate([p.property({type:[s],json:{write:!0}})],o.prototype,"colorRamps",void 0),t.__decorate([p.property({type:["multipart"]})],o.prototype,"type",void 0),o=c=t.__decorate([p.subclass("esri.tasks.support.MultipartColorRamp")],o)}(c)}));