// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./Format"],function(e,r,o,t,p,i,d){return function(e){function r(r){var o=e.call(this)||this;return o.description=null,o.domain=null,o.editable=!0,o.editorType=null,o.format=null,o.hint=null,o.label=null,o.maxLength=-1,o.required=!1,o.visible=!0,o}return o(r,e),t([i.property()],r.prototype,"description",void 0),t([i.property()],r.prototype,"domain",void 0),t([i.property()],r.prototype,"editable",void 0),t([i.property()],r.prototype,"editorType",void 0),t([i.property({type:d})],r.prototype,"format",void 0),t([i.property()],r.prototype,"hint",void 0),t([i.property()],r.prototype,"label",void 0),t([i.property()],r.prototype,"maxLength",void 0),t([i.property()],r.prototype,"required",void 0),t([i.property()],r.prototype,"visible",void 0),r=t([i.subclass("esri.widgets.FeatureForm.FieldOptions")],r)}(i.declared(p))});