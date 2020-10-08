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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureReduction=void 0;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=null,t}return r.__extends(t,e),r.__decorate([u.property({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=r.__decorate([u.subclass("esri.layers.support.FeatureReduction")],t)}(o.JSONSupport);t.FeatureReduction=s,t.default=s}));