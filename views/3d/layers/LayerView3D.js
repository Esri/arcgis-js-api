// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../geometry/support/heightModelInfoUtils"],function(e,t,r,o,i,n,s,p){Object.defineProperty(t,"__esModule",{value:!0}),t.LayerView3D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r(t,e),t.prototype.destroy=function(){this.view=null},t.prototype.postscript=function(e){this.inherited(arguments),p.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return i.create(function(t,r){var o=function(){var o=p.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);o?r(o):t()};n.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",o)})},o([s.property()],t.prototype,"view",void 0),o([s.property()],t.prototype,"slicePlaneEnabled",void 0),t=o([s.subclass("esri.views.3d.layers.LayerView3D")],t)}(s.declared(e))}});