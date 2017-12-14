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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","./ChartTypes","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,i,o,n){var r={},a=40;return r.calcChartDimentions=function(t,r){function s(){v||i.set(h.getLegendNode(),{width:f-20+"px"});var t=h.legend&&n.position(h.legend.domNode);return t=e.mixin({w:0,h:0},t),v||i.set(h.getLegendNode(),{width:""}),t}var h=t,l=r.visualProps,d=r.comparisonInfo,g=r.chartType,c=r.maxIconSize,f=l.width,m=l.height,p={l:30,r:30},x={l:0,r:0,t:0},w={},b=!n.isHidden(h.chartLabel),u={w:0,h:0};o.isColumnLike(g)&&!l.xAxis.show&&l.showAxisIcons&&(m+=30),b&&(u.h=i.get(h.chartLabel,"height"),m-=u.h),l.showAxisIcons&&(o.isColumnLike(g)?m-=c:o.isBarLike(g)&&(x.l+=c,f-=c)),d&&o.isComparisonEnabled(g)&&(m-=a);var L=l.legend.placement,v="Left"===L||"Right"===L,y=s(),k=v?m-48:0;y.h=k?Math.min(y.h,k):y.h,y.w+=4,y.h+=20;var C=l.legend.placementOffset/100;switch(L){case"None":break;case"Left":f-=y.w,w.l=5,w.t=u.h+m*C,x.l+=y.w;break;case"Right":f-=y.w,w.r=10,w.t=u.h+m*C,x.r+=y.w;break;case"Top":m-=y.h,w.t=b?u.h+10:10,w.l=10,w.r=10,x.t+=y.h;break;case"Bottom":m-=y.h,w.l=10,w.r=10,w.b=10,d&&(w.b+=a-10)}return i.set(h.chartLabel,{marginLeft:p.l+"px",marginRight:p.r+"px"}),i.set(h.chartContainerWithAxis,{marginTop:x.t+"px",marginLeft:x.l+"px",marginRight:x.r+"px"}),h.legend&&i.set(h.legend.domNode,{maxHeight:k?k+"px":""}),i.set(h.getLegendNode(),{left:void 0!==w.l?w.l+"px":"",right:void 0!==w.r?w.r+"px":"",top:void 0!==w.t?w.t+"px":"",bottom:void 0!==w.b?w.b+"px":""}),{w:f,h:m}},r.resizeVisualProperties=function(e,t,i){var o=e.width,n=e.height;e.width=t,e.height=i,e.floatingTexts&&e.floatingTexts.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n}),e.floatingIcons&&e.floatingIcons.forEach(function(e){e.style.left*=t/o,e.style.spaceBefore*=i/n})},r});