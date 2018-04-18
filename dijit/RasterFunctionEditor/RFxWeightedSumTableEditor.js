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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/i18n!../../nls/jsapi","dgrid/OnDemandGrid","dgrid/Keyboard","dgrid/editor","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dojo/on","dojo/_base/lang","dojo/Evented","dojo/_base/array","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","dijit/form/Select","./EditableGridMixin","./utils"],function(e,t,i,a,r,l,n,d,s,o,h,u,g,c,f,_,v,p,y,b,m){var S=e([r,l]),j=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],w=e([f,_,v,g,b],{templateString:"<div><div data-dojo-attach-point='gridNode'></div></div>",baseClass:"esriRFxWeightedSumTableEditor",postCreate:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxWeightedSumTableEditor,this._initStore(),this._initGrid(),this.attachGridEvents(),this.own(this.on("change",u.hitch(this,this._updateArgValues)))},_updateArgValues:function(){var e=this.inputArgs,t=this._store.data;if(e){var i=e.Rasters,a=e.Weights,r=e.Fields;i&&(i.value=[]),a&&(a.value=[]),r&&(r.value=[]),c.forEach(t,function(e){if("*"!==e.idNum&&"blank_item"!==e.layerSelect.value){var t=e.layerSelect.store.get(e.layerSelect.value);i&&i.value&&i.value.push(m.getRasterJsonFromLayer(t)),a&&a.value&&a.value.push(e.weight),r&&r.value&&r.value.push(e.fieldSelect.value)}})}},_readArgValues:function(){if(this.inputArgs){var e,t=0,i=[],a=this.inputArgs,r=a.Rasters,l=a.Weights,n=a.Fields;if(r&&l&&n&&(e=Math.min(r.value&&r.value.length,l.value&&l.value.length,n.value&&n.value.length),isNaN(e)))return i;for(;t<e;)i.push({layer:m.getLayerIdfromRasterValue(r.value[t],this.inputLayers),idNum:t+1,id:t+1,field:n.value[t],weight:l.value[t]}),t+=1;return i}},_onFieldChange:function(e){e&&e.fieldSelect&&("*"===e.idNum&&this._addBlankObject(),e.weight=1,e.field=e.fieldSelect.value,this._onDataChange())},_onLayerChange:function(e){if(e&&e.fieldSelect&&e.layerSelect){var t=e.layerSelect,i=e.fieldSelect,a=t.value,r=t.store.get(a);e.layer=a,r.getRasterAttributeTable({renderingRule:r.renderingRule}).then(u.hitch(this,function(t){t&&t.fields?(e.fieldStore=this._getFieldStore(t.fields),i.set("store",e.fieldStore)):i.set("store",this._getFieldStore())}),u.hitch(this,function(e){i.set("store",this._getFieldStore())})),e.weight=1,"*"===e.idNum&&this._addBlankObject(),this._onDataChange()}},_getLayersOptions:function(){return new o(new d({data:this.inputLayers.concat([{id:"blank_item",name:this._i18n.selectLayer}]),idProperty:"id"}))},_getFieldStore:function(e){var t;return e&&e.length?(t=c.filter(e,function(e){return c.indexOf(j,e.type)>-1}),new o(new d({data:t,idProperty:"name"}))):new o(new d({data:[{name:"VALUE",alias:this._i18n.value}],idProperty:"name"}))},_initStore:function(){this._store=s(new d({data:this._readArgValues(),idProperty:"id"}))},_initGrid:function(){this._grid=new S({store:this._store,columns:[{field:"idNum",label:this._i18n.id},{field:"layer",label:this._i18n.layer,renderCell:u.hitch(this,function(e,t,i,a){var r=new y({labelAttr:"name",store:this._getLayersOptions(),onChange:u.hitch(this,this._onLayerChange,e),value:"blank_item"});if(r.getOptions("blank_item").disabled=!0,r.placeAt(i),r.startup(),""!==t)try{r.attr("value",t,!1)}catch(e){r.attr("value","blank_item")}e.layerSelect=r})},{field:"field",label:this._i18n.field,renderCell:u.hitch(this,function(e,t,i,a){var r=new y({labelAttr:"alias",onChange:u.hitch(this,this._onFieldChange,e),store:e.fieldStore||this._getFieldStore()});try{r.attr("value",t,!1)}catch(e){}r.placeAt(i),r.startup(),e.fieldSelect=r})},n({field:"weight",label:this._i18n.weight,editor:p,editorArgs:{required:!0}})]},this.gridNode),this._addBlankObject()}});return t("extend-esri")&&u.setObject("dijit.RasterFunctionEditor.RFxWeightedSumTableEditor",w,i),w});