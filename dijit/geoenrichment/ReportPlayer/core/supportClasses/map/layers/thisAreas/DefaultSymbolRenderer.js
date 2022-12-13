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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/Color","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol"],(function(e,n,r,o){return{generateSMS:function(){return new n(n.STYLE_CIRCLE,20,new o(o.STYLE_SOLID,new e([255,255,255,.7]),2),new e([255,0,0,.7]))},generateSFS:function(){var n=new r;return n.setOutline(new o(o.STYLE_SOLID,new e([255,0,0,1]),2)),n.setColor(new e([100,100,100,.25])),n}}}));