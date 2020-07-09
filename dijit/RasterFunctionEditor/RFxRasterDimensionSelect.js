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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dijit/form/Select","../../kernel"],(function(e,t,i,n,s,o,a,r,d){var l=e([r],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterDimensionSelect",postCreate:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.RFxRasterDimensionSelect},startup:function(){this.inherited(arguments),this.setDimensionOptions()},onRasterChange:function(){this.setDimensionOptions()},setDimensionOptions:function(){if(this.layerArg&&this.layerArg.input){var e,i=this.layerArg.input;if(this.set("labelAttr","alias"),i.declaredClass.indexOf("RFxRasterInput")>0&&i.value){if(!(e=i.getSelectedLayer(i.get("value").name)))return;e.loaded?this._setDimensionStore(e):e.on("load",t.hitch(this,(function(e){this._setDimensionStore(e.target)})))}}},_removeDuplicates:function(e){return i.filter(e,(function(e,t,n){return i.indexOf(n,e)===t}))},_setDimensionStore:function(e){var n=[];e.getMultidimensionalInfo().then(t.hitch(this,(function(e){e.variables&&e.variables.forEach((function(e){e.dimensions&&e.dimensions.forEach((function(e){n.push(e.name)}))}));var t=i.map(this._removeDuplicates(n),(function(e){return{name:e,alias:e}})),a=new o(new s({data:t,idProperty:"name"}));this.set("store",a),this.defaultValue&&this.set("value",this.defaultValue),this.emit("raster-dimension-select-update",t)})))}});return n("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterDimensionSelect",l,d),l}));