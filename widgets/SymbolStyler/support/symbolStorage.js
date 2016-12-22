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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../symbols/support/jsonUtils"],function(e,t,o){function n(){var e=sessionStorage.getItem(c(f.recent));return e?a(e):void 0}function s(){return JSON.parse(localStorage.getItem(c(f.custom)))}function r(){}function u(){}function m(){}function c(e){return i+"/"+e}function a(e){return e.symbols=e.symbols.map(function(e){return o.fromJSON(e)}),e}var i="symbol-storage/symbol",f={"default":"default",recent:"recent",custom:"custom",types:"types",version:"version"};t.loadRecentSymbolItem=n,t.loadCustomItems=s,t.saveCustomItems=r,t.saveRecentItem=u,t.saveDefaultItem=m});