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

define(["require","exports","tslib","../../core/accessorSupport/decorators","../FeatureForm/FieldConfig"],(function(e,o,r,t,i){return function(e){function o(o){var r=e.call(this,o)||this;return r.direction=null,r.menuConfig=null,r.sortable=!0,r.visible=!0,r}return r.__extends(o,e),r.__decorate([t.property()],o.prototype,"direction",void 0),r.__decorate([t.property()],o.prototype,"menuConfig",void 0),r.__decorate([t.property()],o.prototype,"sortable",void 0),r.__decorate([t.property()],o.prototype,"visible",void 0),o=r.__decorate([t.subclass("esri.widgets.FeatureTable.FieldColumnConfig")],o)}(i)}));