// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./Domain","../../core/lang"],function(e,r,o,t,n,u,d){var a=function(e){function r(r){var o=e.call(this,r)||this;return o.codedValues=null,o.type="coded-value",o}return o(r,e),r.prototype.writeCodedValues=function(e,r){var o=null;e&&(o=e.map(function(e){return d.fixJson(d.clone(e))})),r.codedValues=o},r.prototype.getName=function(e){var r=null;if(this.codedValues){var o=String(e);this.codedValues.some(function(e){return String(e.code)===o&&(r=e.name),!!r})}return r},r}(n.declared(u));return t([n.property({json:{write:!0}})],a.prototype,"codedValues",void 0),t([n.writer("codedValues")],a.prototype,"writeCodedValues",null),t([n.property()],a.prototype,"type",void 0),a=t([n.subclass("esri.layers.support.CodedValueDomain")],a)});