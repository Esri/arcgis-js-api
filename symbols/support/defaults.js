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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/maybe","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","./defaultsJSON"],(function(l,o,e,r,t,y,S,m,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.errorPolygonSymbol2D=o.errorPolylineSymbol2D=o.errorPointSymbol2D=o.getDefaultSymbol2D=o.defaultTextSymbol2D=o.defaultPolygonSymbol2D=o.defaultPolylineSymbol2D=o.defaultPointSymbol2D=void 0,o.defaultPointSymbol2D=S.fromJSON(n.defaultPointSymbolJSON),o.defaultPolylineSymbol2D=y.fromJSON(n.defaultPolylineSymbolJSON),o.defaultPolygonSymbol2D=t.fromJSON(n.defaultPolygonSymbolJSON),o.defaultTextSymbol2D=m.fromJSON(n.defaultTextSymbolJSON),o.getDefaultSymbol2D=function(l){if(r.isNone(l))return null;switch(l.type){case"mesh":return null;case"point":case"multipoint":return o.defaultPointSymbol2D;case"polyline":return o.defaultPolylineSymbol2D;case"polygon":case"extent":return o.defaultPolygonSymbol2D;default:e.neverReached(l)}return null},o.errorPointSymbol2D=S.fromJSON(n.errorPointSymbolJSON),o.errorPolylineSymbol2D=y.fromJSON(n.errorPolylineSymbolJSON),o.errorPolygonSymbol2D=t.fromJSON(n.errorPolygonSymbolJSON)}));