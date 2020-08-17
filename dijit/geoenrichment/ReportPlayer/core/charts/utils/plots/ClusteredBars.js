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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","./_ClusteredBarsBase"],(function(e,r){return e(r,{_drawBar:function(e,r,t,a,s,i,o,l){return this._drawBarBackground(e,r,t,a,s,i,o,l),{shape:this.createRect(o,e,t).setFill(a.series.fill).setStroke(a.series.stroke),rect:t}},_drawBarBackground:function(e,r,t,a,s,i,o,l){if(a.series.showColumnBarBackground){var n=r[r.valueProp],c={x:n<0?i.l:i.l+l,y:t.y,width:n<0?l:s.width-i.l-l-i.r,height:t.height};this.createRect(o,e,c).setFill(a.series.columnBarBackgroundColor)}}})}));
