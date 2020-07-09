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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","./Format"],(function(e,o,r,t,p,i){return function(e){function o(o){var r=e.call(this,o)||this;return r.description=null,r.domain=null,r.editable=!0,r.editorType=null,r.format=null,r.hint=null,r.label=null,r.maxLength=-1,r.minLength=-1,r.name=null,r.required=!1,r.requiredExpression=null,r.visibilityExpression=null,r}return r.__extends(o,e),r.__decorate([p.property()],o.prototype,"description",void 0),r.__decorate([p.property()],o.prototype,"domain",void 0),r.__decorate([p.property()],o.prototype,"editable",void 0),r.__decorate([p.property()],o.prototype,"editorType",void 0),r.__decorate([p.property({type:i})],o.prototype,"format",void 0),r.__decorate([p.property()],o.prototype,"hint",void 0),r.__decorate([p.property()],o.prototype,"label",void 0),r.__decorate([p.property()],o.prototype,"maxLength",void 0),r.__decorate([p.property()],o.prototype,"minLength",void 0),r.__decorate([p.property()],o.prototype,"name",void 0),r.__decorate([p.property()],o.prototype,"required",void 0),r.__decorate([p.property()],o.prototype,"requiredExpression",void 0),r.__decorate([p.property()],o.prototype,"visibilityExpression",void 0),o=r.__decorate([p.subclass("esri.widgets.FeatureForm.FieldConfig")],o)}(t)}));