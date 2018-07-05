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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","../../kernel"],function(e,t,i,r,n,s,a,l,d){var o=e([l],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxFieldSelect",postCreate:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxFieldSelect,this.setFieldOptions(this.layerArg)},setFieldOptions:function(){if(this.layerArg&&this.layerArg.input){var e,r=this.layerArg.input;this.set("labelAttr","alias"),r.declaredClass.indexOf("RFxFeatureSelect")>0&&r.value?(i.some(r.inputLayers,function(t){if(t.url===r.value.url)return e=t,!0}),e&&this.setStore(new s(new n({idProperty:"name",data:t.clone(e.fields)})))):r.declaredClass.indexOf("RFxRasterInput")>0&&r.value&&(e=r.getSelectedLayer(r.get("value").name))&&e.getRasterAttributeTable({renderingRule:e.renderingRule}).then(t.hitch(this,function(e){e&&e.fields?this.set("store",this._getFieldStore(e.fields)):this.set("store",this._getFieldStore())}),t.hitch(this,function(e){this.set("store",this._getFieldStore())})),this.reset()}},_getFieldStore:function(e){var t,r=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return e&&e.length?(t=i.filter(e,function(e){return i.indexOf(r,e.type)>-1}),new s(new n({data:t,idProperty:"name"}))):new s(new n({data:[{name:"VALUE",alias:this._i18n.value},{name:"COUNT",alias:this._i18n.count}],idProperty:"name"}))}});return r("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxFieldSelect",o,d),o});