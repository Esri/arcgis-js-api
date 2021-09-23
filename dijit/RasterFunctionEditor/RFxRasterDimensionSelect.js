// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","../../kernel"],(function(e,t,i,s,n,a,o,r,l){var d=e([r],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterDimensionSelect",allowedVariables:[],postCreate:function(){this.inherited(arguments),this._i18n=o.widgets.rasterFunctionEditor.RFxRasterDimensionSelect,this.setAllowedVariables=this.setAllowedVariables.bind(this)},startup:function(){this.inherited(arguments),this.setDimensionOptions()},onRasterChange:function(){this.setDimensionOptions()},setAllowedVariables:function(e){this.allowedVariables=e,this.setDimensionOptions()},setDimensionOptions:function(){if(this.layerArg&&this.layerArg.input){var e,t=this.layerArg.input;if(this.set("labelAttr","alias"),t.declaredClass.indexOf("RFxRasterInput")>0&&t.value){if(!(e=t.getSelectedLayer(t.get("value").name)))return;this._setDimensionStore(e)}}},_removeDuplicates:function(e){return i.filter(e,(function(e,t,s){return i.indexOf(s,e)===t}))},_setDimensionStore:function(e){var s=[];e.getMultidimensionalInfo().then(t.hitch(this,(function(e){e.variables&&e.variables.forEach(function(e){(!this.allowedVariables||!this.allowedVariables.length||Boolean(this.allowedVariables.indexOf(e.name)>=0))&&e.dimensions&&e.dimensions.forEach((function(e){s.push(e.name)}))}.bind(this));var t=i.map(this._removeDuplicates(s),(function(e){return{name:e,alias:e}})),o=new a(new n({data:t,idProperty:"name"}));this.set("store",o),this.defaultValue&&this.set("value",this.defaultValue),this.emit("raster-dimension-select-update",t)})))}});return s("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterDimensionSelect",d,l),d}));