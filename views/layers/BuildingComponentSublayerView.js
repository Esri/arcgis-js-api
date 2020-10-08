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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,t,r,o,n){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sublayer=null,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"updating",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"availableFields",{get:function(){return[]},enumerable:!1,configurable:!0}),t.prototype.queryFeatures=function(e){throw new Error("Not implemented")},t.prototype.queryObjectIds=function(e){throw new Error("Not implemented")},t.prototype.queryFeatureCount=function(e){throw new Error("Not implemented")},t.prototype.createQuery=function(){throw new Error("Not implemented")},t.prototype.queryExtent=function(e){throw new Error("Not implemented")},t.prototype.highlight=function(e){throw new Error("Not implemented")},r.__decorate([n.property()],t.prototype,"sublayer",void 0),r.__decorate([n.property()],t.prototype,"availableFields",null),t}(o)}));