// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","dojo/_base/array","dojo/i18n!../../nls/jsapi","../../kernel","./RFxBandMatrix"],function(t,e,i,s,n,a,r){var o=t("esriRFxStatisticsGrid",[r],{constructor:function(){var t=n.common;t=i.mixin(t,n.widgets.rasterFunctionEditor),this.displayNames=[t.min,t.max,t.mean,t.rfxStatisticsGrid.stdDev],this.nCols=4,this.inherited(arguments)},_updateValue:function(){if(this._store&&this._grid){var t,e,i=this._store.data;t=this.value&&this.value.elements?{elements:[]}:[],s.every(i,function(i,s){return s===i.length-1?!1:(e={min:i[0],max:i[1],mean:i[2],standardDeviation:i[3]},void(t.elements?t.elements.push(e):t.push(e)))},this),this.value=t}},_setStoreData:function(t){if(!(t&&t.length||t&&t.elements&&t.elements.length))return void this._store.setData([]);var e=[];t=t.elements||t,s.forEach(t,function(t,i){e[i]={id:i+1,idNum:i+1,0:t.min,1:t.max,2:t.mean,3:t.standardDeviation}}),this._store.setData(e)}});return e("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxStatisticsGrid",o,a),o});