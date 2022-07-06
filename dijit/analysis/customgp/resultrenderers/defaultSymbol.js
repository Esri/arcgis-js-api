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

define(["dojo/json","dojo/text!./symbol.json","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/jsonUtils","esri/Color"],(function(o,e,n,l,s,i){var S=o.parse(e),m={};return m.pointSymbol=s.fromJson(S.pointSymbol),m.lineSymbol=new n(n.STYLE_SOLID,new i([0,69,117]),2),m.polygonSymbol=new l(l.STYLE_SOLID,new n(n.STYLE_SOLID,new i([110,110,110]),1),new i([0,100,255,.6])),m}));