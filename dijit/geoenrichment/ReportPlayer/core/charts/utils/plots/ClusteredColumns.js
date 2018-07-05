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

define(["dojo/_base/declare","./_ClusteredColumnsBase"],function(e,t){return e(t,{_drawColumn:function(e,t,r,i,l,s,o,n){this._drawColumnBackground(e,t,r,i,l,s,o,n);var a=this._plotFill(i.series.fill,l,s);a=this._shapeFill(a,r);var u=this.createRect(o,e,r).setFill(a).setStroke(i.series.stroke);return o.dyn.fill=u.getFill(),o.dyn.stroke=u.getStroke(),{shape:u,rect:r}},_drawColumnBackground:function(e,t,r,i,l,s,o,n){if(i.series.showColumnBarBackground){var a=t[t.valueProp],u={x:r.x,y:a>0?s.t:l.height-s.b-n,width:r.width,height:a>0?l.height-s.t-s.b-n:n};this.createRect(o,e,u).setFill(i.series.columnBarBackgroundColor)}}})});