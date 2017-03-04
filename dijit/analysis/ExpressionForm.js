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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/_base/event","dojo/Evented","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/Tooltip","../../kernel","../../lang","./utils","../SingleFilter","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExpressionForm.html"],function(t,e,i,s,n,r,a,o,d,l,h,p,c,u,_,O,g,f,y,S,b,x,w,m,v,F,j,A,T,D,C,R,E,I,L,U,B,P,M,G){var W=e([y,S,b,x,w,g],{declaredClass:"esri.dijit.analysis.ExpressionForm",templateString:G,widgetsInTemplate:!0,firstOperands:null,defaultUnits:"english",showFirstRow:!0,showUnique:!0,constructor:function(t){t.containerNode&&(this.container=t.containerNode),this._setClasses(t)},_setClasses:function(t){this._addBtnClass=t.primaryActionButttonClass||"esriAnalysisSubmitButton"},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n={},i.mixin(this.i18n,M.common),i.mixin(this.i18n,M.expressionGrid),i.mixin(this.i18n,M.expressionForm)},postCreate:function(){this.inherited(arguments),this.attributeChangeHandler=n.subscribe("filter-expression-change",i.hitch(this,this._handleAttributeFilterChange)),this._distanceInput.set("validator",i.hitch(this,this._validateDistance)),this.set("action","add"),h.set(this._firstRow,"display",this.showFirstRow?"":"none"),this.own(this.watch("showUnique",i.hitch(this,function(t,e,i){this._attributeFilter&&this._attributeFilter.set("showUnique",i)})))},init:function(){if(this.showReadyToUseLayers&&this.owningWidget&&!this._browseTitle&&(this._browseTitle=B._isCustomAnalysisQuery(this.owningWidget)?this.i18n.browseAnalysisLayers:this.i18n.browseAnalysisTitle),this._firstOperandSelect&&this.firstOperands&&this.inputOperands){this._firstOperandSelect.getOptions()&&this._firstOperandSelect.removeOption(this._firstOperandSelect.getOptions());var t,e,i=this.inputOperands.length,n=this.firstOperands.length,r=[];for(t=0;i>t;t+=1)for(e=0;n>e;e+=1)U.isDefined(this.inputOperands[t].id)&&U.isDefined(this.firstOperands[e].id)&&this.inputOperands[t].id===this.firstOperands[e].id?r[this.firstOperands[e].id]=t.toString():U.isDefined(this.inputOperands[t].name)&&U.isDefined(this.firstOperands[e].name)&&this.inputOperands[t].name===this.firstOperands[e].name&&(r[this.firstOperands[e].name]=t.toString());s.forEach(this.firstOperands,function(t,e){U.isDefined(t)&&this._firstOperandSelect.addOption({value:r[t.id||t.name],label:t.name})},this),this.selectedFirstOperand&&this._firstOperandSelect.set("value",r[this.selectedFirstOperand.id]),this.get("showReadyToUseLayers")&&this.get("showReadyLayersForFirst")&&(this._firstOperandSelect.addOption({type:"separator",value:""}),this._firstOperandSelect.addOption({value:"browse",label:this._browseTitle})),1!==i||this.get("showReadyToUseLayers")||this._operatorSelect&&this._operatorSelect.getOptions()&&(this._operatorSelect.removeOption(this._operatorSelect.getOptions()),this._operatorSelect.addOption({value:"where",label:this.i18n.where}))}"add"===this.get("action")&&(this._operatorSelect.set("value","where"),this._handleOperatorChange("where"),this._distanceInput.set("value",""),"metric"===this.defaultUnits?this._distanceUnitsSelect.set("value","Kilometers"):this._distanceUnitsSelect.set("value","Miles"))},startup:function(){},clear:function(){this.init()},_validateDistance:function(t){var e=this._operatorSelect.get("value");return-1===s.indexOf(["withinDistance","notWithinDistance"],e)?!0:t&&0<parseFloat(t,10)&&parseFloat(t,10)<1/0},_handleAttributeFilterChange:function(){var t,e;this._attributeFilter&&(e=this._attributeFilter.toJson(),t=this._attributeFilter.builtSingleFilterString(e),t.whereClause?this._addBtn.set("disabled",!1):this._addBtn.set("disabled",!0))},_handleSecondOperandChange:function(t){"browse"===t&&(this.owningWidget.showReadyToUseLayersDialog(!1),this.owningWidget.layersSelect=this._secondOperandSelect)},_handleFirstOperandChange:function(t){"browse"===t&&this.get("showReadyLayersForFirst")?(this.owningWidget.showReadyToUseLayersDialog(!0),this.owningWidget.layersSelect=this._firstOperandSelect):this._handleOperatorChange(t)},_handleDistanceInputChange:function(t){this._addBtn.set("disabled",!this._distanceInput.validate())},_handleOperatorChange:function(t){var e,i,n=this._operatorSelect.get("value");-1===s.indexOf(["where","withinDistance","notWithinDistance"],n)?this._buildSpatialExpression(n):"where"===n?(e=parseInt(this._firstOperandSelect.get("value"),10),i=this.inputOperands[e],this._buildAttributeExpression(n)):-1!==s.indexOf(["withinDistance","notWithinDistance"],n)&&this._buildDistanceExpression(n)},_isValidSecondOperand:function(t,e,i){var s=!1;return"contains"===t||"notContains"===t?("esriGeometryPoint"!==e&&"esriGeometryMultipoint"!==e||"esriGeometryPoint"!==i&&"esriGeometryMultipoint"!==i)&&("esriGeometryPolyline"!==e||"esriGeometryPoint"!==i&&"esriGeometryPolyline"!==i&&"esriGeometryMultipoint"!==i)?"esriGeometryPolygon"===e&&(s=!0):s=!0:"within"===t||"notWithin"===t?"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s=!0:"esriGeometryPolyline"!==e||"esriGeometryPolygon"!==i&&"esriGeometryPolyline"!==i?"esriGeometryPolygon"===e&&"esriGeometryPolygon"===i&&(s=!0):s=!0:s=!0,s},_isValidFirstOperand:function(t){var e=!0;return t&&t.fields?t.fields&&1===t.fields.length&&"esriFieldTypeOID"===t.fields[0].type&&(this._showMessages(l.substitute(this.i18n.inValidAttributeFilterMessage,{layername:t.name})),e=!1):e=!1,e},_buildSpatialExpression:function(t){var e,i,n;e=parseInt(this._firstOperandSelect.get("value"),10),i=this.inputOperands[e],n=i.geometryType,this._addBtn.set("disabled",!1),this._distanceInput.set("required",!1),h.set(this._attrFilterDiv,"display","none"),h.set(this._secondOperandSelect.domNode,"display",""),this._secondOperandSelect&&(this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),s.forEach(this.inputOperands,function(e,i){i.toString()!==this._firstOperandSelect.get("value")&&this._isValidSecondOperand(t,n,e.geometryType)&&(this._secondOperandSelect.addOption({value:i.toString(),label:e.name}),""!==this._secondOperandSelect.get("value")&&this._secondOperandSelect.get("value")||this._secondOperandSelect.set("value",i.toString()))},this),this.get("showReadyToUseLayers")&&(this._secondOperandSelect.addOption({type:"separator",value:""}),this._secondOperandSelect.addOption({value:"browse",label:this._browseTitle})),h.set(this._secondRow,"display",""),h.set(this._secondExpressionDiv,"display","none"),h.set(this._secondOperandTd,"display",""),h.set(this._secondOperandSelect,{display:"",width:"75%"}))},_buildAttributeExpression:function(t){var e,i;this._distanceInput.set("required",!1),h.set(this._secondExpressionDiv,"display","none"),this._secondOperandSelect&&this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),h.set(this._secondOperandSelect.domNode,"display","none"),e=parseInt(this._firstOperandSelect.get("value"),10),i=this.inputOperands[e],this._isValidFirstOperand(i)?(this._addBtn.set("disabled",!0),h.set(this._secondRow,"display",""),h.set(this._attrFilterDiv,"display",""),this._attributeFilter&&(this._attributeFilter.init({mapLayer:i,version:i.version,fields:i.fields,allowAllDateTypes:!0,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:null}),this._attributeFilter.set("showUnique",this.showUnique)),this._attributeFilter||(this._attributeFilter=new P({"class":"filterSegment",mapLayer:i,version:i.version,fields:i.fields,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:null,enableEvents:!0,isEnableInteractiveFilter:!1,allowAllDateTypes:!0,showUnique:this.showUnique},c.create("div",{},this._attrFilterDiv)),this._attributeFilter.fillFieldsList(this._attributeFilter.fieldsStore))):(h.set(this._secondRow,"display","none"),h.set(this._attrFilterDiv,"display","none"),this._addBtn.set("disabled",!0))},_buildDistanceExpression:function(t){this._addBtn.set("disabled",!this._distanceInput.validate()),this._distanceInput.set("required",!0),h.set(this._secondRow,"display",""),h.set(this._secondOperandTd,"display",""),h.set(this._secondOperandSelect.domNode,"display",""),h.set(this._secondExpressionDiv,{display:"",width:"75%"}),h.set(this._secondOperandSelect,{display:"",width:"75%"}),h.set(this._attrFilterDiv,"display","none"),this._secondOperandSelect&&this._secondOperandSelect.getOptions()&&(this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),s.forEach(this.inputOperands,function(t,e){e.toString()!==this._firstOperandSelect.get("value")&&this._secondOperandSelect.addOption({value:e.toString(),label:t.name})},this),this.get("showReadyToUseLayers")&&(this._secondOperandSelect.addOption({type:"separator",value:""}),this._secondOperandSelect.addOption({value:"browse",label:this._browseTitle})))},_handleAddButtonClick:function(t){return O.stop(t),this._expressionForm&&!this._expressionForm.validate()?void this.emit("cancel-expression",{}):(this.set("expression"),void this.emit("add-expression",{expression:this.get("expression"),text:this.get("text"),displayText:this.get("displayText"),action:this.get("action")}))},_handleCloseButtonClick:function(t){O.stop(t),this.emit("cancel-expression",{})},_setInputOperandsAttr:function(t){this.inputOperands=t},_getInputOperandsAttr:function(){return this.inputOperands},_setFirstOperandsAttr:function(t){this.firstOperands=t},_getFirstOperandsAttr:function(t){return this.firstOperands},_setSelectedFirstOperandAttr:function(t){this.selectedFirstOperand=t},_getExpressionAttr:function(t){return this.expression},_setExpressionAttr:function(t){var e,i,n=!1;t?this._operatorSelect&&(this._firstOperandSelect.set("value",t.layer),this._operatorSelect.set("value",t.spatialRel?t.spatialRel:"where"),"where"===this._operatorSelect.get("value")?n=!0:(-1!==s.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&(this._distanceInput.set("value",t.distance),this._distanceUnitsSelect.set("value",t.units)),this._secondOperandSelect.set("value",t.selectingLayer))):(t={},this._operatorSelect&&(t.layer=parseInt(this._firstOperandSelect.get("value"),10),"where"===this._operatorSelect.get("value")?(e=this._attributeFilter.toJson(),i=this._attributeFilter.builtSingleFilterString(e),t._attributeFilter=i,t._attributeExprObj=e,t._attributeText=this._attributeFilter.buildFriendlyTextExpr(e),t.where=i.whereClause):(t.selectingLayer=parseInt(this._secondOperandSelect.get("value"),10),t.spatialRel=this._operatorSelect.get("value"),-1!==s.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&(t.distance=this._distanceInput.get("value"),t.units=this._distanceUnitsSelect.get("value"))))),this.expression=t,n&&this._handleOperatorChange("where")},_showMessages:function(t){p.set(this._bodyNode,"innerHTML",t),a.fadeIn({node:this._errorMessagePane,easing:f.quadIn,onEnd:i.hitch(this,function(){h.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(t){t&&t.preventDefault(),a.fadeOut({node:this._errorMessagePane,easing:f.quadOut,onEnd:i.hitch(this,function(){h.set(this._errorMessagePane,{display:"none"})})}).play()},_setActionAttr:function(t){this.action=t},_getActionAttr:function(){return this.action},_setTextAttr:function(t){this.text=t},_getTextAttr:function(){var t="";return this.expression&&(t=this.inputOperands[this.expression.layer].name),this.expression.spatialRel?(t+=" "+this.i18n[this.expression.spatialRel],this.expression.distance&&(t+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),t+=" "+this.inputOperands[this.expression.selectingLayer].name):t+=" "+this.i18n.whereLabel+" "+this.expression._attributeText,t},_getDisplayTextAttr:function(){var t,e,i="";return this.expression&&(t=this.inputOperands[this.expression.layer].name,i+=this.shortenString(t)),this.expression.spatialRel?(i+=" <label style='font-style: italic;'>"+this.i18n[this.expression.spatialRel],this.expression.distance&&(i+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),i+="</label>",e=this.inputOperands[this.expression.selectingLayer].name,i+=" "+this.shortenString(e)):i+=" <label style='font-style: italic;'>"+this.i18n.whereLabel+" "+this.expression._attributeText+"</label",i+="</tr></tbody></table>"},shortenString:function(t){return"<label style='overflow: hidden;text-overflow: ellipsis'>"+t+"</label></td>"},_setPrimaryActionButttonClassAttr:function(t){this.primaryActionButttonClass=t},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_setShowFirstRowAttr:function(t){this.showFirstRow=t},_getShowFirstRowAttr:function(){return this.showFirstRow},_setShowReadyToUseLayersAttr:function(t){this._set("showReadyToUseLayers",t)},_setShowReadyLayersForFirstAttr:function(t){this._set("showReadyLayersForFirst",t)},_setOwningWidgetAttr:function(t){this._set("owningWidget",t)}});return o("extend-esri")&&i.setObject("dijit.analysis.ExpressionForm",W,L),W});