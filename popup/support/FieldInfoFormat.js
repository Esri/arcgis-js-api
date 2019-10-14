// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../intl/date","../../intl/number"],function(t,r,e,o,a,p,i,n,s,c){return function(t){function r(r){var e=t.call(this)||this;return e.dateFormat=null,e.digitSeparator=!1,e.places=null,e}e(r,t),p=r,r.prototype.clone=function(){return new p({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})},r.prototype.format=function(t){return this.dateFormat?s.formatDate(t,s.convertDateFormatToIntlOptions(this.dateFormat)):c.formatNumber(t,c.convertNumberFormatToIntlOptions(this))};var p;return o([i.enumeration.serializable()(a.dictionary)],r.prototype,"dateFormat",void 0),o([i.property({type:Boolean,json:{write:!0}})],r.prototype,"digitSeparator",void 0),o([i.property({type:n.Integer,json:{write:!0}})],r.prototype,"places",void 0),r=p=o([i.subclass("esri.popup.support.FieldInfoFormat")],r)}(i.declared(p.JSONSupport))});