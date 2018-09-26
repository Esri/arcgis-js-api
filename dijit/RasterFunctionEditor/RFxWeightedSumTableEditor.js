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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/i18n!../../nls/jsapi","dgrid/OnDemandGrid","dgrid/Keyboard","dgrid/editor","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dojo/on","dojo/_base/lang","dojo/Evented","dojo/_base/array","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","dijit/form/Select","./EditableGridMixin","./RFxRasterInput","./utils"],function(e,t,i,a,r,l,d,n,s,o,h,u,c,g,f,_,v,p,S,y,b,m){var j=e([r,l]),F=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],w=e([f,_,v,c,y],{templateString:"<div><div data-dojo-attach-point='gridNode'></div></div>",baseClass:"esriRFxWeightedSumTableEditor",postCreate:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxWeightedSumTableEditor,this._initStore(),this._initGrid(),this.attachGridEvents(),this.own(this.on("change",u.hitch(this,this._updateArgValues)))},_updateArgValues:function(){var e=this.inputArgs,t=this._store.data;if(e){var i=e.Rasters,a=e.Weights,r=e.Fields;i&&(i.value=[]),a&&(a.value=[]),r&&(r.value=[]),g.forEach(t,function(e){if("*"!==e.idNum){var t=e.layerSelect.getSelectedLayer(e.layerSelect.value.name);i&&i.value&&i.value.push(m.getRasterJsonFromLayer(t)),a&&a.value&&a.value.push(e.weight),r&&r.value&&r.value.push(e.fieldSelect.value)}})}},_readArgValues:function(){if(this.inputArgs){var e,t=0,i=[],a=this.inputArgs,r=a.Rasters,l=a.Weights,d=a.Fields;if(r&&l&&d&&(e=Math.min(r.value&&r.value.length,l.value&&l.value.length,d.value&&d.value.length),isNaN(e)))return i;for(;t<e;)i.push({layer:m.getLayerIdfromRasterValue(r.value[t],this.inputLayers),idNum:t+1,id:t+1,field:d.value[t],weight:l.value[t]}),t+=1;return i}},_onFieldChange:function(e){e&&e.fieldSelect&&("*"===e.idNum&&this._addBlankObject(),e.weight=1,e.field=e.fieldSelect.value,this._onDataChange())},_onLayerChange:function(e){if(e&&e.fieldSelect&&e.layerSelect){var t=e.layerSelect,i=e.fieldSelect,a=t.value,r=t.getSelectedLayer(a.name);e.layer=a,r.getRasterAttributeTable({renderingRule:r.renderingRule}).then(u.hitch(this,function(t){t&&t.fields?(e.fieldStore=this._getFieldStore(t.fields),this._updateFieldStore(i,e.fieldStore)):this._updateFieldStore(i)}),u.hitch(this,function(e){this._updateFieldStore(i)})),e.weight=1,"*"===e.idNum&&this._addBlankObject(),this._onDataChange()}},_getFieldStore:function(e){var t;return e&&e.length?(t=g.filter(e,function(e){return g.indexOf(F,e.type)>-1}),new o(new n({data:t,idProperty:"name"}))):new o(new n({data:[{name:"VALUE",alias:this._i18n.value}],idProperty:"name"}))},_initStore:function(){this._store=s(new n({data:this._readArgValues(),idProperty:"id"}))},_initGrid:function(){this._grid=new j({store:this._store,columns:[{field:"idNum",label:this._i18n.id},{field:"layer",label:this._i18n.layer,renderCell:u.hitch(this,function(e,t,i,a){var r=new b({inputLayers:this.inputLayers,allowScalar:this.allowScalar,selectDefault:!1,browseProperties:this.browseProperties});r.on("change",u.hitch(this,this._onLayerChange,e)),r.on("add-layer",u.hitch(this,function(e){this.emit("add-layer",e)})),r.placeAt(i),r.startup(),""!==t&&r.set("value",t,!1),e.layerSelect=r})},{field:"field",label:this._i18n.field,renderCell:u.hitch(this,function(e,t,i,a){var r=new S({labelAttr:"alias",onChange:u.hitch(this,this._onFieldChange,e),store:e.fieldStore||this._getFieldStore()});try{r.attr("value",t,!1)}catch(e){}r.placeAt(i),r.startup(),e.fieldSelect=r})},d({field:"weight",label:this._i18n.weight,editor:p,editorArgs:{required:!0}})]},this.gridNode),this._addBlankObject()},_updateFieldStore:function(e,t){t?e.set("store",t):e.set("store",this._getFieldStore()),this._grid.refresh()}});return t("extend-esri")&&u.setObject("dijit.RasterFunctionEditor.RFxWeightedSumTableEditor",w,i),w});