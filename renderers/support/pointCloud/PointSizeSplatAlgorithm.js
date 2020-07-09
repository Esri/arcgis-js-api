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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./PointSizeAlgorithm"],(function(e,t,o,r,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="splat",t.scaleFactor=1,t}var a;return o.__extends(t,e),a=t,t.prototype.clone=function(){return new a({scaleFactor:this.scaleFactor})},o.__decorate([r.enumeration({pointCloudSplatAlgorithm:"splat"})],t.prototype,"type",void 0),o.__decorate([r.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],t.prototype,"scaleFactor",void 0),t=a=o.__decorate([r.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],t)}(a.default);t.PointSizeSplatAlgorithm=l,t.default=l}));