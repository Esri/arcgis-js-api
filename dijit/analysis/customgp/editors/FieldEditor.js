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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/Evented","dojo/_base/lang","dojo/on","dojo/json","dijit/_TemplatedMixin","../BaseEditor","dijit/form/Select","../../utils","../../AnalysisRegistry","dojo/text!./FieldEditor.html"],(function(e,t,i,a,s,l,n,r,d,h,o,c){return e([r,n,i],{templateString:c,editorName:"FieldEditor",cssClass:{featureSetSelect:"fullSpread esriAnalysisSelect",layerChooseCtr:"one-width"},analysisLayer:null,field:null,dependencyParam:null,constructor:function(e){this.inherited(arguments),e.cssClass&&a.mixin(this.cssClass,e.cssClass),this.watch("analysisLayer",a.hitch(this,this._handleLayerChange)),this.watch("dependencyParam",a.hitch(this,this._handleDepParamChange))},postCreate:function(){this.inherited(arguments),this.fieldsSelect=new d({class:this.cssClass.featureSetSelect}),this.fieldsSelect.placeAt(this.layerChooseNode)},_handleFieldChange:function(){},_handleLayerChange:function(){if(this.analysisLayer&&this.fieldsSelect){var e={selectWidget:this.fieldsSelect,layer:this.analysisLayer,allowSelectLabel:!1,allowNumericType:!0,allowDateType:!0,allowStringType:!0};this.param&&this.param.filter&&this.param.filter.list&&(e.allowStringType=-1!==this.param.filter.list.indexOf(o.FieldTypes.String),e.allowNumericType=-1!==this.param.filter.list.indexOf(o.FieldTypes.Integer),e.allowDateType=-1!==this.param.filter.list.indexOf(o.FieldTypes.Date)),h.addAttributeOptions(e)}},_handleDepParamChange:function(){this.dependencyParam&&this.fieldsSelect&&"GPString"===this.dependencyParam.dataType&&this.value&&this.fieldsSelect.addOption({label:this.value.alias||this.value.name,value:this.value.name})},getGPValue:function(){var e=this.analysisLayer&&this.analysisLayer.fields.filter((function(e){return e.name===this.fieldsSelect.get("value")}),this),t="";return e&&e.length>0?t=l.stringify(e[0]):"GPString"===this.dependencyParam.dataType&&this.fieldsSelect.get("value")===this.value.name&&(t=l.stringify(this.value)),this.wrapValueToDeferred(t)},_setAnalysisLayerAttr:function(e){this._set("analysisLayer",e)},_setDependencyParamAttr:function(e){this._set("dependencyParam",e)}})}));