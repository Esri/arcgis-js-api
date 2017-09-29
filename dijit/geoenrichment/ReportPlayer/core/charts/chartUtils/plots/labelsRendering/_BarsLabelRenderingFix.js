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

define(["dojo/_base/declare","./LabelsUtil"],function(e,t){return e(null,{createLabel:function(e,i,n,o){function r(){var r=t.getLabelInfo(l,i,o);l._renderOutside(r,e,i,n,o)}function h(){var h=t.getLabelInfo(l,i,o);if(!(h.box.h>n.height))return h.box.w>n.width?void(l.chart.plotArea.width-n.width>h.box.w&&r()):void l._renderInside(h,e,i,n,o)}var l=this;this.opt.labels&&"outside"==this.opt.labelStyle?r():this.opt.labels&&"inside"==this.opt.labelStyle?h():this.inherited(arguments)},_renderOutside:function(e,t,i,n,o){var r=n.x+n.width+this.opt.labelOffset,h=n.y+e.box.h/e.numRows+(n.height-e.box.h)/2-2;this.renderLabel(t,r,h,e.text,o,"start","left")},_renderInside:function(e,t,i,n,o){var r=n.x+n.width/2,h=n.y+e.box.h/e.numRows+(n.height-e.box.h)/2-2;this.renderLabel(t,r,h,e.text,o,!0)}})});