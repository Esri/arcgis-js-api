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

define(["dojo/dom-style","../../themes/BorderStyles","../../themes/ThemeLibrary"],function(e,o,t){var r={};return r.renderBorder=function(r,n){function d(e){return l.thickness+"px "+l.lineStyle+" "+(e?"transparent":l.color)}if(r.renderBordersFromTheme&&n){var l=r.viewModel.getDocumentDefaultStyles(r.theme||r.themeContext).border||t.getDefaultBorderSettings();if(l&&l.style!=o.NONE){var s=d(),i=d(!0);switch(r.getFieldCells().forEach(function(o){e.set(o.domNode,"border",i)}),l.style){case o.ALL:r.getFieldCells().forEach(function(o){e.set(o.domNode,"borderTop",s),e.set(o.domNode,"borderLeft",s)}),n.lastInRowCells.forEach(function(o){e.set(o.domNode,"borderRight",s)}),n.lastInColumnCells.forEach(function(o){e.set(o.domNode,"borderBottom",s)});break;case o.OUTER_ONLY:n.firstInRowCells.forEach(function(o){e.set(o.domNode,"borderLeft",s)}),n.firstInColumnCells.forEach(function(o){e.set(o.domNode,"borderTop",s)}),n.lastInRowCells.forEach(function(o){e.set(o.domNode,"borderRight",s)}),n.lastInColumnCells.forEach(function(o){e.set(o.domNode,"borderBottom",s)});break;case o.INNER_ONLY:var f={},c={};n.lastInRowCells.forEach(function(e){f[e.uniqueId]=!0}),n.lastInColumnCells.forEach(function(e){c[e.uniqueId]=!0}),r.getFieldCells().forEach(function(o){c[o.uniqueId]||e.set(o.domNode,"borderBottom",s),f[o.uniqueId]||e.set(o.domNode,"borderRight",s)})}}}},r});