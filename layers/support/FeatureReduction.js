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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,t,o,u){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=null,r}return t.__extends(r,e),t.__decorate([u.property({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),r=t.__decorate([u.subclass("esri.layers.support.FeatureReduction")],r)}(o.JSONSupport);r.FeatureReduction=p,r.default=p}));