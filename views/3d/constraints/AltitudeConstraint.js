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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/deprecate","../../../core/Logger","../../../core/accessorSupport/decorators","../state/Constraints"],(function(e,t,r,o,a,n,s,i,d){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.min=d.AltitudeDefault.min,t.max=d.AltitudeDefault.max,t}return r(t,e),Object.defineProperty(t.prototype,"mode",{get:function(){return n.deprecated(s.getLogger(this.declaredClass),"esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.",{version:"4.6"}),"manual"},set:function(e){n.deprecated(s.getLogger(this.declaredClass),"esri.views.SceneView.constraints.altitude.mode is deprecated. The altitude constraint no longer applies to local scenes and does not have an automatic mode anymore.",{version:"4.6"})},enumerable:!0,configurable:!0}),o([i.property({type:Number})],t.prototype,"min",void 0),o([i.property({type:Number})],t.prototype,"max",void 0),t=o([i.subclass("esri.views.3d.constraints.AltitudeConstraint")],t)}(i.declared(a));t.AltitudeConstraint=c,t.default=c}));