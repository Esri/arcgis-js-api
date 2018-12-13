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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(e,t,r,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r(t,e),n=t,Object.defineProperty(t.prototype,"quality",{set:function(e){-1!==["low","high"].indexOf(e)&&this._set("quality",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({quality:this.quality})};var n;return o([i.property({type:String,value:"low"})],t.prototype,"quality",null),t=n=o([i.subclass("esri.views.3d.environment.SceneViewAtmosphere")],t)}(i.declared(n));t.SceneViewAtmosphere=u,t.default=u});