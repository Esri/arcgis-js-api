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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","./ChartTypes","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,i,o,n){var r={};return r.calcChartDimentions=function(t,r){function h(){u||i.set(a.getLegendNode(),{width:d-20+"px"});var t=a.legend&&n.position(a.legend.domNode);return t=e.mixin({w:0,h:0},t),u||i.set(a.getLegendNode(),{width:""}),t}var a=t,s=r.visualProps,l=r.chartType,g=r.maxIconSize,d=s.width,c=s.height,f={l:30,r:30},p={l:0,r:0,t:0},m={},x=!n.isHidden(a.chartLabel),w={w:0,h:0};l==o.COLUMN&&!s.xAxis.show&&s.showAxisIcons&&(c+=30),x&&(w.h=i.get(a.chartLabel,"height"),c-=w.h),s.showAxisIcons&&(l==o.COLUMN?c-=g:l==o.BAR&&(p.l+=g,d-=g));var b=s.legend.placement,u="Left"==b||"Right"==b,L=h(),v=u?c-48:0;L.h=v?Math.min(L.h,v):L.h,L.w+=4,L.h+=20;var y=s.legend.placementOffset/100;switch(b){case"None":break;case"Left":d-=L.w,m.l=5,m.t=w.h+c*y,p.l+=L.w;break;case"Right":d-=L.w,m.r=10,m.t=w.h+c*y,p.r+=L.w;break;case"Top":c-=L.h,m.t=x?w.h:10,m.l=10,m.r=10,p.t+=L.h;break;case"Bottom":c-=L.h,m.l=10,m.r=10,m.b=10}return i.set(a.chartLabel,{marginLeft:f.l+"px",marginRight:f.r+"px"}),i.set(a.chartContainerWithAxis,{marginTop:p.t+"px",marginLeft:p.l+"px",marginRight:p.r+"px"}),a.legend&&i.set(a.legend.domNode,{maxHeight:v?v+"px":""}),i.set(a.getLegendNode(),{left:void 0!==m.l?m.l+"px":"",right:void 0!==m.r?m.r+"px":"",top:void 0!==m.t?m.t+"px":"",bottom:void 0!==m.b?m.b+"px":""}),{w:d,h:c}},r.resizeVisualProperties=function(e,t,i){var o=e.width,n=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n}),e.floatingIcons&&e.floatingIcons.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n})},r});