// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredColumns"],(function(e,t,a,s){return e(s,{getSeriesStats:function(){var e=a.collectStats(this.series,t.hitch(this,"isNullValue"));return e.hmin-=.5,e.hmax+=.5,e},rearrangeValues:function(e,t,s){return a.rearrangeValues.call(this,e,t,s)},_drawColumnBackground:function(e,t,a,s,i,n,r,h){this.series.indexOf(r)===this.series.length-1&&this.inherited(arguments)},_getXShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,a,s,i,n){var r=t[t.valueProp];if(e.box.h+2*this.opt.labelOffset>a.height){var h=r>0?a.y-n.t-this.opt.labelOffset:i.height-n.b-(a.y+a.height+2*this.opt.labelOffset);e.box.h<=h&&this._renderOutside(e,t,a,s,i,n,!0)}else{var o=a.x+a.width/2-e.box.w/2,l=0;t.stackValues.forEach((function(e,a){a<=t.seriesIndex&&(l+=Math.abs(e||0))}));var u=r<0?0:l;t.stackValues.forEach((function(e,a){(e=e||0)<0?a<t.seriesIndex&&(u+=Math.abs(e)):a<=t.seriesIndex&&(u-=Math.abs(e))}));var c=a.height*Math.abs(r)/l,f={x:o,y:a.y+a.height*u/l+c/2-e.box.h/2,w:e.box.w,h:e.box.h,text:e.getText(),angle:e.angle};this._labelBoxes.push(f)}},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:1,yGap:3,xTolerance:.1}}})}));