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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(e,r,o,t,s,p){return new(function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.SCHEDULER_LOG_SLOW_TASKS=!1,r}return t(r,e),o([p.property()],r.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),r=o([p.subclass("esri.views.support.DebugFlags")],r)}(p.declared(s)))});