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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],(function(e,t,i){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,i,l,a,s,h,o){var r=t.getLabelInfo(this,i,a,{horizontalAlign:a.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:a.series.dataLabelsMaxWidth});this.opt.labels&&"outside"===this.opt.labelStyle?this._renderOutside(r,i,l,a,s,h,a.series.dataLabelsHorizontalAlign,!1,o):this.opt.labels&&"inside"===this.opt.labelStyle&&this._renderInside(r,i,l,a,s,h,o)},_renderOutside:function(e,t,i,l,a,s,h,o,r){var n,b=t[t.valueProp],x=i.y+(i.height-e.box.h)/2;switch(r=r||0,h){case"right":n=b>r?a.width-s.r-e.box.w:s.l+this.opt.labelOffset;break;default:n=b>r?i.x+i.width+this.opt.labelOffset:i.x-e.box.w-this.opt.labelOffset}var d={x:n,y:x,w:e.box.w,h:e.box.h,text:e.getText({isAltPosition:o})};this._labelBoxes.push(d)},_renderInside:function(e,t,i,l,a,s,h){var o=t[t.valueProp];if(!(e.box.h-3>i.height))if(e.box.w+2*this.opt.labelOffset>i.width){var r=o>0?a.width-s.r-(i.x+i.width+this.opt.labelOffset):i.x-s.l-2*this.opt.labelOffset;e.box.w<=r&&this._renderOutside(e,t,i,l,a,s,void 0,!0,h)}else{var n,b=i.y+(i.height-e.box.h)/2;switch(l.series.dataLabelsHorizontalAlign){case"left":n=i.x+this.opt.labelOffset;break;case"right":n=i.x+i.width-e.box.w-this.opt.labelOffset;break;default:n=i.x+i.width/2-e.box.w/2}var x={x:n,y:b,w:e.box.w,h:e.box.h,text:e.getText()};this._labelBoxes.push(x)}},_renderLabels:function(e,t,l,a){i.fixLabelsOverlap(this._labelBoxes,t,l,this._getFixLabelsParams(),a),this._labelBoxes.forEach((function(e){e.hidden||this.renderLabel(e)}),this)},renderLabel:function(e){var i=t.renderHTMLLabel(this.chart,e.x,e.y,e.text);return this.htmlElements.push(i),i},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})}));