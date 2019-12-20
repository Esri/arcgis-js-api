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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/connect","dojo/_base/Color","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic","../../geometry/Polygon","../../geometry/Extent","./RasterAnalysisMixin","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExtractRaster.html"],function(t,e,i,s,a,n,o,r,l,p,h,c,y,m,d,g,u,_,b,x,v,T){var f=t([o,r,l,p,h,b],{declaredClass:"esri.dijit.analysis.ExtractRaster",templateString:T,widgetsInTemplate:!0,browseType:[x.IS],inputLayer:null,clipType:1,geometry:null,graphic:null,_findDeepestArgsForRerun:!0,toolName:"ExtractRaster",helpFileName:"ExtractRaster",toolNlsName:v.extractRasterTool,_getRasterFunction:function(){return"Clip"},_getRasterArguments:function(){var t=this.get("clipType"),e=this.geometry;return{ClippingType:"extent"===e.type?1:t,ClippingGeometry:e}},_getOutputItemProperties:function(){return this.inputLayer&&this.inputLayer.bandCount&&1===this.inputLayer.bandCount?this._getDefaultOutputItemProperties(1,"Spectrum-Full Bright","RSP_NearestNeighbor"):{visibility:!0,popupInfo:this._getDefaultPopupInfo()}},_setDefaultInputs:function(){var t=this.ClippingType||this.clipType,e=this.ClippingGeometry;this.rerun&&t&&e?"extent"===e.type?(this._clippingMethodSelect.set("value","byExtent"),this.clipType=1,this.geometry=new _(e)):(this._clippingMethodSelect.set("value","byGeometry"),this._clippingTypeSelect.set("value",t),this.geometry=new u(e),this._addGeometry(this.geometry)):(this._clippingMethodSelect.set("value","byExtent"),this.geometry=this.map.extent._normalize(!0),this.clipType=1)},_onClose:function(t){this._clearGeometry(),this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!t})},_handlePolyBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._toolbar.activate(d.POLYGON),this._clearGeometry()):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleClippingMethodChange:function(t){n.set(this._byGeometry,"display","byExtent"===t?"none":"block"),"byExtent"===t&&(this.geometry=this.map.extent._normalize(!0),this._clearGeometry())},_addGeometry:function(t){if(t){this._clearGeometry();var e=new y(y.STYLE_NULL,new m(m.STYLE_SOLID,new a([0,0,0]),4)),i=new g(t,e);this.map.graphics.add(i),this.graphic=i,this.map.setExtent(t.getExtent(),!0),this.geometry=t}},_clearGeometry:function(){this.graphic&&this.map.graphics.remove(this.graphic)},_setMapAttr:function(t){this.map=t,this._toolbar=new d(this.map),s.connect(this._toolbar,"onDrawEnd",e.hitch(this,this._addGeometry))},_setClipTypeAttr:function(t){this.clipType=t},_getClipTypeAttr:function(){var t=this._clippingMethodSelect.get("value");return this.clipType="byExtent"===t?1:this._clippingTypeSelect.get("value"),this.clipType}});return i("extend-esri")&&e.setObject("dijit.analysis.ExtractRaster",f,c),f});