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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./PointSizeAlgorithm"],(function(e,o,t,i,r){Object.defineProperty(o,"__esModule",{value:!0});var l=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.type="fixed-size",o.size=0,o.useRealWorldSymbolSizes=null,o}var r;return t.__extends(o,e),r=o,o.prototype.clone=function(){return new r({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},t.__decorate([i.enumeration({pointCloudFixedSizeAlgorithm:"fixed-size"})],o.prototype,"type",void 0),t.__decorate([i.property({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"size",void 0),t.__decorate([i.property({type:Boolean,json:{write:!0}})],o.prototype,"useRealWorldSymbolSizes",void 0),o=r=t.__decorate([i.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],o)}(r.default);o.PointSizeFixedSizeAlgorithm=l,o.default=l}));