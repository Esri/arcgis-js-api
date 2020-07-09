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

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../geometry/support/heightModelInfoUtils"],(function(e,t,o,r,i,n,s){Object.defineProperty(t,"__esModule",{value:!0}),t.LayerView3D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return o.__extends(t,e),t.prototype.destroy=function(){this.view=null},t.prototype.postscript=function(t){e.prototype.postscript.call(this,t),s.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return r.create((function(t,o){i.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",(function(){var r=s.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);r?o(r):t()}))}))},o.__decorate([n.property()],t.prototype,"view",void 0),o.__decorate([n.property()],t.prototype,"slicePlaneEnabled",void 0),t=o.__decorate([n.subclass("esri.views.3d.layers.LayerView3D")],t)}(e)}}));