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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","./utils","../../kernel"],(function(e,t,i,s,a,n,r,o,l,d){var h=e([o],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterDimensionSelect",allowedVariables:[],postCreate:function(){this.inherited(arguments),this._i18n=r.widgets.rasterFunctionEditor.RFxRasterDimensionSelect,this.setAllowedVariables=this.setAllowedVariables.bind(this)},startup:function(){this.inherited(arguments),this.setDimensionOptions()},onRasterChange:function(){this.setDimensionOptions()},setAllowedVariables:function(e){if(e.length>0&&l.isArrayEqual(this.allowedVariables,e)){var t=this.get("store");this.emit("raster-dimension-select-update",t.data)}else this.allowedVariables=e,this.setDimensionOptions()},setDimensionOptions:function(){var e=this.layerArg&&"RasterFunctionTemplate"===this.layerArg.type;if(e||this.layerArg&&this.layerArg.input){var t,i=this.layerArg.input;if(this.set("labelAttr","alias"),e||i.declaredClass.indexOf("RFxRasterInput")>0&&i.value){if(!(t=e?l.processRFTAsLayerInput(this.layerArg):i.getSelectedLayer(i.get("value").name)))return;this._setDimensionStore(t)}else this._setDimensionStore()}},_removeDuplicates:function(e){return i.filter(e,(function(e,t,s){return i.indexOf(s,e)===t}))},_setDimensionStore:function(e){var t=[];if(!e){var s=new n(new a({data:t,idProperty:"name"}));return this.setStore(s),this.set("value",""),this._setDisplay(""),void this.emit("raster-dimension-select-update",t)}e.getMultidimensionalInfo().then(function(e){e.variables&&e.variables.forEach(function(e){(!this.allowedVariables||!this.allowedVariables.length||Boolean(this.allowedVariables.indexOf(e.name)>=0))&&e.dimensions&&e.dimensions.forEach((function(e){t.push(e.name)}))}.bind(this));var s=i.map(this._removeDuplicates(t),(function(e){return{name:e,alias:e}})),r=this.get("value"),o=new n(new a({data:s,idProperty:"name"}));this.setStore(o),r?this.set("value",r):this.defaultValue&&this.set("value",this.defaultValue),this.emit("raster-dimension-select-update",s)}.bind(this))}});return s("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterDimensionSelect",h,d),h}));