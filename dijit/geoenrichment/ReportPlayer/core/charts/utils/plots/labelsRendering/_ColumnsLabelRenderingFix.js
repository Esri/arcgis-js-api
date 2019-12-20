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

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(e,t,i){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,i,l,a,s,h,n){if(this.opt.labels){var r=t.getLabelInfo(this,i,a,{horizontalAlign:a.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:a.series.dataLabelsMaxWidth,considerAngle:!0});"outside"===this.opt.labelStyle?this._renderOutside(r,i,l,a,s,h,!1,n):"inside"===this.opt.labelStyle&&this._renderInside(r,i,l,a,s,h,n)}},_renderOutside:function(e,t,i,l,a,s,h,n){n=n||0;var r,o=t[t.valueProp],b=i.x+i.width/2-e.box.w/2;r=o>n?i.y-this.opt.labelOffset-e.box.h:i.y+i.height+this.opt.labelOffset;var x={x:b,y:r,w:e.box.w,h:e.box.h,text:e.getText({isAltPosition:h}),angle:e.angle};this._labelBoxes.push(x)},_renderInside:function(e,t,i,l,a,s,h){h=h||0;var n=t[t.valueProp];if(e.box.h+2*this.opt.labelOffset>i.height){var r=n>h?i.y-s.t-this.opt.labelOffset:a.height-s.b-(i.y+i.height+2*this.opt.labelOffset);return void(e.box.h<=r&&this._renderOutside(e,t,i,l,a,s,!0,h))}var o=i.x+i.width/2-e.box.w/2,b=i.y+i.height/2-e.box.h/2,x={x:o,y:b,w:e.box.w,h:e.box.h,text:e.getText(),angle:e.angle};this._labelBoxes.push(x)},_renderLabels:function(e,t,l,a){i.fixLabelsOverlap(this._labelBoxes,t,l,this._getFixLabelsParams(),a),this._labelBoxes.forEach(function(e){e.hidden||this.renderLabel(e)},this)},renderLabel:function(e){var i=t.renderHTMLLabel(this.chart,e.x,e.y,e.text,e.w,e.h,e.angle);return this.htmlElements.push(i),i},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});