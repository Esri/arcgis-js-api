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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-construct","dojo/_base/connect","dojo/_base/Color","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic","./RasterAnalysisMixin","./RemapGrid","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RemapValues.html"],function(t,e,i,a,s,n,r,o,l,m,h,u,d,p,g,c,_,y,R,j){var b=t([r,o,l,m,h,_],{declaredClass:"esri.dijit.analysis.RemapValues",templateString:j,widgetsInTemplate:!0,inputLayer:null,geometry:null,ranges:null,toolName:"RemapValues",helpFileName:"RemapValues",toolNlsName:R.remapValuesTool,_resetUI:function(){this.inherited(arguments),this.remapGrid||(this.remapGrid=new y({},a.create("div",{class:"esriLeadingMargin1 longInput esriLongLabel",style:"margin-top:1.0em;"},this._remapGridTd)),this.remapGrid.startup())},_getRasterFunction:function(){return"Remap"},_getRasterArguments:function(){var t;return this.remapGrid&&(t=this.get("ranges"),this.geometry&&(t=e.mixin(t,{Geometries:this.geometry},{GeometryType:"esriGeometryPolygon"}))),t},_getOutputItemProperties:function(){return this._getDefaultOutputItemProperties(1,"Spectrum-Full Bright","RSP_NearestNeighbor")},_setDefaultInputs:function(){if(this.InputRanges&&this.NoDataRanges&&this.OutputValues){var t={InputRanges:this.InputRanges,OutputValues:this.OutputValues,NoDataRanges:this.NoDataRanges};this.set("ranges",t)}},_setMapAttr:function(t){this.map=t,this._toolbar=new g(this.map),s.connect(this._toolbar,"onDrawEnd",e.hitch(this,this._addGeometry))},_setRangesAttr:function(t){this.ranges=t,this.remapGrid.set("ranges",t)},_getRangesAttr:function(){return this.remapGrid.get("ranges")},_onClose:function(t){this.geometry&&this.map.graphics.clear(),this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!t})},_handlePolyBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._toolbar.activate(g.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_addGeometry:function(t){var e=new d(d.STYLE_NULL,new p(p.STYLE_SOLID,new n([0,0,0]),4)),i=new c(t,e);this.geometry&&this.map.graphics.clear(),this.map.graphics.add(i),this.geometry=t}});return i("extend-esri")&&e.setObject("dijit.analysis.RemapValues",b,u),b});