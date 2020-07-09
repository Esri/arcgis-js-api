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

define(["require","exports","tslib","../../../core/Accessor","../../../core/deprecate","../../../core/Logger","../../../core/accessorSupport/decorators"],(function(e,t,r,n,o,s,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"enabled",{set:function(e){o.deprecated(s.getLogger(this.declaredClass),"SceneView.constraint.collision.enabled",{replacement:"Map.ground.navigationConstraint",version:"4.8"}),this._set("enabled",e)},enumerable:!0,configurable:!0}),r.__decorate([i.property({value:!0})],t.prototype,"enabled",null),t=r.__decorate([i.subclass("esri.views.3d.constraints.CollisionConstraint")],t)}(n);t.CollisionConstraint=a,t.default=a}));