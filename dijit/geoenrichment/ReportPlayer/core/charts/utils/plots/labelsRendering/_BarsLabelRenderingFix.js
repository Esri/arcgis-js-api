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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(e,t,i){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,i,l,a,s,h){var r=t.getLabelInfo(this,i,a,{horizontalAlign:a.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:a.series.dataLabelsMaxWidth});this.opt.labels&&"outside"===this.opt.labelStyle?this._renderOutside(r,i,l,a,s,h,a.series.dataLabelsHorizontalAlign):this.opt.labels&&"inside"===this.opt.labelStyle&&this._renderInside(r,i,l,a,s,h)},_renderOutside:function(e,t,i,l,a,s,h,r){var o,n=t[t.valueProp],b=i.y+(i.height-e.box.h)/2;switch(h){case"right":o=n>0?a.width-s.r-e.box.w:s.l+this.opt.labelOffset;break;default:o=n>0?i.x+i.width+this.opt.labelOffset:i.x-e.box.w-this.opt.labelOffset}var x={x:o,y:b,w:e.box.w,h:e.box.h,text:e.getText({isAltPosition:r})};this._labelBoxes.push(x)},_renderInside:function(e,t,i,l,a,s){var h=t[t.valueProp];if(!(e.box.h-3>i.height)){if(e.box.w+2*this.opt.labelOffset>i.width){var r=h>0?a.width-s.r-(i.x+i.width+this.opt.labelOffset):i.x-s.l-2*this.opt.labelOffset;return void(e.box.w<=r&&this._renderOutside(e,t,i,l,a,s,void 0,!0))}var o,n=i.y+(i.height-e.box.h)/2;switch(l.series.dataLabelsHorizontalAlign){case"left":o=i.x+this.opt.labelOffset;break;case"right":o=i.x+i.width-e.box.w-this.opt.labelOffset;break;default:o=i.x+i.width/2-e.box.w/2}var b={x:o,y:n,w:e.box.w,h:e.box.h,text:e.getText()};this._labelBoxes.push(b)}},_renderLabels:function(e,t,l,a){i.fixLabelsOverlap(this._labelBoxes,t,l,this._getFixLabelsParams(),a),this._labelBoxes.forEach(function(e){e.hidden||this.renderLabel(e)},this)},renderLabel:function(e){var i=t.renderHTMLLabel(this.chart,e.x,e.y,e.text);return this.htmlElements.push(i),i},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});