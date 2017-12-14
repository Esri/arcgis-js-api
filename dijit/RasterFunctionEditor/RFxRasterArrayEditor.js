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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/form/Select","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dgrid/OnDemandGrid","dgrid/Selection","./utils","dojo/text!./templates/RFxRasterArrayEditor.html","dojo/i18n!../../nls/jsapi"],function(e,t,r,i,a,s,o,n,d,l,h,_,u,c,y,S,f,m){var g=e("RFxRasterArrayEditor",[h,_,u],{templateString:f,inputLayers:null,value:[],_lastId:1,constructor:function(e){this.inherited(arguments),this._i18n=m.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._populateLayerSelect(),this._setupGrid()},_getInputLayersStore:function(){return new n(new s({data:this.inputLayers}))},_populateLayerSelect:function(){this._layerSelect.set("labelAttr","name"),this._layerSelect.set("store",this._getInputLayersStore()),this.own(this._layerSelect.on("change",i.hitch(this,this._addLayer)))},_setupGrid:function(){this._layerStore=o(new s),this._layerGrid=new(e([c,y]))({selectionMode:"single",showHeader:!1,store:this._layerStore,queryOptions:{sort:[{attribute:"id"}]},columns:[{field:"name"}]},this._gridNode)},_addLayer:function(){var e,t=this._layerSelect.store,r=this._layerSelect.value,i=t.get(r),a=this._layerStore.data.length;i&&(e={id:a+1,name:i.name,url:i.url},this._layerStore.put(e),this._refreshGrid())},_onRemoveButtonClick:function(){var e=this._getSelectedId();this._layerStore.remove(e),this._refreshGrid()},_adjustGridItemIds:function(){var e=this._layerStore&&this._layerStore.data;e&&a.map(e,function(e,t){return e.id=t+1,e})},_onUpButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,r=this._layerStore.data,i=a.indexOf(r,e);0>=i||(t=r[i-1],r[i-1]=e,r[i]=t,this._refreshGrid())}},_onDownButtonClick:function(){var e=this._getSelectedItem();if(this._layerStore&&this._layerStore.data&&e){var t,r=this._layerStore.data,i=a.indexOf(r,e);i!==r.length-1&&(t=r[i+1],r[i]=t,r[i+1]=e,this._refreshGrid())}},_getSelectedId:function(){var e=this._layerGrid&&this._layerGrid.selection;return Object.keys(e)[0]},_getSelectedItem:function(){var e=this._getSelectedId();return this._layerStore.get(e)},_refreshGrid:function(){this._adjustGridItemIds(),this._updateValue(),this._layerGrid.refresh()},_updateValue:function(){var e=this._layerStore&&this._layerStore.data,t=[];e&&(a.forEach(e,function(e){t.push(S.getRasterJsonFromLayer(e))},this),this.value=t)}});return t("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",g,r),g});