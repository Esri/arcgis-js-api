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

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","./ChartTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,i,o,n,a,s){var r={};return r.calcChartDimentions=function(t,r){var h=t,l=r.visualProps,c=r.comparisonInfo,d=r.chartType,g=r.maxIconSize,p=l.width,m=l.height,f={l:0,r:0,t:0},x={},w=!s.isHidden(h.chartLabel),L={w:0,h:0};o.isColumnLike(d)&&!l.xAxis.show&&l.showAxisIcons&&(m+=30),w&&(L.h=i.get(h.chartLabel,"height"),m-=L.h),l.showAxisIcons&&(o.isColumnLike(d)?m-=g:o.isBarLike(d)&&(f.l+=g,p-=g));var b=l.legend[l.legend.type===n.MIN_MAX?"minMax":"series"],u=b.placement,T=(b.placementOffset||0)/100,y=u===a.LEFT||u===a.RIGHT,k={w:t.comparisonSelectBlock&&t.comparisonSelectBlock.offsetWidth+20,h:t.comparisonSelectBlock&&t.comparisonSelectBlock.offsetHeight+20};!c||!o.isComparisonEnabled(d)||l.legend.type===n.MIN_MAX&&y||(m-=k.h);var v=function(){y||i.set(h.getLegendNode(),{width:p-20+"px"});var t=h.legend&&s.position(h.legend.domNode);return t=e.mixin({w:0,h:0},t),y||i.set(h.getLegendNode(),{width:""}),t}(),I=y?m-48:0;switch(v.h=I?Math.min(v.h,I):v.h,v.h+=20,l.legend.type===n.MIN_MAX&&y&&(v.w=Math.max(v.w,k.w)),u){case a.NONE:break;case a.LEFT:x.l=10,x.t=L.h+m*T,f.l+=2*x.l+v.w,p-=f.l;break;case a.RIGHT:x.r=10,x.t=L.h+m*T,f.r+=2*x.r+v.w,p-=f.r;break;case a.TOP:m-=v.h,x.t=w?L.h+10:10,x.l=10,x.r=10,f.t+=v.h;break;case a.BOTTOM:m-=v.h,x.l=10,x.r=10,x.b=10,c&&(x.b+=k.h-10)}return i.set(h.chartLabel,{marginLeft:"10px",marginRight:"10px"}),i.set(h.chartContainerWithAxis,{marginTop:f.t+"px",marginLeft:f.l+"px",marginRight:f.r+"px"}),h.legend&&i.set(h.legend.domNode,{maxHeight:I?I+"px":""}),i.set(h.getLegendNode(),{left:void 0!==x.l?x.l+"px":"",right:void 0!==x.r?x.r+"px":"",top:void 0!==x.t?x.t+"px":"",bottom:void 0!==x.b?x.b+"px":""}),{w:p,h:m}},r.resizeVisualProperties=function(e,t,i){var o=e.width,n=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n}),e.floatingIcons&&e.floatingIcons.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n})},r});