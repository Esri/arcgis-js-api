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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./LayerView"],(function(e,r,t,o,n){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filter=null,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"availableFields",{get:function(){return[]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(e){throw new Error("Not implemented")},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!1},enumerable:!1,configurable:!0}),r.prototype.highlight=function(e){throw new Error("Not implemented")},r.prototype.queryFeatures=function(e){throw new Error("Not implemented")},r.prototype.queryObjectIds=function(e){throw new Error("Not implemented")},r.prototype.queryFeatureCount=function(e){throw new Error("Not implemented")},r.prototype.createQuery=function(){throw new Error("Not implemented")},r.prototype.queryExtent=function(e){throw new Error("Not implemented")},t.__decorate([o.property()],r.prototype,"availableFields",null),t.__decorate([o.property()],r.prototype,"maximumNumberOfFeatures",null),t.__decorate([o.property({readOnly:!0})],r.prototype,"maximumNumberOfFeaturesExceeded",null),t.__decorate([o.property()],r.prototype,"filter",void 0),r}(n)}));