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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojox/charting/plot2d/Grid"],function(t,e){return t(e,{xOffset:0,yOffset:0,xHasHalfTickOffset:!1,yHasHalfTickOffset:!1,_renderHLines:function(t,e,i,s,h,a){var r=this.getGroup(),n=0;t.length>=2?n=Math.abs(a(t[0].value)-a(t[1].value)):t.length&&(n=Math.abs(a(t[0].value))),t.forEach(function(t){if(this.opt.renderOnAxis||t.value!=(this._vAxis.opt.leftBottom?h.bounds.from:h.bounds.to)){var f=this.yHasHalfTickOffset?n/2:0,o=i.height-s.b-a(t.value),l=this.createLine(r,{x1:s.l+this.xOffset,y1:o+f,x2:i.width-s.r,y2:o+f}).setStroke(e);this.animate&&this._animateGrid(l,"h",s.l,s.r+s.l-i.width)}},this)},_renderVLines:function(t,e,i,s,h,a){var r=this.getGroup(),n=0;t.length>=2?n=Math.abs(a(t[0].value)-a(t[1].value)):t.length&&(n=Math.abs(a(t[0].value))),t.forEach(function(t){if(this.opt.renderOnAxis||t.value!=(this._hAxis.opt.leftBottom?h.bounds.from:h.bounds.to)){var f=this.xHasHalfTickOffset?n/2:0,o=s.l+a(t.value),l=this.createLine(r,{x1:o+f,y1:s.t+this.yOffset,x2:o+f,y2:i.height-s.b}).setStroke(e);this.animate&&this._animateGrid(l,"v",i.height-s.b,i.height-s.b-s.t)}},this)},render:function(t,e){this.dirty=!0;var i=this.inherited(arguments);return this.xOffset>0&&this._renderOffsetVLine(t,e),i},_renderOffsetVLine:function(t,e){var i=this.chart.theme,s=this.opt.majorVLine||i.grid&&i.grid.majorLine||i.axis.majorTick,h=this.getGroup();this.createLine(h,{x1:e.l+this.xOffset,y1:e.t,x2:e.l+this.xOffset,y2:t.height-e.b}).setStroke(s)}})});