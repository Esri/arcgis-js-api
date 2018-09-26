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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","./_ClusteredBarsBase"],function(e,r){return e(r,{_drawBar:function(e,r,t,i,s,a,l,o){this._drawBarBackground(e,r,t,i,s,a,l,o);var n=this._plotFill(i.series.fill,s,a);n=this._shapeFill(n,t);var d=this.createRect(l,e,t).setFill(n).setStroke(i.series.stroke);return l.dyn.fill=d.getFill(),l.dyn.stroke=d.getStroke(),{shape:d,rect:t}},_drawBarBackground:function(e,r,t,i,s,a,l,o){if(i.series.showColumnBarBackground){var n=r[r.valueProp],d={x:n<0?a.l:a.l+o,y:t.y,width:n<0?o:s.width-a.l-o-a.r,height:t.height};this.createRect(l,e,d).setFill(i.series.columnBarBackgroundColor)}}})});