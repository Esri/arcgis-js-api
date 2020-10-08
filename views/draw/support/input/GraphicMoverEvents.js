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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.GraphicPointerUpEvent=i.GraphicPointerDownEvent=i.GraphicPointerOutEvent=i.GraphicPointerOverEvent=i.GraphicMoveStopEvent=i.GraphicMoveEvent=i.GraphicMoveStartEvent=i.GraphicDoubleClickEvent=i.GraphicClickEvent=void 0;var e=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-click"};i.GraphicClickEvent=e;var h=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-double-click"};i.GraphicDoubleClickEvent=h;var n=function(){function t(t,i,e,h,n,r,s,a,p,v){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=p,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStartEvent=n;var r=function(){function t(t,i,e,h,n,r,s,a,p,v){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=p,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveEvent=r;var s=function(){function t(t,i,e,h,n,r,s,a,p,v){this.graphic=t,this.allGraphics=i,this.index=e,this.x=h,this.y=n,this.dx=r,this.dy=s,this.totalDx=a,this.totalDy=p,this.viewEvent=v,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStopEvent=s;var a=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-over"};i.GraphicPointerOverEvent=a;var p=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-out"};i.GraphicPointerOutEvent=p;var v=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-down"};i.GraphicPointerDownEvent=v;var c=function(t,i,e,h,n){this.graphic=t,this.index=i,this.x=e,this.y=h,this.viewEvent=n,this.type="graphic-pointer-up"};i.GraphicPointerUpEvent=c}));