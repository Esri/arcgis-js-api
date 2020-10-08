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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/cast","./FieldConfig"],(function(e,o,t,r,i,n,p){"use strict";return function(e){function o(o){var t=e.call(this,o)||this;return t.description=null,t.fieldConfig=null,t.label=null,t.state="expanded",t.visibilityExpression=null,t}return t.__extends(o,e),o.prototype.castFieldConfig=function(e){return e?e.map((function(e){return e.declaredClass?e:new p(e)})):null},t.__decorate([i.property()],o.prototype,"description",void 0),t.__decorate([i.property()],o.prototype,"fieldConfig",void 0),t.__decorate([n.cast("fieldConfig")],o.prototype,"castFieldConfig",null),t.__decorate([i.property()],o.prototype,"label",void 0),t.__decorate([i.property()],o.prototype,"state",void 0),t.__decorate([i.property()],o.prototype,"visibilityExpression",void 0),o=t.__decorate([i.subclass("esri.widgets.FeatureForm.FieldGroupConfig")],o)}(r)}));