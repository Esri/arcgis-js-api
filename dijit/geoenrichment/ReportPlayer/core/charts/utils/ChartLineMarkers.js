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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojox/charting/SimpleTheme"],function(e){var r={NONE:"None",CIRCLE:"Circle",SQUARE:"Square",DIAMOND:"Diamond",CROSS:"Cross",X:"X",TRIANGLE:"Triangle",TRIANGLE_INVERTED:"TriangleInverted"},n={};for(var a in r)n[r[a]]=a;return r.getMarkerPath=function(r){return e.defaultMarkers[n[r]]||""},r});