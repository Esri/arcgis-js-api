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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-click"}return t}();i.GraphicClickEvent=e;var n=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-double-click"}return t}();i.GraphicDoubleClickEvent=n;var h=function(){function t(t,i,e,n,h,r,s,o,c){this.graphic=t,this.index=i,this.x=e,this.y=n,this.dx=h,this.dy=r,this.totalDx=s,this.totalDy=o,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStartEvent=h;var r=function(){function t(t,i,e,n,h,r,s,o,c){this.graphic=t,this.index=i,this.x=e,this.y=n,this.dx=h,this.dy=r,this.totalDx=s,this.totalDy=o,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveEvent=r;var s=function(){function t(t,i,e,n,h,r,s,o,c){this.graphic=t,this.index=i,this.x=e,this.y=n,this.dx=h,this.dy=r,this.totalDx=s,this.totalDy=o,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStopEvent=s;var o=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-pointer-over"}return t}();i.GraphicPointerOverEvent=o;var c=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-pointer-out"}return t}();i.GraphicPointerOutEvent=c;var p=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-pointer-down"}return t}();i.GraphicPointerDownEvent=p;var a=function(){function t(t,i,e,n,h){this.graphic=t,this.index=i,this.x=e,this.y=n,this.viewEvent=h,this.type="graphic-pointer-up"}return t}();i.GraphicPointerUpEvent=a});