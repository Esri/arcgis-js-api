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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/Evented","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxRemapGrid.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","./EditableGridMixin","./RFxGridBase"],(function(i,t,e,a,n,u,s,r,m,o,h,p,d,l){var g=i([r,m,o,a,h,p,d],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxRemapGrid",baseClass:"esriRFxRemapGrid",templateString:s,widgetsInTemplate:!0,inputArgs:{},remapGrid:null,constructor:function(){this.inherited(arguments),this._i18n=u.widgets.rasterFunctionEditor.rfxRemapGrid},postCreate:function(){this.inherited(arguments),this._createGrid(),this.remapGrid.on("grid-data-change",t.hitch(this,(function(i){this._updateValue(i)}))),this._setArgVisibilities()},startup:function(){this.inherited(arguments),this.remapGrid.startup()},_createGrid:function(){var i=this._getSchema(),t=this._createDataObject();this.remapGrid=new l({schema:i,data:t,hasIdColumn:!0},this._gridDiv),this.remapGrid.keepScrollPosition=!0},_getSchema:function(){var i=[this._i18n.minimum,this._i18n.maximum,this._i18n.output,this._i18n.noData],t=[l.DATA_TYPES.string,l.DATA_TYPES.string,l.DATA_TYPES.string,l.DATA_TYPES.boolean];return["Minimum","Maximum","Output","NoData"].map((function(e,a){return{label:i[a],name:e,dataType:t[a]}}),this)},_createDataObject:function(){var i=[],t=this.inputArgs.InputRanges.value||[],e=this.inputArgs.OutputValues.value||[],a=this.inputArgs.NoDataRanges.value||[];if("string"==typeof a){var n=a.trim();a=n?n.split(/[ ,]+/):[]}if(0===t.length&&0===e.length&&0===a.length)i=[{Minimum:0,Maximum:0,Output:0,NoData:!1}];else{if(e.length>0&&t.length===2*e.length)for(var u=0;u<e.length;u++)i.push({Minimum:t[2*u],Maximum:t[2*u+1],Output:e[u],NoData:!1});if(a.length>0)for(var s=0;s<a.length/2;s++)i.push({Minimum:a[2*s],Maximum:a[2*s+1],Output:null,NoData:!0})}return i},_setArgVisibilities:function(){var i,t="none";for(var e in this.inputArgs)this.inputArgs.hasOwnProperty(e)&&(i=this.inputArgs[e],this.isShownFx(i)&&(t="block"));this.domNode.style.display=t},_updateValue:function(i){var t=[],e=[],a=[];i&&(i.forEach((function(i){"*"!==i.idNum&&(i.Minimum=i.Minimum?parseFloat(i.Minimum):0,i.Maximum=i.Maximum?parseFloat(i.Maximum):0,i.Output=i.Output?parseFloat(i.Output):0,i.Maximum<i.Minimum&&(i.Maximum=i.Minimum),i.NoData?(a.push(i.Minimum),a.push(i.Maximum),i.Output=null):void 0!==i.Output&&null!==i.Output&&(t.push(i.Minimum),t.push(i.Maximum),e.push(i.Output)))})),this.inputArgs.InputRanges.value=t,this.inputArgs.OutputValues.value=e,this.inputArgs.NoDataRanges.value=a),this.emit("change")}});return e("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRemapGrid",g,n),g}));