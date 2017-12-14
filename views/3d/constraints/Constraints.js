// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","./AltitudeConstraint","./ClipDistanceConstraint","./TiltConstraint","./CollisionConstraint"],function(t,e,r,o,i,n,p,l,s,a){Object.defineProperty(e,"__esModule",{value:!0});var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tilt=new s["default"],e.altitude=new p["default"],e.clipDistance=new l["default"],e.collision=new a["default"],e}return r(e,t),o([i.property({type:s["default"]})],e.prototype,"tilt",void 0),o([i.property({type:p["default"]})],e.prototype,"altitude",void 0),o([i.property({type:l["default"]})],e.prototype,"clipDistance",void 0),o([i.property({type:a["default"]})],e.prototype,"collision",void 0),e=o([i.subclass("esri.views.3d.constraints.Constraints")],e)}(i.declared(n));e.Constraints=d,e["default"]=d});