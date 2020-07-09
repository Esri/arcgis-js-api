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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","../../kernel","dojo/text!./templates/RFxRasterVariableGrid.html","./EditableGridMixin","./RFxGridBase"],(function(e,t,a,i,r,s,n,l,d,o,h,u,c){var b=e("RFxRasterVariableGrid",[s,n,l,d,r,u],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterVariableGrid",templateString:h,widgetsInTemplate:!0,constructor:function(e){this.names=["Select","Variables"],this.dataTypes=[c.DATA_TYPES.boolean,c.DATA_TYPES.string],this.isEditable=[!0,!1],e.containerNode&&(this.container=e.containerNode)},postCreate:function(){this.inherited(arguments),this._createGridBase(),this.rasterVariableGrid.on("grid-data-change",t.hitch(this,(function(e){this._updateValue(e)})))},startup:function(){this.inherited(arguments),this.setVariableOptions(this.layerArg)},onRasterChange:function(){this.setVariableOptions()},setVariableOptions:function(){if(this.layerArg&&this.layerArg.input){var e,a,i=this.layerArg.input;if(i.declaredClass.indexOf("RFxRasterInput")>0&&i.value){var r=i.get("value");a=r&&(r.name||r.datasetName.name),(e=i.getSelectedLayer(a))&&(e.loaded?this._createDataObject(e):e.on("load",t.hitch(this,(function(e){this._createDataObject(e.target)}))))}}},_getSchema:function(){return this.names.map((function(e,t){return{name:e,dataType:this.dataTypes[t],isEditable:this.isEditable[t]}}),this)},_createGridBase:function(){var e=this._getSchema(),t=this._createDataObject(this.value);this.rasterVariableGrid=new c({schema:e,data:t,hasIdColumn:!1,isExtensible:!1,showHeader:!1},this._rasterVariableDiv),this.rasterVariableGrid.startup(),this.rasterVariableGrid.keepScrollPosition=!0},_updateValue:function(e){var t=!1;e.forEach((function(e){e.Select&&(t=!0)})),t||(e[0].Select=!0,setTimeout(function(){this.rasterVariableGrid.updateStoreValue(e)}.bind(this),0)),this.emit("variable-grid-update",e)},_createDataObject:function(e){var i=[],r="",s=!1,n=!1;if(!e)return i;e.getMultidimensionalInfo().then(t.hitch(this,(function(e){e.variables&&e.variables.forEach(t.hitch(this,(function(e,t){s=0==t;var l=a.map(e.dimensions,(function(e){return e.name+"="+e.values.length})).join(",");r=e.name+" ["+l+"] ("+(e.description||"")+"})";var d=!1;this.defaultValue&&this.defaultValue.length>0&&(s=!1,d=this.defaultValue.includes(e.name));var o={Select:s||d,Variables:r,value:e.name};i.push(o),o.Select&&(n=!0)}))),n||(i[0].Select=!0),this.rasterVariableGrid.updateStoreValue(i),this.emit("variable-grid-update",i)})))},_getValueAttr:function(){var e=this.rasterVariableGrid.getStoreValue(),t=[];return e.forEach((function(e){e.Select&&t.push(e.value)})),t.length<1&&t.push(e[0]&&e[0].value),t}});return i("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterVariableGrid",b,o),b}));