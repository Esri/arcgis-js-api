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

define(["require","exports","tslib","../../../core/Accessor","../../../core/deprecate","../../../core/Logger","../../../core/accessorSupport/decorators","../state/Constraints"],(function(e,t,o,r,n,a,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AltitudeConstraint=void 0;var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.min=s.AltitudeDefault.min,t.max=s.AltitudeDefault.max,t}return o.__extends(t,e),Object.defineProperty(t.prototype,"mode",{get:function(){return n.deprecated(a.getLogger(this.declaredClass),"esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.",{version:"4.6"}),"manual"},set:function(e){n.deprecated(a.getLogger(this.declaredClass),"esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.",{version:"4.6"})},enumerable:!1,configurable:!0}),o.__decorate([i.property({type:Number})],t.prototype,"min",void 0),o.__decorate([i.property({type:Number})],t.prototype,"max",void 0),t=o.__decorate([i.subclass("esri.views.3d.constraints.AltitudeConstraint")],t)}(r);t.AltitudeConstraint=d,t.default=d}));