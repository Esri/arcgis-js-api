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

define(["require","exports","tslib","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(r,e,t,o,a,p){return function(r){function e(e){var t=r.call(this,e)||this;return t.digitSeparator=!1,t.format=null,t.places=null,t}return t.__extends(e,r),t.__decorate([p.property()],e.prototype,"digitSeparator",void 0),t.__decorate([p.property({json:{read:{source:"dateFormat",reader:o.fromJSON}}})],e.prototype,"format",void 0),t.__decorate([p.property()],e.prototype,"places",void 0),e=t.__decorate([p.subclass("esri.widgets.FeatureForm.Format")],e)}(a.JSONSupport)}));