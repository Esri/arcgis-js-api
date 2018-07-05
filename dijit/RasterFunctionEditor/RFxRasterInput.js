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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/ComboBox","dojo/store/Memory","./utils","../analysis/utils","dojo/i18n!../../nls/jsapi"],function(t,e,o,i,s,a,r,l,n,h,d,c,u){var m=t([a,r,l],{templateString:"<div style='width:100%'><div data-dojo-type='dijit/form/ComboBox' data-dojo-attach-point='_comboBox'data-dojo-attach-event='onChange: _handleComboBoxChange'></div></div>",declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterInput",allowScalar:!1,selectDefault:!0,showBrowseRasterLayers:!0,constructor:function(t){this.inherited(arguments),e.mixin(this,t),this._i18n=u.widgets.rasterFunctionEditor},startup:function(){this._initStore(),this._comboBox.set("validator",e.hitch(this,this.validator)),this._comboBox.set("placeHolder",this._i18n.rfxRasterInput.selectLayer),this.on("add-ready-to-use-layer",e.hitch(this,function(t){this.emit("add-layer",t)})),this.inherited(arguments)},validator:function(t,e){var o=this._getStoreItems(t);return!!(o&&o.length>0)||(this.allowScalar?!isNaN(+t):void 0)},_handleComboBoxChange:function(t){return"separator"===t||""===t?void(this.value?this._comboBox.set("displayedValue",this.value.name):this._comboBox.reset()):"browselayers"===t?(this._browseLyrsdlg.browseItems.plugIn.layerTypes=["Image Service"],this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0,this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!1,void this._browseLyrsdlg.show()):void(this.value&&t===this.value.name||(this.value=this.get("value"),this.emit("change",this.value)))},getSelectedLayer:function(t){if(null!==(t=t||this._comboBox&&this._comboBox.value)&&void 0!==t&&this._comboBox){var e;e=t.name?t:{name:t};var o=this._comboBox.store&&this._comboBox.store.query(e),i=o&&o[0];if(i)return this.inputLayers[i.id]}},_getFormattedValue:function(t){return null===t||void 0===t?"":t.type&&"scalar"===t.type.toLowerCase()?String(t.value):t.url&&t.name?t.name:t},_setInputLayersAttr:function(t){this.inputLayers=t,this._initStore()},_setAllowScalarAttr:function(t){this.allowScalar=!!t,this.allowScalar||(this._comboBox.textbox.readOnly=!0)},_setValueAttr:function(t){this.value=t;var e=this._getFormattedValue(t);this._comboBox.set("value",e)},_getValueAttr:function(){var t=this._comboBox.value,e=this.getSelectedLayer(t);return e?d.getRasterJsonFromLayer(e):{type:"Scalar",value:+t}},_getStoreItems:function(t){return this._comboBox.store&&this._comboBox.store.query({name:t})},_initStore:function(){var t=[];o.forEach(this.inputLayers,function(e,o){t.push({id:o,name:e.name,label:e.name,url:e.url})},this);var e=new h({data:t,idProperty:"id"});this._comboBox.set("labelAttr","label"),this._comboBox.set("labelType","html"),this._comboBox.set("store",e),this._comboBox.reset(),c.addReadyToUseLayerOption(this,[this._comboBox]),this.selectDefault&&t.length&&this.set("value",t[0])},_handleBrowseItemsSelect:function(t){t&&t.selection&&c.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._comboBox,posIncrement:1,browseDialog:t.dialog||this._browsedlg,widget:this})},_setBrowsePropertiesAttr:function(t){this.map=t.map?t.map:this.map,this.portalUrl=t.portalUrl?t.portalUrl:this.portalUrl,this.portalSelf=t.portalSelf?t.portalSelf:this.portalSelf}});return i("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxRasterInput",m,s),m});