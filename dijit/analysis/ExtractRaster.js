// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/connect","dojo/_base/Color","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExtractRaster.html"],function(t,e,i,a,n,s,o,r,l,p,h,c,d,g,m,u,y,_,b){var f=t([o,r,l,p,h,y],{declaredClass:"esri.dijit.analysis.ExtractRaster",templateString:b,widgetsInTemplate:!0,inputLayer:null,clippingType:10,geometry:null,toolName:"ExtractRaster",helpFileName:"ExtractRaster",toolNlsName:_.extractRasterTool,_getRasterFunction:function(){return"Clip"},_getRasterArguments:function(){var t=this.get("clippingType"),e=t>2?this.map.extent._normalize(!0):this.geometry;return{ClippingType:t>2?1:t,ClippingGeometry:e}},_getOutputItemProperties:function(){if(this.inputLayer&&this.inputLayer.bandCount&&1===this.inputLayer.bandCount)return this._getDefaultOutputItemProperties(1,"Spectrum-Full Bright","RSP_NearestNeighbor");var t=this._getDefaultPopupInfo();return{visibility:!0,popupInfo:t}},_setDefaultInputs:function(){this.clippingType&&this._clippingTypeSelect.set("value",this.clippingType)},_onClose:function(t){this.geometry&&this.map.graphics.clear(),this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!t})},_handlePolyBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._toolbar.activate(m.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleClippingMethodChange:function(t){s.set(this._byGeometry,"display","byExtent"===t?"none":"block"),"byExtent"===t&&(this.geometry=this.map.extent._normalize(!0))},_addGeometry:function(t){var e=new d(d.STYLE_NULL,new g(g.STYLE_SOLID,new n([0,0,0]),4)),i=new u(t,e);this.geometry&&this.map.graphics.clear(),this.map.graphics.add(i),this.map.setExtent(t.getExtent(),!0),this.geometry=t},_setMapAttr:function(t){this.map=t,this._toolbar=new m(this.map),a.connect(this._toolbar,"onDrawEnd",e.hitch(this,this._addGeometry))},_setClippingTypeAttr:function(t){this.clippingType=t},_getClippingTypeAttr:function(){var t=this._clippingMethodSelect.get("value");if("byExtent"===t)return 10;var e=this._clippingTypeSelect.get("value");return this.clippingType&&e&&(this.clippingType=e),this.clippingType}});return i("extend-esri")&&e.setObject("dijit.analysis.ExtractRaster",f,c),f});