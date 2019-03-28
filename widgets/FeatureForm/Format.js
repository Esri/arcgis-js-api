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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(r,e,o,t,p,a,c){return function(r){function e(e){var o=r.call(this)||this;return o.digitSeparator=!1,o.format=null,o.places=null,o}return o(e,r),t([c.property()],e.prototype,"digitSeparator",void 0),t([c.property({json:{read:{source:"dateFormat",reader:p.fromJSON}}})],e.prototype,"format",void 0),t([c.property()],e.prototype,"places",void 0),e=t([c.subclass("esri.widgets.FeatureForm.Format")],e)}(c.declared(a))});