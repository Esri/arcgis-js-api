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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/accessorSupport/write"],function(e,r,o,t,i,c,n){var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.minScale=0,r.maxScale=0,r}return o(r,e),t([i.property({type:Number,json:{write:{overridePolicy:function(e,r,o){return n.willPropertyWrite(this,"maxScale",{},o)?{ignoreOrigin:!0}:void 0}}}})],r.prototype,"minScale",void 0),t([i.property({type:Number,json:{write:{overridePolicy:function(e,r,o){return n.willPropertyWrite(this,"minScale",{},o)?{ignoreOrigin:!0}:void 0}}}})],r.prototype,"maxScale",void 0),r=t([i.subclass("esri.layers.mixins.ScaleRangeLayer")],r)}(i.declared(c));return p});