// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(e,t,i,n,o){var a=function(e){function t(t){e.call(this),this.shape=n.getDefault("Line"),this.rawNode=t}return i(t,e),t.prototype.getBoundingBox=function(){if(!this.bbox){var e=this.shape;this.bbox={x:Math.min(e.x1,e.x2),y:Math.min(e.y1,e.y2),width:Math.abs(e.x2-e.x1),height:Math.abs(e.y2-e.y1)}}return this.bbox},t.nodeType="line",t}(o["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a});