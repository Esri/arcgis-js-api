// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./_TextDrawer","./_ImageDrawer","./_RectDrawer","./_SVGDrawer"],function(r,e,a,n){var t={drawRect:function(r,e){return a.drawRect(r,e)},drawBorder:function(r,e){return a.drawBorder(r,e)},drawText:function(e,a,n,t){return r.drawText(e,a,n,t)},drawSVG:function(r,e,a){return n.drawSVG(r,e,a)},drawBackgroundImage:function(r,a,n){return e.drawBackgroundImage(r,a,n)},drawImage:function(r,a,n,t){return e.drawImage(r,a,n,t)}};return t});