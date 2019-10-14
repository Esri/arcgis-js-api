// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-click"}return t}();i.GraphicClickEvent=e;var h=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-double-click"}return t}();i.GraphicDoubleClickEvent=h;var n=function(){function t(t,i,e,h,n,r,s,a,c,o){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=c,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStartEvent=n;var r=function(){function t(t,i,e,h,n,r,s,a,c,o){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=c,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveEvent=r;var s=function(){function t(t,i,e,h,n,r,s,a,c,o){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=c,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStopEvent=s;var a=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-over"}return t}();i.GraphicPointerOverEvent=a;var c=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-out"}return t}();i.GraphicPointerOutEvent=c;var o=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-down"}return t}();i.GraphicPointerDownEvent=o;var p=function(){function t(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-up"}return t}();i.GraphicPointerUpEvent=p});