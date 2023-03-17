// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","./_ClusteredColumnsBase"],(function(e,r){return e(r,{_drawColumn:function(e,r,t,o,s,i,n,a){return this._drawColumnBackground(e,r,t,o,s,i,n,a),{shape:this.createRect(n,e,t).setFill(o.series.fill).setStroke(o.series.stroke),rect:t}},_drawColumnBackground:function(e,r,t,o,s,i,n,a){if(o.series.showColumnBarBackground){var u=r[r.valueProp],l={x:t.x,y:u>0?i.t:s.height-i.b-a,width:t.width,height:u>0?s.height-i.t-i.b-a:a};this.createRect(n,e,l).setFill(o.series.columnBarBackgroundColor)}}})}));