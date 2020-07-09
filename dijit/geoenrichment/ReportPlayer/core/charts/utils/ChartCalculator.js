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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-style","./ChartTypes","../legends/ChartLegendTypes","../legends/ChartLegendPlacements","../../themes/ThemeLibrary","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,t,i,n,o,s,a){var r={};return r.PRETTY_PADDING=10,r.calcChartDimentions=function(s,r){var l=s,h=r.visualProps,c=r.comparisonInfo,m=r.chartType,d=r.maxIconSize,g=r.numPoints,f=h.width,x=h.height,p={l:0,r:0,t:0},u={},T=!a.isHidden(l.chartLabel),A={w:0,h:0};if(i.isColumnLike(m)&&!h.xAxis.show&&h.showAxisIcons&&(x+=30),T&&(A.h=t.get(l.chartLabel,"height")+(h.title.verticalShift||0),x-=A.h),h.showAxisIcons)if(i.isColumnLike(m))x-=Math.min(d,(f-100)/g*.8)+10;else if(i.isBarLike(m)){var w=Math.min(d,(x-50)/g*.8)+10;p.l+=w,f-=w}var y=h.legend||{},L=y[y.type===n.MIN_MAX?"minMax":"series"]||{},b=L.placement||o.NONE,I=(L.placementOffset||0)/100,N=b===o.LEFT||b===o.RIGHT,v={w:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetWidth+20,h:s.comparisonSelectBlock&&s.comparisonSelectBlock.offsetHeight+20};!c||!i.isComparisonSupported(m)||y.type===n.MIN_MAX&&N||(x-=v.h);var M=function(){N||t.set(l.getLegendNode(),{width:f-20+"px"});var i=l.legend&&a.noTransformPosition(l.legend.domNode);return i=e.mixin({w:0,h:0},i),N||t.set(l.getLegendNode(),{width:""}),i}(),k=N?x-48:0;switch(M.h=k?Math.min(M.h,k):M.h,M.h+=20,y.type===n.MIN_MAX&&N&&(M.w=Math.max(M.w,v.w)),b){case o.NONE:break;case o.LEFT:u.l=10,u.t=A.h+x*I,p.l+=2*u.l+M.w,f-=p.l;break;case o.RIGHT:u.r=10,u.t=A.h+x*I,p.r+=2*u.r+M.w,f-=p.r;break;case o.TOP:x-=M.h,u.t=T?A.h+10:10,u.l=10,u.r=10,p.t+=M.h;break;case o.BOTTOM:x-=M.h,u.l=10,u.r=10,u.b=10,c&&(u.b+=v.h-10)}return t.set(l.chartLabel,{marginLeft:"10px",marginRight:"10px"}),t.set(l.chartContainerWithAxis,{marginTop:p.t+"px",marginLeft:p.l+"px",marginRight:p.r+"px"}),l.legend&&t.set(l.legend.domNode,{maxHeight:k?k+"px":""}),t.set(l.getLegendNode(),{left:void 0!==u.l?u.l+"px":"",right:void 0!==u.r?u.r+"px":"",top:void 0!==u.t?u.t+"px":"",bottom:void 0!==u.b?u.b+"px":""}),{w:f,h:x}},r.calcAxisLabelsAutoTilt=function(t,i,n,o){if(!i||!i.length||0!==n.xAxis.labelsAngle)return!1;var r=!1,l=(t-50)/i[0].data.length-20,h=e.mixin({},o.xAxis.axisStyle,o.xAxis.style,n.xAxis.style),c=a.getMeasureContext({style:"font-size:"+(h.fontSize||s.CHART_DATA_FONT_SIZE-1)+"px;font-family:"+(h.fontFamily||s.DEFAULT_FONT_FAMILY_GRAPHIC)});return i[0].data.some((function(e){return c.measureText(e.name).w>l}))&&(r=20),c.destroy(),r},r.resizeVisualProperties=function(e,t,i){var n=e.width,o=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach((function(e){e.style.left*=t/n,e.style.top*=i/o})),e.floatingIcons&&e.floatingIcons.forEach((function(e){e.style.left*=t/n,e.style.top*=i/o}))},r}));