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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/deprecate","../../../core/Logger","../../../core/accessorSupport/decorators"],(function(e,r,t,o,n,s,a,c){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"enabled",{set:function(e){s.deprecated(a.getLogger(this.declaredClass),"SceneView.constraint.collision.enabled",{replacement:"Map.ground.navigationConstraint",version:"4.8"}),this._set("enabled",e)},enumerable:!0,configurable:!0}),o([c.property({value:!0})],r.prototype,"enabled",null),r=o([c.subclass("esri.views.3d.constraints.CollisionConstraint")],r)}(c.declared(n));r.CollisionConstraint=i,r.default=i}));