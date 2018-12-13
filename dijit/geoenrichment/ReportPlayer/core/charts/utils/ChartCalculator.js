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

define(["dojo/_base/lang","dojo/dom-style","./ChartTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements","../../themes/ThemeLibrary","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,i,n,o,s,a){var r={};return r.calcChartDimentions=function(s,r){var l=s,h=r.visualProps,c=r.comparisonInfo,d=r.chartType,g=r.maxIconSize,m=h.width,x=h.height,f={l:0,r:0,t:0},p={},u=!a.isHidden(l.chartLabel),T={w:0,h:0};i.isColumnLike(d)&&!h.xAxis.show&&h.showAxisIcons&&(x+=30),u&&(T.h=t.get(l.chartLabel,"height")+(h.title.verticalShift||0),x-=T.h),h.showAxisIcons&&(i.isColumnLike(d)?x-=g:i.isBarLike(d)&&(f.l+=g,m-=g));var A=h.legend[h.legend.type===n.MIN_MAX?"minMax":"series"],w=A.placement,y=(A.placementOffset||0)/100,L=w===o.LEFT||w===o.RIGHT,b={w:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetWidth+20,h:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetHeight+20};!c||!i.isComparisonEnabled(d)||h.legend.type===n.MIN_MAX&&L||(x-=b.h);var I=function(){L||t.set(l.getLegendNode(),{width:m-20+"px"});var i=l.legend&&a.position(l.legend.domNode);return i=e.mixin({w:0,h:0},i),L||t.set(l.getLegendNode(),{width:""}),i}(),v=L?x-48:0;switch(I.h=v?Math.min(I.h,v):I.h,I.h+=20,h.legend.type===n.MIN_MAX&&L&&(I.w=Math.max(I.w,b.w)),w){case o.NONE:break;case o.LEFT:p.l=10,p.t=T.h+x*y,f.l+=2*p.l+I.w,m-=f.l;break;case o.RIGHT:p.r=10,p.t=T.h+x*y,f.r+=2*p.r+I.w,m-=f.r;break;case o.TOP:x-=I.h,p.t=u?T.h+10:10,p.l=10,p.r=10,f.t+=I.h;break;case o.BOTTOM:x-=I.h,p.l=10,p.r=10,p.b=10,c&&(p.b+=b.h-10)}return t.set(l.chartLabel,{marginLeft:"10px",marginRight:"10px"}),t.set(l.chartContainerWithAxis,{marginTop:f.t+"px",marginLeft:f.l+"px",marginRight:f.r+"px"}),l.legend&&t.set(l.legend.domNode,{maxHeight:v?v+"px":""}),t.set(l.getLegendNode(),{left:void 0!==p.l?p.l+"px":"",right:void 0!==p.r?p.r+"px":"",top:void 0!==p.t?p.t+"px":"",bottom:void 0!==p.b?p.b+"px":""}),{w:m,h:x}},r.calcAxisLabelsAutoTitle=function(t,i,n,o){if(!i||!i.length||0!==n.xAxis.labelsAngle)return!1;var r=!1,l=i[0].data.length,h=(t-50)/l-20,c=e.mixin({},o.xAxis.axisStyle,o.xAxis.style,n.xAxis.style),d=a.getMeasureContext({style:"font-size:"+(c.fontSize||s.CHART_DATA_FONT_SIZE-1)+"px;font-family:"+(c.fontFamily||s.DEFAULT_FONT_FAMILY_GRAPHIC)});return i[0].data.some(function(e){return d.measureText(e.name).w>h})&&(r=20),d.destroy(),r},r.resizeVisualProperties=function(e,t,i){var n=e.width,o=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach(function(e){e.style.left*=t/n,e.style.spaceBefore*=i/o}),e.floatingIcons&&e.floatingIcons.forEach(function(e){e.style.left*=t/n,e.style.spaceBefore*=i/o})},r});