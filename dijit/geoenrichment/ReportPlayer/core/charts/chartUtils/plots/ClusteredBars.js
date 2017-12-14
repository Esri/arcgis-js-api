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

define(["dojo/_base/declare","./_ClusteredBarsBase"],function(e,r){return e(r,{_drawBar:function(e,r,t,s,i,l,a){s.series.showColumnBarBackground&&this.createRect(a,e,{x:t.x,y:t.y,width:i.width-l.l-l.r,height:t.height}).setFill(s.series.columnBarBackgroundColor);var o=this._plotFill(s.series.fill,i,l);o=this._shapeFill(o,t);var h=this.createRect(a,e,t).setFill(o).setStroke(s.series.stroke);return a.dyn.fill=h.getFill(),a.dyn.stroke=h.getStroke(),{shape:h,rect:t}}})});