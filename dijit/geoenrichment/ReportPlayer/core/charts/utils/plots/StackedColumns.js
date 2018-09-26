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

define(["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredColumns"],function(e,t,n,r){return e(r,{getSeriesStats:function(){var e=n.collectStats(this.series,t.hitch(this,"isNullValue"));return e.hmin-=.5,e.hmax+=.5,e},rearrangeValues:function(e,t,r){return n.rearrangeValues.call(this,e,t,r)},_drawColumnBackground:function(e,t,n,r,i,o,a,s){this.series.indexOf(a)===this.series.length-1&&this.inherited(arguments)},_getXShift:function(e,t){return 0},_getClusterSize:function(){return 1},_renderInside:function(e,t,n,r,i){var o=r.x+r.width/2-e.box.w/2,a=r.y+e.box.h-e.box.h*(e.numRows-1)/2,s={x:o,y:a,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(s)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:1,yGap:3,xTolerance:.1}}})});