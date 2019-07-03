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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../geometry/support/heightModelInfoUtils","../../layers/LayerView"],function(e,r,t,o,i,n,s,a,p){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.slicePlaneEnabled=!1,r.supportsHeightUnitConversion=!1,r}return t(r,e),r.prototype.postscript=function(e){this.inherited(arguments),a.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},r.prototype._validateHeightModelInfo=function(){var e=this;return i.create(function(r,t){var o=function(){var o=a.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);o?t(o):r()};n.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",o)})},o([s.property()],r.prototype,"view",void 0),o([s.property()],r.prototype,"slicePlaneEnabled",void 0),r=o([s.subclass("esri.views.3d.layers.LayerView3D")],r)}(s.declared(p))});