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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/cast","./FieldConfig"],(function(e,o,r,t,i,n,p){return function(e){function o(o){var r=e.call(this,o)||this;return r.description=null,r.fieldConfig=null,r.label=null,r.state="expanded",r.visibilityExpression=null,r}return r.__extends(o,e),o.prototype.castFieldConfig=function(e){return e?e.map((function(e){return e.declaredClass?e:new p(e)})):null},r.__decorate([i.property()],o.prototype,"description",void 0),r.__decorate([i.property()],o.prototype,"fieldConfig",void 0),r.__decorate([n.cast("fieldConfig")],o.prototype,"castFieldConfig",null),r.__decorate([i.property()],o.prototype,"label",void 0),r.__decorate([i.property()],o.prototype,"state",void 0),r.__decorate([i.property()],o.prototype,"visibilityExpression",void 0),o=r.__decorate([i.subclass("esri.widgets.FeatureForm.FieldGroupConfig")],o)}(t)}));