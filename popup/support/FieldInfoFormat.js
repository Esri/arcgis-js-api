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

define(["require","exports","tslib","../../core/date","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../intl/date","../../intl/number"],(function(t,e,r,o,a,p,n,i,s){return function(t){function e(e){var r=t.call(this,e)||this;return r.dateFormat=null,r.digitSeparator=!1,r.places=null,r}var a;return r.__extends(e,t),a=e,e.prototype.clone=function(){return new a({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})},e.prototype.format=function(t){return this.dateFormat?i.formatDate(t,i.convertDateFormatToIntlOptions(this.dateFormat)):s.formatNumber(t,s.convertNumberFormatToIntlOptions(this))},r.__decorate([p.enumeration(o.dictionary)],e.prototype,"dateFormat",void 0),r.__decorate([p.property({type:Boolean,json:{write:!0}})],e.prototype,"digitSeparator",void 0),r.__decorate([p.property({type:n.Integer,json:{write:!0}})],e.prototype,"places",void 0),e=a=r.__decorate([p.subclass("esri.popup.support.FieldInfoFormat")],e)}(a.JSONSupport)}));