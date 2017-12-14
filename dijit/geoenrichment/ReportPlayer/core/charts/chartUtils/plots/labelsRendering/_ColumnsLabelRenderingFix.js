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

define(["dojo/_base/declare","./LabelsUtil"],function(e,t){return e(null,{createLabel:function(e,i,n,r){function o(){var o=t.getLabelInfo(l,i,r);l._renderOutside(o,e,i,n,r)}function h(){var h=t.getLabelInfo(l,i,r);return h.box.h>n.height?void(l.chart.plotArea.height-n.height>h.box.h&&o()):void l._renderInside(h,e,i,n,r)}var l=this;this.opt.labels&&"outside"===this.opt.labelStyle?o():this.opt.labels&&"inside"===this.opt.labelStyle?h():this.inherited(arguments)},_renderOutside:function(e,t,i,n,r){var o=n.x+n.width/2-e.box.w/2,h=n.y-this.opt.labelOffset-e.box.h*(e.numRows-1)/2;this.renderLabel(t,o,h,e.text,r,"start","left")},_renderInside:function(e,t,i,n,r){var o=n.x+n.width/2,h=n.y+n.height/2+e.box.h/2-e.box.h*(e.numRows-1)/2;this.renderLabel(t,o,h,e.text,r,!0)}})});