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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojox/charting/SimpleTheme"],(function(r){var e={NONE:"None",CIRCLE:"Circle",SQUARE:"Square",DIAMOND:"Diamond",CROSS:"Cross",X:"X",TRIANGLE:"Triangle",TRIANGLE_INVERTED:"TriangleInverted"},t=[e.CIRCLE,e.SQUARE,e.DIAMOND,e.CROSS,e.X,e.TRIANGLE,e.TRIANGLE_INVERTED],n={};for(var a in e)n[e[a]]=a;return e.DEFAULT_SIZE=3,e.isSupported=function(r){return-1!==t.indexOf(r)},e.getMarkerAt=function(r){return t[r%t.length]},e.getMarkerPath=function(t,a){var E=(a>=0?a:e.DEFAULT_SIZE)/e.DEFAULT_SIZE;switch(t){case e.CIRCLE:return"m"+-3*E+",0 c0,"+-4*E+" "+6*E+","+-4*E+" "+6*E+",0 m"+-6*E+",0 c0,"+4*E+" "+6*E+","+4*E+" "+6*E+",0";case e.SQUARE:return"m"+-3*E+","+-3*E+" l0,"+6*E+" "+6*E+",0 0,"+-6*E+" z";case e.DIAMOND:return"m0,"+-3*E+" l"+3*E+","+3*E+" "+-3*E+","+3*E+" "+-3*E+","+-3*E+" z";case e.CROSS:return"m0,"+-3*E+" l0,"+6*E+" m"+-3*E+","+-3*E+" l"+6*E+",0";case e.X:return"m"+-3*E+","+-3*E+" l"+6*E+","+6*E+" m0,"+-6*E+" l"+-6*E+","+6*E;case e.TRIANGLE:return"m"+-3*E+","+3*E+" l"+3*E+","+-6*E+" "+3*E+","+6*E+" z";case e.TRIANGLE_INVERTED:return"m"+-3*E+","+-3*E+" l"+3*E+","+6*E+" "+3*E+","+-6*E+" z"}return r.defaultMarkers[n[t]]||""},e.getMarkerPathAt=function(r,t){return e.getMarkerPath(e.getMarkerAt(r),t)},e}));