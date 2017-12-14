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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","./LabelsUtil"],function(t,e){return t(null,{createLabel:function(t,i,l,o,a,h){function r(){var r=e.getLabelInfo(s,i,o);s._renderOutside(r,t,i,l,o,a,h)}function n(){var a=e.getLabelInfo(s,i,o);if(!(a.box.h>l.height))return a.box.w>l.width?void(s.chart.plotArea.width-l.width>a.box.w&&r()):void s._renderInside(a,t,i,l,o)}var s=this;this.opt.labels&&"outside"===this.opt.labelStyle?r():this.opt.labels&&"inside"===this.opt.labelStyle?n():this.inherited(arguments)},_renderOutside:function(t,e,i,l,o,a,h){var r,n=l.y+t.box.h/t.numRows+(l.height-t.box.h)/2-2;switch(this.opt.labelHorizontalAlign){case"right":r=a.width-h.l-h.r-t.box.w/2;break;default:r=l.x+l.width+this.opt.labelOffset}this.renderLabel(e,r,n,t.text,o,"start","left")},_renderInside:function(t,e,i,l,o){var a,h=l.y+t.box.h/t.numRows+(l.height-t.box.h)/2-2;switch(this.opt.labelHorizontalAlign){case"left":a=l.x+t.box.w/2+this.opt.labelOffset;break;case"right":a=l.x+l.width-t.box.w/2;break;default:a=l.x+l.width/2}this.renderLabel(e,a,h,t.text,o,!0)}})});