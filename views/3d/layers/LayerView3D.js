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

define(["require","exports","tslib","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../geometry/support/heightModelInfoUtils"],(function(e,t,r,i,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LayerView3D=void 0,t.LayerView3D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r.__extends(t,e),t.prototype.postscript=function(t){e.prototype.postscript.call(this,t),s.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t;return r.__generator(this,(function(r){switch(r.label){case 0:return e=i.whenFalseOnce(this.view.defaultsFromMap,"isHeightModelInfoSearching"),this.handles.add(e),[4,e];case 1:if(r.sent(),t=s.rejectLayerError(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))throw t;return[2]}}))}))},r.__decorate([o.property()],t.prototype,"view",void 0),r.__decorate([o.property()],t.prototype,"slicePlaneEnabled",void 0),t=r.__decorate([o.subclass("esri.views.3d.layers.LayerView3D")],t)}(e)}}));