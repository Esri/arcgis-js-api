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

define(["dojo/_base/declare","dojo/_base/lang"],function(e,i){return e(null,{minVisibleHeight:2,createRect:function(e,t,h){var n=i.mixin({},h);if(n.height<this.minVisibleHeight){var a=this.minVisibleHeight-h.height;n.y-=a,n.height=this.minVisibleHeight}var o;return this.opt.enableCache&&e._rectFreePool.length>0?(o=e._rectFreePool.pop(),o.setShape(n),t.add(o)):o=t.createRect(n),this.opt.enableCache&&e._rectUsePool.push(o),o}})});