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

define(["dojo/_base/declare","dojo/has","dojo/text!./templates/RFxTransposeBit.html","dojo/text!../../layers/support/rasterFunctionResources.json","dojo/i18n!../../nls/jsapi","../../kernel","dojo/_base/lang","dojo/store/Memory","dojo/data/ObjectStore","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./RFxGridBase","./utils"],(function(t,i,e,s,a,n,r,o,h,u,d,l,p,c,_){var f=t("RFxTransposeBit",[d,l,p],{templateString:e,declaredClass:"esri.dijit.RasterFunctionEditor.RFxTransposeBit",dataType:c.DATA_TYPES.double,INPUT_BIT_INFO:u.parse(s).tranposeInputBitInfo,colNames:["outputBit","inputBit"],isExtensible:!1,isEditable:!1,_store:null,_grid:null,constructor:function(){this.inherited(arguments),this._i18n=a.widgets.rasterFunctionEditor.rfxTransposeBit},postCreate:function(){this.inherited(arguments),this._setupBitPatternSelect(),this._initializeGrid(),this._grid&&this._updateValue(this._grid.getStoreValue())},_setupBitPatternSelect:function(){if(this.rasterFunctionEnums&&this.rasterFunctionEnums.esriTransposeBitPatterns){var t=_.getEnumData(this.rasterFunctionEnums.esriTransposeBitPatterns);if(this.bitPatternSelect.set("store",new h(new o({data:t,idProperty:"key"}))),this.pattern=this.rfxArgs&&this.rfxArgs.QualityClass,this.pattern)this.bitPatternSelect.set("value",this.pattern);else{var i=this.bitPatternSelect.value;this.pattern=i,this.rfxArgs.QualityClass=i}}},_initializeGrid:function(){var t=this._getGridSchema(),i=this._createDataObject();this._grid&&this._grid.destroy(),this.bitPatternGrid=document.createElement("div"),this.transposeBitDiv.appendChild(this.bitPatternGrid),this._grid=new c({schema:t,data:i,isExtensible:this.isExtensible},this.bitPatternGrid),this._grid.startup(),this._grid.on("grid-data-change",function(t){this._updateValue(t)}.bind(this))},_getGridSchema:function(){var t=[];return t=this.colNames.map((function(t){return{label:this._i18n[t],name:t,dataType:this.dataType,isEditable:!1}}),this),this.isEditable&&(t[1].isEditable=!0),t},_createDataObject:function(){var t,i,e,s=[],a=0;if("qcbp_UserDefined"===this.pattern)for(t=this.inputArgs.InputBitPositions.value,i=this.inputArgs.OutputBitPositions.value,a=0;a<8;a++){(e={})[this.colNames[0]]=a;var n=i.indexOf(a);e[this.colNames[1]]=n>-1?t[n]:"",s.push(e)}else for(t=r.clone(this.INPUT_BIT_INFO[this.pattern]);a<8;)(e={})[this.colNames[0]]=a,e[this.colNames[1]]=t[a],s.push(e),a++;return s},_updateValue:function(t){var i,e=[],s=[];t.forEach((function(t,a){Object.keys(t).forEach((function(n){n&&!isNaN(t[n])&&n===this.colNames[1]&&(i=t[n])&&(e.push(i),s.push(a))}),this)}),this),this.inputArgs.InputBitPositions.value=e,this.inputArgs.OutputBitPositions.value=s},_onPatternChange:function(t){"qcbp_UserDefined"===t?this.isEditable=!0:(this.pattern=t,this.isEditable=!1),this._initializeGrid(),this._updateValue(this._grid.getStoreValue()),this.rfxArgs.QualityClass=t}});return i("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.RFxTransposeBit",f,n),f}));