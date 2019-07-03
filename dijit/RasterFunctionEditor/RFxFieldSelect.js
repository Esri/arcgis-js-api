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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","../../kernel"],function(e,t,i,s,r,a,n,l,o){var d=e([l],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxFieldSelect",postCreate:function(){this.inherited(arguments),this._i18n=n.widgets.rasterFunctionEditor.rfxFieldSelect},startup:function(){this.inherited(arguments),this.setFieldOptions(this.layerArg)},setFieldOptions:function(){if(this.layerArg&&this.layerArg.input){var e,s=this.layerArg.input;this.set("labelAttr","alias"),s.declaredClass.indexOf("RFxFeatureSelect")>0?(s.value&&(i.some(s.inputLayers,function(t){if(t.url===s.value.url)return e=t,!0}),e&&this.setStore(new a(new r({idProperty:"name",data:t.clone(e.fields)})))),this.otherOptions&&this._addOtherOptions()):s.declaredClass.indexOf("RFxRasterInput")>0&&(s.value?(e=s.getSelectedLayer(s.get("value").name),e?e.loaded?e.hasRasterAttributeTable?this.setFieldStore(e):this._setDefaultFieldStore():e.on("load",t.hitch(this,function(e){this.setFieldStore(e.target)})):this._setDefaultFieldStore()):this._setDefaultFieldStore()),this.defaultValue?this.set("value",this.defaultValue):this.reset()}},setFieldStore:function(e){e.getRasterAttributeTable({renderingRule:e.renderingRule}).then(t.hitch(this,function(e){e&&e.fields?this.set("store",this._getFieldStore(e.fields)):this._setDefaultFieldStore(),this.selectedValue?this.set("value",this.selectedValue):this.reset()}),t.hitch(this,function(e){this._setDefaultFieldStore(),this.reset()}))},_setDefaultFieldStore:function(){this.set("store",this._getFieldStore())},_addOtherOptions:function(){var e=[];if(Object.keys(this.otherOptions).forEach(function(t){var i={name:t,alias:this.otherOptions[t]};e.push(i)},this),this.store&&this.store.data&&this.store.data.length){var t=this.store.data;e.forEach(function(e){t.some(function(t){if(t.name===e.name)return!0})||t.push(e)}),this.setStore(this.store)}else this.setStore(new a(new r({idProperty:"name",data:e})))},_getFieldStore:function(e){var t,s=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];if(e&&e.length)return t=i.filter(e,function(e){return i.indexOf(s,e.type)>-1}),new a(new r({data:t,idProperty:"name"}));var n=this.isInGrid?[{name:"VALUE",alias:this._i18n.value}]:[{name:"VALUE",alias:this._i18n.value},{name:"COUNT",alias:this._i18n.count}];return new a(new r({data:n,idProperty:"name"}))}});return s("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxFieldSelect",d,o),d});