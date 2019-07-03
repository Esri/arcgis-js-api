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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredColumns"],function(e,t,i,n){return e(n,{getSeriesStats:function(){var e=i.collectStats(this.series,t.hitch(this,"isNullValue"));return e.hmin-=.5,e.hmax+=.5,e},rearrangeValues:function(e,t,n){return i.rearrangeValues.call(this,e,t,n)},_drawColumnBackground:function(e,t,i,n,r,s,a,h){this.series.indexOf(a)===this.series.length-1&&this.inherited(arguments)},_getXShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,i,n,r,s){var a=t[t.valueProp];if(e.box.h+2*this.opt.labelOffset>i.height){var h=a>0?i.y-s.t-this.opt.labelOffset:r.height-s.b-(i.y+i.height+2*this.opt.labelOffset);return void(e.box.h<=h&&this._renderOutside(e,t,i,n,r,s,!0))}var l=i.x+i.width/2-e.box.w/2,o=a>0?i.y+this.opt.labelOffset:i.y+i.height-e.box.h-this.opt.labelOffset,u={x:l,y:o,w:e.box.w,h:e.box.h,text:e.getText(),angle:e.angle};this._labelBoxes.push(u)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:1,yGap:3,xTolerance:.1}}})});