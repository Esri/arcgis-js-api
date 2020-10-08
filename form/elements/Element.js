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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Element=t.ElementMixin=void 0,t.ElementMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.description=null,t.label=null,t.visibilityExpression=null,t}return r.__extends(t,e),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"visibilityExpression",void 0),t=r.__decorate([n.subclass("esri.form.elements.ElementMixin")],t)}(e)};var s=function(e){function t(t){var r=e.call(this,t)||this;return r.type=null,r}return r.__extends(t,e),r.__decorate([i.property()],t.prototype,"type",void 0),t=r.__decorate([n.subclass("esri.form.elements.Element")],t)}(t.ElementMixin(o.JSONSupport));t.Element=s}));