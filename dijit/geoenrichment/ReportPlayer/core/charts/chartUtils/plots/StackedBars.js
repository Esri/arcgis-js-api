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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredBars"],function(e,t,n,i){return e(i,{getSeriesStats:function(){var e,i=n.collectStats(this.series,t.hitch(this,"isNullValue"));return i.hmin-=.5,i.hmax+=.5,e=i.hmin,i.hmin=i.vmin,i.vmin=e,e=i.hmax,i.hmax=i.vmax,i.vmax=e,i},rearrangeValues:function(e,t,i){return n.rearrangeValues.call(this,e,t,i)},_drawBarBackground:function(e,t,n,i,r,a,s,o){this.series.indexOf(s)===this.series.length-1&&this.inherited(arguments)},_getYShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,n,i,r){x=i.x+i.width-this.opt.labelOffset-e.box.w,y=i.y+e.box.h/e.numRows+(i.height-e.box.h)/2-2;var a={x:x,y:y,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(a)},_getFixLabelsParams:function(){return{allowXShift:!0,xGap:5,yTolerance:.5}}})});