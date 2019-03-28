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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","dojo/_base/kernel","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(e,r,t,n,o,s,i){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"enabled",{set:function(e){o.deprecated("SceneView.constraint.collision.enabled","Use Map.ground.navigationConstraint instead","4.8"),this._set("enabled",e)},enumerable:!0,configurable:!0}),n([i.property({value:!0})],r.prototype,"enabled",null),r=n([i.subclass("esri.views.3d.constraints.CollisionConstraint")],r)}(i.declared(s));r.CollisionConstraint=a,r.default=a});