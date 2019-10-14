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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","./AltitudeConstraint","./ClipDistanceConstraint","./CollisionConstraint","./TiltConstraint"],function(t,e,o,r,i,n,p,l,s,a){Object.defineProperty(e,"__esModule",{value:!0});var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tilt=new a.default,e.altitude=new p.default,e.clipDistance=new l.default,e.collision=new s.default,e}return o(e,t),r([n.property({type:a.default})],e.prototype,"tilt",void 0),r([n.property({type:p.default})],e.prototype,"altitude",void 0),r([n.property({type:l.default})],e.prototype,"clipDistance",void 0),r([n.property({type:s.default})],e.prototype,"collision",void 0),e=r([n.subclass("esri.views.3d.constraints.Constraints")],e)}(n.declared(i));e.Constraints=d,e.default=d});