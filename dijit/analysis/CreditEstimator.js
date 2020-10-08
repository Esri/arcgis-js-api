// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/_base/kernel","dojo/has","dojo/dom-construct","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dojo/string","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreditEstimator.html"],(function(e,s,i,t,o,n,a,d,r,l,m,c,h,j,g,_,f,b,C,p,u){var M=s([j,g,_,f],{declaredClass:"esri.dijit.analysis.CreditEstimator",i18n:null,templateString:u,postMixInProperties:function(){this.inherited(arguments),this.i18n={},i.mixin(this.i18n,p.common),i.mixin(this.i18n,p.analysisMsgCodes),i.mixin(this.i18n,p.creditEstimator)},postCreate:function(){this.inherited(arguments)},_setContentAttr:function(e){var s,i="";e.code&&!e.messageCode&&(e.messageCode=e.code),e.messageCode?(i=C.isDefined(this.i18n[e.messageCode])?this.i18n[e.messageCode]:e.message,i=C.isDefined(e.params)?c.substitute(i,e.params):i,l.set(this._messageDiv,"display","block"),l.set(this._messageDiv,"innerHTML",i),m.set(this._table,"display","none")):(m.set(this._table,"display","table"),l.set(this._messageDiv,"display",C.isDefined(e.infoMessage)?"block":"none"),l.set(this._messageDiv,"innerHTML",C.isDefined(e.infoMessage)?e.infoMessage:""),C.isDefined(e.infoMessage)&&m.set(this._messageDiv,"margin-top","1em"),s=C.isDefined(e.cost)?e.cost:e.maximumCost,e.maximumCost&&l.set(this._costLabelNode,"innerHTML",this.i18n.maxCreditsLabel),e.totalRecords?l.set(this._totalRecordsNode,"innerHTML",h.format(e.totalRecords,{locale:n.locale})):m.set(this._totalRecordsLabelNode,"display","none"),l.set(this._creditsReqNode,"innerHTML",h.format(s,{locale:n.locale})))}});return a("extend-esri")&&i.setObject("dijit.analysis.CreditEstimator",M,b),M}));