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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./Domain"],function(e,o,r,t,n,u,d){return function(e){function o(o){var r=e.call(this,o)||this;return r.codedValues=null,r.type="coded-value",r}return r(o,e),d=o,o.prototype.writeCodedValues=function(e,o){var r=null;e&&(r=e.map(function(e){return n.fixJson(n.clone(e))})),o.codedValues=r},o.prototype.getName=function(e){var o=null;if(this.codedValues){var r=String(e);this.codedValues.some(function(e){return String(e.code)===r&&(o=e.name),!!o})}return o},o.prototype.clone=function(){return new d({codedValues:n.clone(this.codedValues),name:this.name})},t([u.property({json:{write:!0}})],o.prototype,"codedValues",void 0),t([u.writer("codedValues")],o.prototype,"writeCodedValues",null),t([u.property()],o.prototype,"type",void 0),o=d=t([u.subclass("esri.layers.support.CodedValueDomain")],o);var d}(u.declared(d))});