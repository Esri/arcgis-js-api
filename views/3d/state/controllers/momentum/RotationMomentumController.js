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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils","../../../support/geometryUtils"],(function(e,t,o,r,n,i,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RotationMomentumController=void 0;var l=function(e){function t(t){var o=e.call(this,t)||this;return o.interactionType=2,o}return o.__extends(t,e),Object.defineProperty(t.prototype,"center",{set:function(e){this._set("center",n.vec3f64.clone(e))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"axis",{set:function(e){this._set("axis",n.vec3f64.clone(e))},enumerable:!1,configurable:!0}),t.prototype.momentumStep=function(e,t){var o=this.momentum.value(e);s.applyRotation(t,this.center,c.axisAngle.wrapAxisAngle(this.axis,o))},o.__decorate([r.property({constructOnly:!0})],t.prototype,"momentum",void 0),o.__decorate([r.property({constructOnly:!0})],t.prototype,"center",null),o.__decorate([r.property({constructOnly:!0})],t.prototype,"axis",null),t=o.__decorate([r.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],t)}(i.MomentumController);t.RotationMomentumController=l}));