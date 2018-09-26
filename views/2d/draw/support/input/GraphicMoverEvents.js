// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,i,n){this.graphic=t,this.index=e,this.screenPoint=i,this.viewEvent=n,this.type="graphic-click"}return t}();e.GraphicClickEvent=i;var n=function(){function t(t,e,i,n){this.graphic=t,this.index=e,this.screenPoint=i,this.viewEvent=n,this.type="graphic-double-click"}return t}();e.GraphicDoubleClickEvent=n;var r=function(){function t(t,e,i,n,r,h){this.graphic=t,this.index=e,this.dx=i,this.dy=n,this.screenPoint=r,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStartEvent=r;var h=function(){function t(t,e,i,n,r,h){this.graphic=t,this.index=e,this.dx=i,this.dy=n,this.screenPoint=r,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveEvent=h;var s=function(){function t(t,e,i,n,r,h){this.graphic=t,this.index=e,this.dx=i,this.dy=n,this.screenPoint=r,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStopEvent=s;var c=function(){function t(t,e,i,n){this.graphic=t,this.index=e,this.screenPoint=i,this.viewEvent=n,this.type="graphic-pointer-over"}return t}();e.GraphicPointerOverEvent=c;var o=function(){function t(t,e,i,n){this.graphic=t,this.index=e,this.screenPoint=i,this.viewEvent=n,this.type="graphic-pointer-out"}return t}();e.GraphicPointerOutEvent=o});