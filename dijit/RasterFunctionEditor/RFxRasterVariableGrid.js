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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","../../kernel","dojo/text!./templates/RFxRasterVariableGrid.html","./EditableGridMixin","./utils","./RFxGridBase"],(function(e,t,i,a,r,s,n,l,d,o,u,h,c,b){var f=e("RFxRasterVariableGrid",[s,n,l,d,r,h],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterVariableGrid",templateString:u,widgetsInTemplate:!0,constructor:function(e){this.names=["Select","Variables"],this.dataTypes=[b.DATA_TYPES.boolean,b.DATA_TYPES.string],this.isEditable=[!0,!1],e.containerNode&&(this.container=e.containerNode)},postCreate:function(){this.inherited(arguments),this._createGridBase(),this.rasterVariableGrid.on("grid-data-change",t.hitch(this,(function(e){this._updateValue(e)})))},startup:function(){this.inherited(arguments),this.setVariableOptions()},onRasterChange:function(){this.setVariableOptions()},setVariableOptions:function(){if(this.layerArg&&this.layerArg.input){var e,t,i=this.layerArg.input;if(i.declaredClass.indexOf("RFxRasterInput")>0&&i.value){var a=i.get("value");t=a&&(a.name||a.datasetName.name),(e=i.getSelectedLayer(t))&&this._createDataObject(e)}}},_getSchema:function(){return this.names.map((function(e,t){return{name:e,dataType:this.dataTypes[t],isEditable:this.isEditable[t]}}),this)},_createGridBase:function(){var e=this._getSchema(),t=this._createDataObject(this.value);this.rasterVariableGrid=new b({isForMultidimensional:!0,schema:e,data:t,hasIdColumn:!1,isExtensible:!1,showHeader:!1},this._rasterVariableDiv),this.rasterVariableGrid.startup(),this.rasterVariableGrid.keepScrollPosition=!0},_updateValue:function(e){var t=!1;e.forEach((function(e){e.Select&&(t=!0)})),t||(e[0].Select=!0,setTimeout(function(){this.rasterVariableGrid.updateStoreValue(e)}.bind(this),0)),this.emit("variable-grid-update",e)},_createDataObject:function(e){var a=[],r="",s=!1,n=!1;if(!e)return a;e.getMultidimensionalInfo().then(t.hitch(this,(function(l){e.multidimensionalInfo=l;var d=c.filterMDInfoIfMosiacRuleIsSet(e);d.variables&&d.variables.forEach(t.hitch(this,(function(e,t){s=0==t;var l=i.map(e.dimensions,(function(e){return e.name+"="+e.values.length})).join(",");r=e.name+" ["+l+"] ("+(e.description||"")+"})";var d=!1;this.defaultValue&&this.defaultValue.length>0&&(s=!1,d=this.defaultValue.includes(e.name));var o={Select:s||d,Variables:r,value:e.name};a.push(o),o.Select&&(n=!0)}))),n||(a[0].Select=!0),this.rasterVariableGrid.updateStoreValue(a),this.emit("variable-grid-update",a)}))).catch(t.hitch(this,(function(e){console.error("Error: Layer does not support multidimensional info"),this.rasterVariableGrid.updateStoreValue(a),this.emit("variable-grid-update",a)})))},_getValueAttr:function(){var e=this.rasterVariableGrid.getStoreValue(),t=[];return e.forEach((function(e){e.Select&&t.push(e.value)})),t.length<1&&t.push(e[0]&&e[0].value),t}});return a("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterVariableGrid",f,o),f}));