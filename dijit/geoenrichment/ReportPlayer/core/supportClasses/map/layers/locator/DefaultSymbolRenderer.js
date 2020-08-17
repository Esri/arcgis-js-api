// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/Color","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol"],(function(o,t,e){return{_defaultLocatorSymbol:null,_defaultLocatorSymbolHighlighted:null,getDefaultLocatorSymbol:function(){return this._defaultLocatorSymbol||(this._defaultLocatorSymbol=new t(t.STYLE_CIRCLE,10,new e(e.STYLE_SOLID,new o([255,0,0,1]),2),new o([255,0,0,.75]))),this._defaultLocatorSymbol},getDefaultLocatorSymbolHighlighted:function(){return this._defaultLocatorSymbolHighlighted||(this._defaultLocatorSymbolHighlighted=new t(t.STYLE_CIRCLE,11,new e(e.STYLE_SOLID,new o([255,255,255,1]),2),new o([255,50,50,1]))),this._defaultLocatorSymbolHighlighted}}}));
