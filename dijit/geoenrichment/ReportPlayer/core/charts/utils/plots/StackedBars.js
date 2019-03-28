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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredBars"],function(e,t,i,r){return e(r,{getSeriesStats:function(){var e,r=i.collectStats(this.series,t.hitch(this,"isNullValue"));return r.hmin-=.5,r.hmax+=.5,e=r.hmin,r.hmin=r.vmin,r.vmin=e,e=r.hmax,r.hmax=r.vmax,r.vmax=e,r},rearrangeValues:function(e,t,r){return i.rearrangeValues.call(this,e,t,r)},_drawBarBackground:function(e,t,i,r,a,n,s,h){this.series.indexOf(s)===this.series.length-1&&this.inherited(arguments)},_getYShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,i,r,a,n){var s=t[t.valueProp];if(!(e.box.h-3>i.height)){if(e.box.w+2*this.opt.labelOffset>i.width){var h=s>0?a.width-n.r-(i.x+i.width+this.opt.labelOffset):i.x-n.l-2*this.opt.labelOffset;return void(e.box.w<=h&&this._renderOutside(e,t,i,r,a,n,void 0,!0))}var o=s>0?i.x+i.width-e.box.w-this.opt.labelOffset:i.x+this.opt.labelOffset,l=i.y+(i.height-e.box.h)/2,u={x:o,y:l,w:e.box.w,h:e.box.h,text:e.getText()};this._labelBoxes.push(u)}},_getFixLabelsParams:function(){return{allowXShift:!0,xGap:5,yTolerance:.5}}})});