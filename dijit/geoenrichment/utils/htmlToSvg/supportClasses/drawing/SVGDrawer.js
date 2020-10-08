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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["./_TextDrawer","./_ImageDrawer","./_RectDrawer","./_SVGDrawer"],(function(r,e,n,a){return{drawRect:function(r,e){return n.drawRect(r,e)},drawBorder:function(r,e){return n.drawBorder(r,e)},drawText:function(e,n,a,t){return r.drawText(e,n,a,t)},drawSVG:function(r,e,n){return a.drawSVG(r,e,n)},drawBackgroundImage:function(r,n){return e.drawBackgroundImage(r,n)},drawImage:function(r,n,a){return e.drawImage(r,n,a)}}}));