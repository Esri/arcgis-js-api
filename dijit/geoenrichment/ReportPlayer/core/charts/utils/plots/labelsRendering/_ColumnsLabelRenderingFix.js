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

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(e,t,i){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,i,l,a,s,h){if(this.opt.labels){var n=t.getLabelInfo(this,i,a,{horizontalAlign:a.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:a.series.dataLabelsMaxWidth,considerAngle:!0});"outside"===this.opt.labelStyle?this._renderOutside(n,i,l,a,s,h):"inside"===this.opt.labelStyle&&this._renderInside(n,i,l,a,s,h)}},_renderOutside:function(e,t,i,l,a,s,h){var n,r=t[t.valueProp],o=i.x+i.width/2-e.box.w/2;n=r>0?i.y-this.opt.labelOffset-e.box.h:i.y+i.height+this.opt.labelOffset;var b={x:o,y:n,w:e.box.w,h:e.box.h,text:e.getText({isAltPosition:h}),angle:e.angle};this._labelBoxes.push(b)},_renderInside:function(e,t,i,l,a,s){var h=t[t.valueProp];if(e.box.h+2*this.opt.labelOffset>i.height){var n=h>0?i.y-s.t-this.opt.labelOffset:a.height-s.b-(i.y+i.height+2*this.opt.labelOffset);return void(e.box.h<=n&&this._renderOutside(e,t,i,l,a,s,!0))}var r=i.x+i.width/2-e.box.w/2,o=i.y+i.height/2-e.box.h/2,b={x:r,y:o,w:e.box.w,h:e.box.h,text:e.getText(),angle:e.angle};this._labelBoxes.push(b)},_renderLabels:function(e,t,l,a){i.fixLabelsOverlap(this._labelBoxes,t,l,this._getFixLabelsParams(),a),this._labelBoxes.forEach(function(e){e.hidden||this.renderLabel(e)},this)},renderLabel:function(e){var i=t.renderHTMLLabel(this.chart,e.x,e.y,e.text,e.w,e.h,e.angle);return this.htmlElements.push(i),i},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});