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

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(e,t,i){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,i,l,o,a,s){function h(){var h=t.getLabelInfo(r,i,o);r._renderOutside(h,e,i,l,o,a,s)}var r=this;this.opt.labels&&"outside"===this.opt.labelStyle?h():this.opt.labels&&"inside"===this.opt.labelStyle?function(){var a=t.getLabelInfo(r,i,o);if(!(a.box.h>l.height)){var s=a.box.w+2*r.opt.labelOffset;if(s>l.width)return void(r.chart.plotArea.width-l.width>s&&h());r._renderInside(a,e,i,l,o)}}():this.inherited(arguments)},_renderOutside:function(e,t,i,l,o,a,s){var h,r=i[i.valueProp],n=l.y+e.box.h/e.numRows+(l.height-e.box.h)/2-2;h="right"===this.opt.labelHorizontalAlign&&"outside"===this.opt.labelStyle?r>0?a.width-s.r-e.box.w:s.l+2:r>0?l.x+l.width+this.opt.labelOffset:l.x-this.opt.labelOffset-e.box.w;var b={x:h,y:n,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(b)},_renderInside:function(e,t,i,l,o){var a,s=l.y+e.box.h/e.numRows+(l.height-e.box.h)/2-2;switch(this.opt.labelHorizontalAlign){case"left":a=l.x+this.opt.labelOffset;break;case"right":a=l.x+l.width-e.box.w-this.opt.labelOffset;break;default:a=l.x+l.width/2-e.box.w/2}var h={x:a,y:s,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(h)},_renderLabels:function(e,t,l,o){i.fixLabelsOverlap(this._labelBoxes,t,l,this._getFixLabelsParams(),o),this._labelBoxes.forEach(function(t){t.hidden||this.renderLabel(t.group,t.x,t.y,t.text,e,!0,"left")},this)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});