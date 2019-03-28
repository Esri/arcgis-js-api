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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","../../kernel"],function(e,t,i,s,r,n,l,a,d){var o=e([a],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxFieldSelect",postCreate:function(){this.inherited(arguments),this._i18n=l.widgets.rasterFunctionEditor.rfxFieldSelect},startup:function(){this.inherited(arguments),this.setFieldOptions(this.layerArg)},setFieldOptions:function(){if(this.layerArg&&this.layerArg.input){var e,s=this.layerArg.input;this.set("labelAttr","alias"),s.declaredClass.indexOf("RFxFeatureSelect")>0&&s.value?(i.some(s.inputLayers,function(t){if(t.url===s.value.url)return e=t,!0}),e&&this.setStore(new n(new r({idProperty:"name",data:t.clone(e.fields)})))):s.declaredClass.indexOf("RFxRasterInput")>0&&s.value&&(e=s.getSelectedLayer(s.get("value").name),e?e.loaded?e.hasRasterAttributeTable?this.setFieldStore(e):this.set("store",this._getFieldStore()):e.on("load",t.hitch(this,function(e){this.setFieldStore(e.target)})):this.set("store",this._getFieldStore())),this.reset()}},setFieldStore:function(e){e.getRasterAttributeTable({renderingRule:e.renderingRule}).then(t.hitch(this,function(e){e&&e.fields?this.set("store",this._getFieldStore(e.fields)):this.set("store",this._getFieldStore()),this.selectedValue?this.set("value",this.selectedValue):this.reset()}),t.hitch(this,function(e){this.set("store",this._getFieldStore()),this.reset()}))},_getFieldStore:function(e){var t,s=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];return e&&e.length?(t=i.filter(e,function(e){return i.indexOf(s,e.type)>-1}),new n(new r({data:t,idProperty:"name"}))):new n(new r({data:[{name:"VALUE",alias:this._i18n.value},{name:"COUNT",alias:this._i18n.count}],idProperty:"name"}))}});return s("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxFieldSelect",o,d),o});