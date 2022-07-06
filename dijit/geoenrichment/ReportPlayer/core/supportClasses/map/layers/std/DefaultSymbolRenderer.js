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

define(["dojo/_base/Color","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/renderers/UniqueValueRenderer"],(function(e,t,l,S){return{_defaultStdSymbol:null,_defaultStdSymbolHighlighted:null,getDefaultStdSymbol:function(){return this._defaultStdSymbol||(this._defaultStdSymbol=new t(t.STYLE_SOLID,new l(l.STYLE_SOLID,new e([105,134,68,1]),2),new e([105,134,68,.1]))),this._defaultStdSymbol},getDefaultStdSymbolHighlighted:function(){return this._defaultStdSymbolHighlighted||(this._defaultStdSymbolHighlighted=new t(t.STYLE_SOLID,new l(l.STYLE_SOLID,new e([0,255,255,1]),2),new e([0,200,0,.1]))),this._defaultStdSymbolHighlighted},getDefaultStdRenderer:function(){return new S(this.getDefaultStdSymbol(),"StdGeographyLevel")}}}));