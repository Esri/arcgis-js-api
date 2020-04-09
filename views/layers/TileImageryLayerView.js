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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/accessorSupport/decorators"],(function(e,r,t,n,o,i,p,a){Object.defineProperty(r,"__esModule",{value:!0}),r.TileImageryLayerView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.layer=null,r.view=null,r.datumTransformation=null,r}return t(r,e),Object.defineProperty(r.prototype,"hasTilingEffects",{get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment},enumerable:!0,configurable:!0}),r.prototype.fetchPopupFeatures=function(e,r){return i(this,void 0,void 0,(function(){return o(this,(function(e){throw new p("rasterlayerview:fetchpopupfeatures","not implemented")}))}))},n([a.property()],r.prototype,"layer",void 0),n([a.property()],r.prototype,"view",void 0),n([a.property({readOnly:!0,dependsOn:["layer.renderer"]})],r.prototype,"hasTilingEffects",null),r=n([a.subclass("esri.views.layers.TileImageryLayerView")],r)}(a.declared(e))}}));