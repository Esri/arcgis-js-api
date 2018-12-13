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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/cast","./FieldConfig"],function(e,r,o,t,i,n,p,c){return function(e){function r(r){var o=e.call(this)||this;return o.description=null,o.fieldConfig=null,o.label=null,o}return o(r,e),r.prototype.castFieldConfig=function(e){return e?e.map(function(e){return e.declaredClass?e:new c(e)}):null},t([n.property()],r.prototype,"description",void 0),t([n.property()],r.prototype,"fieldConfig",void 0),t([p.cast("fieldConfig")],r.prototype,"castFieldConfig",null),t([n.property()],r.prototype,"label",void 0),r=t([n.subclass("esri.widgets.FeatureForm.FieldGroupConfig")],r)}(n.declared(i))});