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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/form/Select","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dgrid/OnDemandGrid","dgrid/Selection","./utils","dojo/text!./templates/RFxRasterArrayEditor.html","dojo/i18n!../../nls/jsapi"],function(e,t,i,r,a,s,n,o,l,d,u,h,_,c,y,f,p,S){var m=e("RFxRasterArrayEditor",[u,h,_],{templateString:p,inputLayers:null,value:[],_lastId:1,constructor:function(e){this.inherited(arguments),this._i18n=S.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._populateLayerSelect(),this._setupGrid(),this._readValues()},_getValueAttr:function(){return this._updateValue(),this.value},_getInputLayersStore:function(){return new o(new s({data:this.inputLayers}))},_populateLayerSelect:function(){this._layerSelect.set("browseProperties",this.browseProperties),this._layerSelect.set("selectDefault",!1),this._layerSelect.set("allowScalar",this.allowScalar),this._layerSelect.set("inputLayers",this.inputLayers),this.own(this._layerSelect.on("change",r.hitch(this,this._addLayer)))},_setupGrid:function(){this._layerStore=n(new s),this._layerGrid=new(e([c,y]))({selectionMode:"single",showHeader:!1,store:this._layerStore,allowSelect:function(e){return!(e.data&&e.data.isTemplate)},queryOptions:{sort:[{attribute:"id"}]},columns:[{field:"name"}]},this._gridNode)},_readValues:function(){if(this.value&&(this.value.elements||Array.isArray(this.value))){var e,t,i=this._layerStore,r=0,s=this.value.elements||this.value;a.forEach(s,function(a){if(e=a&&a.type===f.RFX_VARIABLE_TYPE?a.value:a,(t=a.type)===f.RFX_TEMPLATE_TYPE)return i.put(this._getRFTGridData(a,++r));if(e&&e.type===f.RFX_TEMPLATE_TYPE)return i.put(this._getRFTGridData(e,++r));if(t===f.RFX_VARIABLE_TYPE||a.url){var s=this._getRFVGridData(e,++r);s&&i.put(s)}},this),this._layerGrid.refresh()}},_getRFVGridData:function(e,t){if(e){var i,r=f.getLayerIdfromRasterValue(e,this.inputLayers);return e&&e.type&&"scalar"===e.type.toLowerCase()?{id:t,name:String(e.value),value:e,isTemplate:!1}:r&&(a.some(this.inputLayers,function(e){if(r===e.id)return i=e,!0}),i)?{id:t,name:i.name,value:e,isTemplate:!1}:void 0}},_getRFTGridData:function(e,t){if(e){return{id:t,name:"<"+e.function.name+"."+this._i18n.rfxArgsEditor.outputRaster+">",value:e,isTemplate:!0}}},_addLayer:function(){this._adjustGridItemIds();var e,t=this._layerSelect.get("value"),i=this._layerStore.data.length;t&&(e={id:i+1,value:t,name:t.name||t.value},this._layerStore.put(e),this._refreshGrid())},_onRemoveButtonClick:function(){var e=this._getSelectedId();this._layerStore.remove(e),this._refreshGrid()},_adjustGridItemIds:function(){var e=this._layerStore&&this._layerStore.data;e&&(a.map(e,function(e,t){return e.id=t+1,e}),this._layerStore.setData(e))},_onUpButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,i=this._layerStore.data,r=a.indexOf(i,e);r<=0||(t=i[r-1],i[r-1]=e,i[r]=t,this._refreshGrid())}},_onDownButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,i=this._layerStore.data,r=a.indexOf(i,e);r!==i.length-1&&(t=i[r+1],i[r]=t,i[r+1]=e,this._refreshGrid())}},_getSelectedId:function(){var e=this._layerGrid&&this._layerGrid.selection;return Object.keys(e)[0]},_getSelectedItem:function(){var e=this._getSelectedId();return this._layerStore.get(e)},_refreshGrid:function(){this._adjustGridItemIds(),this._updateValue(),this._layerGrid.refresh()},_updateValue:function(){var e=this._layerStore&&this._layerStore.data,t=[];e&&(a.forEach(e,function(e){e.isTemplate?t.push(this.getRFT?this.getRFT(e.value):e.value):t.push(e.value)},this),this.value=t)}});return t("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",m,i),m});