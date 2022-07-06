// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/i18n!../../nls/jsapi","dojo/_base/lang","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase","./utils"],(function(e,i,t,a,s,l,r,d,n,u,h,o){var v=e([r,d,n,l,u],{templateString:"<div><div data-dojo-attach-point='gridNode'></div></div>",baseClass:"esriRFxWeightedSumTableEditor",dataTypes:[h.DATA_TYPES.raster,"field",h.DATA_TYPES.double],fieldNames:["layer","field","weight"],value:null,_store:null,_grid:null,postCreate:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxWeightedSumTableEditor,this._initializeGrid(),this._grid.on("grid-data-change",function(e){this._updateArgValues(e)}.bind(this)),this._grid.startup()},_initializeGrid:function(){var e=this._getGridSchema(),i=this._readArgValues();this._grid=new h({schema:e,data:i,hasIdColumn:!0,inputLayers:this.inputLayers,allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode)},_getGridSchema:function(){return this.fieldNames.map((function(e,i){return{label:this._i18n[e],name:e,dataType:this.dataTypes[i]}}),this)},_updateArgValues:function(){var e=this.inputArgs,i=this._grid._store.data;if(e){var t=e.Rasters,a=e.Weights,s=e.Fields;t&&(t.value={},t.value.elements=[],t.value.type=o.ARGUMENT_ARRAY_TYPE),a&&(a.value=[]),s&&(s.value=[]),i&&Array.isArray(i)&&(i.forEach((function(e){if("*"!==e.idNum){var i=e.layer;t&&t.value&&t.value.elements.push(i),a&&a.value&&a.value.push(e.weight),s&&s.value&&s.value.push(e.fieldArg.value)}})),this.emit("change"))}},_readArgValues:function(){if(this.inputArgs){var e,i=0,t=[],a=this.inputArgs,s=a.Rasters,l=a.Weights,r=a.Fields;if(s&&l&&r&&(e=Math.max(s.value&&s.value.elements&&s.value.elements.length,l.value&&l.value.length,r.value&&r.value.length),isNaN(e)))return t;for(;i<e;)t.push({layer:s.value&&s.value.elements&&s.value.elements[i],field:r.value&&r.value[i],weight:l.value&&l.value[i]}),i+=1;return t}}});return i("extend-esri")&&s.setObject("dijit.RasterFunctionEditor.RFxWeightedSumTableEditor",v,t),v}));