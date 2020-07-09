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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../../core/maybe","../SimpleFillSymbol","../SimpleLineSymbol","../SimpleMarkerSymbol","../TextSymbol","./defaultsJSON"],(function(e,l,o,r,t,S,n,y,m){Object.defineProperty(l,"__esModule",{value:!0}),l.defaultPointSymbol2D=n.fromJSON(m.defaultPointSymbolJSON),l.defaultPolylineSymbol2D=S.fromJSON(m.defaultPolylineSymbolJSON),l.defaultPolygonSymbol2D=t.fromJSON(m.defaultPolygonSymbolJSON),l.defaultTextSymbol2D=y.fromJSON(m.defaultTextSymbolJSON),l.getDefaultSymbol2D=function(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return l.defaultPointSymbol2D;case"polyline":return l.defaultPolylineSymbol2D;case"polygon":case"extent":return l.defaultPolygonSymbol2D;default:o.neverReached(e)}return null},l.errorPointSymbol2D=n.fromJSON(m.errorPointSymbolJSON),l.errorPolylineSymbol2D=S.fromJSON(m.errorPolylineSymbolJSON),l.errorPolygonSymbol2D=t.fromJSON(m.errorPolygonSymbolJSON)}));