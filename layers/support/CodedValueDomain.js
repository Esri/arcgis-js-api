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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./CodedValue","./Domain"],(function(e,o,t,r,n,a,d){return function(e){function o(o){var t=e.call(this,o)||this;return t.codedValues=null,t.type="coded-value",t}var d;return t.__extends(o,e),d=o,o.prototype.getName=function(e){var o=null;if(this.codedValues){var t=String(e);this.codedValues.some((function(e){return String(e.code)===t&&(o=e.name),!!o}))}return o},o.prototype.clone=function(){return new d({codedValues:r.clone(this.codedValues),name:this.name})},t.__decorate([n.property({type:[a.default],json:{write:!0}})],o.prototype,"codedValues",void 0),t.__decorate([n.enumeration({codedValue:"coded-value"})],o.prototype,"type",void 0),o=d=t.__decorate([n.subclass("esri.layers.support.CodedValueDomain")],o)}(d)}));