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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/maybe","../../core/accessorSupport/decorators","../../intl/date","../../renderers/support/utils","../Slider/SliderViewModel"],(function(e,t,r,a,n,o,i,s,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.average=null,r.bins=null,r.hasTimeData=!1,r.labelFormatFunction=function(e){return r.hasTimeData?i.formatDate(new Date(e),s.timelineDateFormatOptions):r.defaultLabelFormatFunction(e)},r.rangeType="equal",r.standardDeviation=null,r}return r(t,e),t.prototype.generateWhereClause=function(e){var t=this.rangeType,r=this.state,a=this.values;if("ready"!==r||!a.length||!n.isSome(e))return null;var o=a[0],i=a.length>1?a[a.length-1]:null;switch(t){case"equal":return e+" = "+o;case"not-equal":return e+" <> "+o;case"less-than":return e+" < "+o;case"greater-than":return e+" > "+o;case"at-least":return e+" >= "+o;case"at-most":return e+" <= "+o;case"between":return e+" BETWEEN "+o+" AND "+i;case"not-between":return e+" NOT BETWEEN "+o+" AND "+i;default:return null}},a([o.property()],t.prototype,"average",void 0),a([o.property()],t.prototype,"bins",void 0),a([o.property()],t.prototype,"hasTimeData",void 0),a([o.property()],t.prototype,"labelFormatFunction",void 0),a([o.property()],t.prototype,"rangeType",void 0),a([o.property()],t.prototype,"standardDeviation",void 0),t=a([o.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],t)}(o.declared(l))}));