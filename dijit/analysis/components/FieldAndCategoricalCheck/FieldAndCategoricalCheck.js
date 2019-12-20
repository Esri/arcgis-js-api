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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../../../../kernel","../../utils","../../AnalysisRegistry","dijit/form/Select","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/CheckBox","dijit/Tooltip","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","dojo/dom-construct","dojo/Evented","dojo/on","dojo/i18n!../../nls/FieldAndCategoricalCheck","dojo/text!./FieldAndCategoricalCheck.html"],function(e,t,i,o,n,a,c,l,s,r,d,h,u,g,f,p,_){var k=s([n,a,g],{declaredClass:"esri.dijit.analysis.components.FieldAndCategoricalCheck.FieldAndCategoricalCheck",templateString:_,i18n:{},value:[],explanatoryVariables:[],_allRowWidgets:[],constructor:function(e){},postMixInProperties:function(){this.inherited(arguments),r.mixin(this.i18n,p)},postCreate:function(){this.inherited(arguments),this._loadConnections()},destroy:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments)},_loadConnections:function(){this.own(f(this._warningIcon,"click",r.hitch(this,function(e){this._displayWarningMessage(!0)})),f(this._warningIcon,"blur",r.hitch(this,function(e){this._displayWarningMessage(!1)})))},resetOptions:function(e){this._removeAllRows(),e.forEach(function(e){this._createRow(e.label,e.value,e.type)},this)},_createRow:function(e,t,o){var n,a,c,l,s;n=u.create("tr",null,this._emptyRow,"before"),a=u.create("td",null,n),c=u.create("td",null,n),l=u.create("td",null,n),s=this._createCheckBoxes(a,l),n.fieldCheckBox=s.fieldCheckBox,n.categoricalCheckBox=s.categoricalCheckBox,n.fieldLabel=e,n.fieldName=t,n.fieldType=o,this._createAndLinkLabel(c,n.fieldCheckBox,e),o===i.PseudoFieldTypes.String&&(n.categoricalCheckBox.set("checked",!0),n.categoricalCheckBox.set("readOnly",!0)),this._allRowWidgets.push(n)},_createCheckBoxes:function(e,t){var i,o;return i=new c(null,u.create("input",null,e)),i.startup(),o=new c({class:"hide"},u.create("input",null,t)),o.startup(),this.own(i.on("change",r.hitch(this,function(e){this.emit("update-parent-tool",{}),d.toggle(o.domNode,"hide",!e),0===this.get("explanatoryVariables").length?this._displayWarningIcon(!0):1===this.get("explanatoryVariables").length&&this._displayWarningIcon(!1)}))),{fieldCheckBox:i,categoricalCheckBox:o}},_createAndLinkLabel:function(e,t,i){u.create("label",{for:t.id,innerHTML:i},e)},_removeAllRows:function(){this._allRowWidgets.forEach(function(e){this._removeRow(e)},this),this._allRowWidgets=[]},_removeRow:function(e){e&&e.fieldCheckBox&&e.categoricalCheckBox&&(e.fieldCheckBox.destroyRecursive(),e.categoricalCheckBox.destroyRecursive(),u.destroy(e))},_setExplanatoryVariablesAttr:function(e){this._allRowWidgets.forEach(function(t){e.forEach(function(e){t.fieldName===e.fieldName&&(t.fieldCheckBox.set("checked",!0,!1),d.remove(t.categoricalCheckBox.domNode,"hide"),t.categoricalCheckBox.set("checked",e.categorical))})}),this.emit("update-explanatory-field-component",{})},_setValueAttr:function(e){this.set("explanatoryVariables",e)},_getExplanatoryVariablesAttr:function(){var e=[];return this._allRowWidgets.forEach(function(t){t.fieldCheckBox.get("checked")&&e.push({fieldName:t.fieldName,categorical:t.categoricalCheckBox.get("checked")})}),e},_getValueAttr:function(){return this.get("explanatoryVariables")},_getExplanatoryVariablesOptionsAttr:function(){var e=[];return this._allRowWidgets.forEach(function(t){t.fieldCheckBox.get("checked")&&e.push({value:t.fieldName,label:t.fieldLabel,type:t.fieldType})}),e},validate:function(){var e,t=this.get("explanatoryVariables");return e=t.length>0,this._displayWarningIcon(!e),e},focus:function(){this._allRowWidgets.length>0&&this._allRowWidgets[0].fieldCheckBox.focus()},_displayWarningMessage:function(e){e?l.show(this.i18n.requiredMessage,this._warningIcon):l.hide(this._warningIcon)},_displayWarningIcon:function(e){d.toggle(this._warningIcon,"hide",!e)}});return h("extend-esri")&&r.setObject("esri.dijit.analysis.components.FieldAndCategoricalCheck.FieldAndCategoricalCheck",k,e),k});