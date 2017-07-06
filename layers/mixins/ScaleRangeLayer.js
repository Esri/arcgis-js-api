// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/accessorSupport/write"],function(r,e,o,i,t,c,n){var a=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.minScale=0,e.maxScale=0,e}return o(e,r),e}(t.declared(c));return i([t.property({json:{write:{overridePolicy:function(r,e,o){return n.willPropertyWrite(this,"maxScale",{},o)?{ignoreOrigin:!0}:void 0}}}})],a.prototype,"minScale",void 0),i([t.property({json:{write:{overridePolicy:function(r,e,o){return n.willPropertyWrite(this,"minScale",{},o)?{ignoreOrigin:!0}:void 0}}}})],a.prototype,"maxScale",void 0),a=i([t.subclass("esri.layers.mixins.ScaleRangeLayer")],a)});