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

define(["dojo/_base/declare","./_ClusteredColumnsBase"],function(e,t){return e(t,{_drawColumn:function(e,t,r,s,i,l,o){s.series.showColumnBarBackground&&this.createRect(o,e,{x:r.x,y:l.t,width:r.width,height:i.height-l.t-l.b}).setFill(s.series.columnBarBackgroundColor);var n=this._plotFill(s.series.fill,i,l);n=this._shapeFill(n,r);var a=this.createRect(o,e,r).setFill(n).setStroke(s.series.stroke);return o.dyn.fill=a.getFill(),o.dyn.stroke=a.getStroke(),{shape:a,rect:r}}})});