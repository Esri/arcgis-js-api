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

define(["require","exports","tslib","../../../../core/accessorSupport/decorators","./Deconflictor"],(function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.visibilityGroup=1,t.iconMarginFactor=0,t._lastDeconfliction=0,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"viewState",{get:function(){return this.parent.viewState},enumerable:!0,configurable:!0}),t.prototype.update=function(t){if(!this.parent.needsUpdate()){var r=performance.now();(2===t.state||r-this._lastDeconfliction>2e3)&&(e.prototype.update.call(this,t),0===this.state&&(this._lastDeconfliction=r))}},t.prototype.enabledChanged=function(e,t){this.modifyGraphics(t,e.labelsEnabled)},t.prototype.getGraphicsLayers=function(e){return e.labelGraphics},r.__decorate([o.property({constructOnly:!0})],t.prototype,"parent",void 0),t=r.__decorate([o.subclass("esri.views.3d.layers.graphics.LabelDeconflictor")],t)}(i.Deconflictor);t.LabelDeconflictor=n}));