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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/has","../../../symbols/SimpleMarkerSymbol","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleFillSymbol","./Edit","./SelectionTools","./DropDownToolBase","../../../kernel"],(function(e,t,i,o,s,n,l,c,r,a,h,_,S){var d=e([_],{declaredClass:"esri.dijit.editing.tools.Selection",_enabled:!0,activate:function(){this.inherited(arguments),this._sConnect=o.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd")},deactivate:function(){this.inherited(arguments),o.disconnect(this._sConnect),delete this._sConnect},_initializeTool:function(){this._createSymbols(),this._initializeLayers(),this._toolTypes=["select","selectadd","selectremove"]},_onDrawEnd:function(e){this.inherited(arguments),this._settings.editor._hideAttributeInspector();var i=this._settings.layers;this._selectMethod=this._activeTool._selectMethod,this._settings.editor._selectionHelper.selectFeaturesByGeometry(i,e,this._selectMethod,t.hitch(this,"onFinished"))},_createSymbols:function(){this._pointSelectionSymbol=new l(l.STYLE_CIRCLE,10,new c(c.STYLE_SOLID,new s([0,0,0]),1),new s([255,0,0,.5])),this._polylineSelectionSymbol=new c(c.STYLE_SOLID,new s([0,200,255]),2),this._polygonSelectionSymbol=new r(r.STYLE_SOLID,new c(c.STYLE_SOLID,new s([0,0,0]),1),new s([0,200,255,.5]))},_initializeLayers:function(){var e=this._settings.layers;i.forEach(e,this._setSelectionSymbol,this)},_setSelectionSymbol:function(e){var t=null;switch(e.geometryType){case"esriGeometryPoint":t=this._pointSelectionSymbol;break;case"esriGeometryPolyline":t=this._polylineSelectionSymbol;break;case"esriGeometryPolygon":t=this._polygonSelectionSymbol}e.setSelectionSymbol(e._selectionSymbol||t)},_createTools:function(){i.forEach(this._toolTypes,this._createTool,this),this.inherited(arguments)},_createTool:function(e){var i=t.mixin(h[e],{settings:this._settings,onClick:t.hitch(this,"onItemClicked",h[e].id)});this._tools[e.toUpperCase()]=new a(i)}});return n("extend-esri")&&t.setObject("dijit.editing.tools.Selection",d,S),d}));