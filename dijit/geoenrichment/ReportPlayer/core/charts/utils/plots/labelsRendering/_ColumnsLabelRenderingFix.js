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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],(function(e,t,l){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,l,i,a,s,h,n){if(this.opt.labels){var o=t.getLabelInfo(this,l,a,{horizontalAlign:a.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:a.series.dataLabelsMaxWidth,considerAngle:!0});"outside"===this.opt.labelStyle?this._renderOutside(o,l,i,a,s,h,!1,n):"inside"===this.opt.labelStyle&&this._renderInside(o,l,i,a,s,h,n)}},_renderOutside:function(e,t,l,i,a,s,h,n){n=n||0;var o=t[t.valueProp],r={x:l.x+l.width/2-e.box.w/2,y:o>n?l.y-this.opt.labelOffset-e.box.h:l.y+l.height+this.opt.labelOffset,w:e.box.w,h:e.box.h,text:e.getText({isAltPosition:h}),angle:e.angle};this._labelBoxes.push(r)},_renderInside:function(e,t,l,i,a,s,h){h=h||0;var n=t[t.valueProp];if(e.box.h+2*this.opt.labelOffset>l.height){var o=n>h?l.y-s.t-this.opt.labelOffset:a.height-s.b-(l.y+l.height+2*this.opt.labelOffset);e.box.h<=o&&this._renderOutside(e,t,l,i,a,s,!0,h)}else{var r={x:l.x+l.width/2-e.box.w/2,y:l.y+l.height/2-e.box.h/2,w:e.box.w,h:e.box.h,text:e.getText(),angle:e.angle};this._labelBoxes.push(r)}},_renderLabels:function(e,t,i,a){l.fixLabelsOverlap(this._labelBoxes,t,i,this._getFixLabelsParams(),a),this._labelBoxes.forEach((function(e){e.hidden||this.renderLabel(e)}),this)},renderLabel:function(e){var l=t.renderHTMLLabel(this.chart,e.x,e.y,e.text,e.w,e.h,e.angle);return this.htmlElements.push(l),l},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})}));