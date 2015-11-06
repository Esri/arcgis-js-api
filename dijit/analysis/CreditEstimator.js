// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/has","dojo/dom-construct","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dojo/string","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreditEstimator.html"],function(e,i,s,t,o,n,a,d,r,l,m,c,j,h,g,_,u,p,C,b,f){var x=i([h,g,_,u],{declaredClass:"esri.dijit.analysis.CreditEstimator",i18n:null,templateString:f,postMixInProperties:function(){this.inherited(arguments),this.i18n={},s.mixin(this.i18n,b.common),s.mixin(this.i18n,b.analysisMsgCodes),s.mixin(this.i18n,b.creditEstimator)},postCreate:function(){this.inherited(arguments)},_setContentAttr:function(e){var i="";e.code&&!e.messageCode&&(e.messageCode=e.code),e.messageCode?(i=C.isDefined(this.i18n[e.messageCode])?this.i18n[e.messageCode]:e.message,i=C.isDefined(e.params)?c.substitute(i,e.params):i,l.set(this._messageDiv,"display","block"),l.set(this._messageDiv,"innerHTML",i),m.set(this._table,"display","none")):(m.set(this._table,"display","table"),l.set(this._messageDiv,"display","none"),l.set(this._messageDiv,"innerHTML",""),l.set(this._totalRecordsNode,"innerHTML",j.format(e.totalRecords,{locale:n.locale})),l.set(this._creditsReqNode,"innerHTML",j.format(e.cost,{locale:n.locale})))}});return a("extend-esri")&&s.setObject("dijit.analysis.CreditEstimator",x,p),x});