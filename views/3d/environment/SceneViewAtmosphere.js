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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SceneViewAtmosphere=void 0;var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r.__extends(t,e),o=t,Object.defineProperty(t.prototype,"quality",{set:function(e){-1!==["low","high"].indexOf(e)&&this._set("quality",e)},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new o({quality:this.quality})},r.__decorate([i.property({type:["low","high"],value:"low"})],t.prototype,"quality",null),t=o=r.__decorate([i.subclass("esri.views.3d.environment.SceneViewAtmosphere")],t)}(o);t.SceneViewAtmosphere=n,t.default=n}));