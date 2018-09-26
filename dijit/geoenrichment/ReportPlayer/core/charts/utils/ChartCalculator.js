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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-style","./ChartTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,i,o,n,a){var s={};return s.calcChartDimentions=function(s,r){var l=s,h=r.visualProps,c=r.comparisonInfo,d=r.chartType,g=r.maxIconSize,p=h.width,m=h.height,f={l:0,r:0,t:0},x={},w=!a.isHidden(l.chartLabel),L={w:0,h:0};i.isColumnLike(d)&&!h.xAxis.show&&h.showAxisIcons&&(m+=30),w&&(L.h=t.get(l.chartLabel,"height")+(h.title.verticalShift||0),m-=L.h),h.showAxisIcons&&(i.isColumnLike(d)?m-=g:i.isBarLike(d)&&(f.l+=g,p-=g));var b=h.legend[h.legend.type===o.MIN_MAX?"minMax":"series"],u=b.placement,T=(b.placementOffset||0)/100,v=u===n.LEFT||u===n.RIGHT,k={w:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetWidth+20,h:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetHeight+20};!c||!i.isComparisonEnabled(d)||h.legend.type===o.MIN_MAX&&v||(m-=k.h);var y=function(){v||t.set(l.getLegendNode(),{width:p-20+"px"});var i=l.legend&&a.position(l.legend.domNode);return i=e.mixin({w:0,h:0},i),v||t.set(l.getLegendNode(),{width:""}),i}(),I=v?m-48:0;switch(y.h=I?Math.min(y.h,I):y.h,y.h+=20,h.legend.type===o.MIN_MAX&&v&&(y.w=Math.max(y.w,k.w)),u){case n.NONE:break;case n.LEFT:x.l=10,x.t=L.h+m*T,f.l+=2*x.l+y.w,p-=f.l;break;case n.RIGHT:x.r=10,x.t=L.h+m*T,f.r+=2*x.r+y.w,p-=f.r;break;case n.TOP:m-=y.h,x.t=w?L.h+10:10,x.l=10,x.r=10,f.t+=y.h;break;case n.BOTTOM:m-=y.h,x.l=10,x.r=10,x.b=10,c&&(x.b+=k.h-10)}return t.set(l.chartLabel,{marginLeft:"10px",marginRight:"10px"}),t.set(l.chartContainerWithAxis,{marginTop:f.t+"px",marginLeft:f.l+"px",marginRight:f.r+"px"}),l.legend&&t.set(l.legend.domNode,{maxHeight:I?I+"px":""}),t.set(l.getLegendNode(),{left:void 0!==x.l?x.l+"px":"",right:void 0!==x.r?x.r+"px":"",top:void 0!==x.t?x.t+"px":"",bottom:void 0!==x.b?x.b+"px":""}),{w:p,h:m}},s.resizeVisualProperties=function(e,t,i){var o=e.width,n=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n}),e.floatingIcons&&e.floatingIcons.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n})},s});