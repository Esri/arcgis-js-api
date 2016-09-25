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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-construct","dojo/_base/connect","dojo/_base/Color","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic","./RasterAnalysisMixin","./RemapGrid","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RemapValues.html"],function(e,t,i,a,s,o,r,n,l,m,d,h,p,c,g,u,_,y,j,b){var v=e([r,n,l,m,d,_],{declaredClass:"esri.dijit.analysis.RemapValues",templateString:b,widgetsInTemplate:!0,inputLayer:null,geometry:null,toolName:"RemapValues",helpFileName:"RemapValues",toolNlsName:j.remapValuesTool,_resetUI:function(){this.inherited(arguments),this.remapGrid||(this.remapGrid=new y({},a.create("div",{"class":"esriLeadingMargin1 longInput esriLongLabel",style:"margin-top:1.0em;"},this._remapGridTd)),this.remapGrid.startup())},_getRasterFunction:function(){return"Remap"},_getRasterArguments:function(){var e;return this.remapGrid&&(e=this.remapGrid.get("ranges"),this.geometry&&(e=t.mixin(e,{Geometries:this.geometry},{GeometryType:"esriGeometryPolygon"}))),e},_setMapAttr:function(e){this.map=e,this._toolbar=new g(this.map),s.connect(this._toolbar,"onDrawEnd",t.hitch(this,this._addGeometry))},_onClose:function(e){this.geometry&&this.map.graphics.clear(),this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:!e})},_handlePolyBtnChange:function(e){e?(this.emit("drawtool-activate",{}),this._toolbar.activate(g.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_addGeometry:function(e){var t=new p(p.STYLE_NULL,new c(c.STYLE_SOLID,new o([0,0,0]),4)),i=new u(e,t);this.geometry&&this.map.graphics.clear(),this.map.graphics.add(i),this.geometry=e}});return i("extend-esri")&&t.setObject("dijit.analysis.RemapValues",v,h),v});