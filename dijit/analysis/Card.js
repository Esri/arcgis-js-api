// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./utils","dojo/i18n!./nls/BuildMultiVariablesList","dojo/text!./templates/Card.html"],(function(t,i,e,o,n,d,s,r,a,c,j,h,l,_,u,f,m,p,C,g,x,b,y,M,T,B,k,N,A,F,H,I,L,O,S,q){var D=e([f,m,p,C,g],{declaredClass:"esri.dijit.analysis.Card",templateString:q,widgetsInTemplate:!0,open:!0,i18n:null,constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),n.forEach(this._pbConnects,d.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n=o.mixin({},S)},postCreate:function(){this.inherited(arguments),this.header&&this._addContent(this.header,this._headerNode),this.content&&this._addContent(this.content,this._contentNode),this._cardCheckNode.checked=this.open},startup:function(){},_addContent:function(t,i){"string"==typeof t?h.set(i,"innerHTML",t):"object"==typeof t&&t instanceof HTMLElement&&i.appendChild(t)},_setHeaderAttr:function(t){this._set("header",t)},_setContentAttr:function(t){this._set("content",t)},_setOpenAttr:function(t){this._set("open",t)}});return r("extend-esri")&&o.setObject("dijit.analysis.Card",D,I),D}));