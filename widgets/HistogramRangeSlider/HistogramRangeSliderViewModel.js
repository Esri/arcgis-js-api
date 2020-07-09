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

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","../../intl/date","../../renderers/support/utils","../Slider/SliderViewModel"],(function(e,t,r,a,o,n,i,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.average=null,r.bins=null,r.hasTimeData=!1,r.labelFormatFunction=function(e){return r.hasTimeData?n.formatDate(new Date(e),i.timelineDateFormatOptions):r.defaultLabelFormatFunction(e)},r.rangeType="equal",r.standardDeviation=null,r}return r.__extends(t,e),t.prototype.generateWhereClause=function(e){var t=this.rangeType,r=this.state,o=this.values;if("ready"!==r||!o.length||!a.isSome(e))return null;var n=o[0],i=o.length>1?o[o.length-1]:null;switch(t){case"equal":return e+" = "+n;case"not-equal":return e+" <> "+n;case"less-than":return e+" < "+n;case"greater-than":return e+" > "+n;case"at-least":return e+" >= "+n;case"at-most":return e+" <= "+n;case"between":return e+" BETWEEN "+n+" AND "+i;case"not-between":return e+" NOT BETWEEN "+n+" AND "+i;default:return null}},r.__decorate([o.property()],t.prototype,"average",void 0),r.__decorate([o.property()],t.prototype,"bins",void 0),r.__decorate([o.property()],t.prototype,"hasTimeData",void 0),r.__decorate([o.property()],t.prototype,"labelFormatFunction",void 0),r.__decorate([o.property()],t.prototype,"rangeType",void 0),r.__decorate([o.property()],t.prototype,"standardDeviation",void 0),t=r.__decorate([o.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],t)}(s)}));