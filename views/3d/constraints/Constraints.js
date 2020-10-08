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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators","./AltitudeConstraint","./ClipDistanceConstraint","./CollisionConstraint","./TiltConstraint"],(function(t,e,o,r,i,n,s,a,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Constraints=void 0;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tilt=new l.default,e.altitude=new n.default,e.clipDistance=new s.default,e.collision=new a.default,e}return o.__extends(e,t),o.__decorate([i.property({type:l.default})],e.prototype,"tilt",void 0),o.__decorate([i.property({type:n.default})],e.prototype,"altitude",void 0),o.__decorate([i.property({type:s.default})],e.prototype,"clipDistance",void 0),o.__decorate([i.property({type:a.default})],e.prototype,"collision",void 0),e=o.__decorate([i.subclass("esri.views.3d.constraints.Constraints")],e)}(r);e.Constraints=p,e.default=p}));