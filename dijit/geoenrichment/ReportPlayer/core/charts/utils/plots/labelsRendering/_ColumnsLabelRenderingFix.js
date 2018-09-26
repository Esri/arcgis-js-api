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

define(["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(e,t,o){return e(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments),this._labelBoxes=[]},createLabel:function(e,o,i,l){function s(){var s=t.getLabelInfo(a,o,l);a._renderOutside(s,e,o,i,l)}var a=this;this.opt.labels&&"outside"===this.opt.labelStyle?s():this.opt.labels&&"inside"===this.opt.labelStyle&&function(){var h=t.getLabelInfo(a,o,l);if(h.box.h>i.height)return void(a.chart.plotArea.height-i.height>h.box.h&&s());a._renderInside(h,e,o,i,l)}()},_renderOutside:function(e,t,o,i,l){var s=o[o.valueProp],a=i.x+i.width/2-e.box.w/2,h=s>0?i.y-this.opt.labelOffset-e.box.h*(e.numRows-1)/2:i.y+i.height+this.opt.labelOffset+e.box.h*(1===e.numRows?1:e.numRows/4),n={x:a,y:h,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(n)},_renderInside:function(e,t,o,i,l){var s=i.x+i.width/2-e.box.w/2,a=i.y+i.height/2+e.box.h/2-e.box.h*(e.numRows-1)/2,h={x:s,y:a,w:e.box.w,h:e.box.h,group:t,text:e.text};this._labelBoxes.push(h)},_renderLabels:function(e,t,i,l){o.fixLabelsOverlap(this._labelBoxes,t,i,this._getFixLabelsParams(),l),this._labelBoxes.forEach(function(t){t.hidden||this.renderLabel(t.group,t.x,t.y,t.text,e,!0,"left")},this)},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});