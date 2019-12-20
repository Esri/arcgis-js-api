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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredBars"],function(e,t,a,i){return e(i,{getSeriesStats:function(){var e,i=a.collectStats(this.series,t.hitch(this,"isNullValue"));return i.hmin-=.5,i.hmax+=.5,e=i.hmin,i.hmin=i.vmin,i.vmin=e,e=i.hmax,i.hmax=i.vmax,i.vmax=e,i},rearrangeValues:function(e,t,i){return a.rearrangeValues.call(this,e,t,i)},_drawBarBackground:function(e,t,a,i,s,r,n,h){this.series.indexOf(n)===this.series.length-1&&this.inherited(arguments)},_getYShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,a,i,s,r){var n=t[t.valueProp];if(!(e.box.h-3>a.height)){if(e.box.w+2*this.opt.labelOffset>a.width){var h=n>0?s.width-r.r-(a.x+a.width+this.opt.labelOffset):a.x-r.l-2*this.opt.labelOffset;return void(e.box.w<=h&&this._renderOutside(e,t,a,i,s,r,void 0,!0))}var o,l=a.y+(a.height-e.box.h)/2,f=0;t.stackValues.forEach(function(e,a){a<=t.seriesIndex&&(f+=Math.abs(e||0))});var u=n>0?0:f;t.stackValues.forEach(function(e,a){e=e||0,e>0?a<t.seriesIndex&&(u+=Math.abs(e)):a<=t.seriesIndex&&(u-=Math.abs(e))});var d=a.width*Math.abs(n)/f,c=a.x+a.width*u/f;switch(i.series.dataLabelsHorizontalAlign){case"left":o=c+this.opt.labelOffset;break;case"right":o=c+d-e.box.w-this.opt.labelOffset;break;default:o=c+d/2-e.box.w/2}var x={x:o,y:l,w:e.box.w,h:e.box.h,text:e.getText()};this._labelBoxes.push(x)}},_getFixLabelsParams:function(){return{allowXShift:!0,xGap:5,yTolerance:.5}}})});