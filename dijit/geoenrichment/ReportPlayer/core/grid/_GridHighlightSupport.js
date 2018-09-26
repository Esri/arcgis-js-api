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

define(["dojo/_base/declare","dojo/on","dojo/dom-construct","esri/dijit/geoenrichment/utils/MouseUtil"],function(e,i,t,h){return e(null,{canHighlightHeader:!1,canHighlightFirstColumn:!0,_highlightOnHoverHandles:null,_setHighlightRowsOnHoverAttr:function(e){this._setHighlightOnHover(e,!1)},setCellRowHighlighted:function(e,i){var t=e&&e.domNode&&this.queryCells({rowIndex:e.gridData.index});t&&t.forEach(function(e){this.setCellHighlighted(e,i)},this)},_setHighlightColumnsOnHoverAttr:function(e){this._setHighlightOnHover(e,!0)},setCellColumnHighlighted:function(e,i){var t=e&&e.domNode&&this.queryCells({columnIndex:e.column.index});t&&t.forEach(function(e){this.setCellHighlighted(e,i)},this)},setCellHighlighted:function(e,i){if(e&&e.domNode)return i?void((this.canHighlightHeader||0!==e.gridData.index)&&(this.canHighlightFirstColumn||0!==e.column.index)&&(e.__highlightScreen=e.__highlightScreen||t.create("div",{class:"fieldCellHighlightScreen esriGEAbsoluteStretched"},e.domNode,"first"),e.__highlightScreen.style.display="")):void(e.__highlightScreen&&(e.__highlightScreen.style.display="none"))},_setHighlightOnHover:function(e,t){function o(){var e;return n.getFieldCells().forEach(function(i){n.setCellHighlighted(i,!1),h.isMouseOver(i&&i.domNode)&&(e=i)}),e}var n=this;if(this._highlightOnHoverHandles&&this._highlightOnHoverHandles.forEach(function(e){e.remove()}),e){this._highlightOnHoverHandles=[];var l;this._highlightOnHoverHandles.push(i(n.domNode,"mouseover",function(){l&&l.remove(),l=i(document.body,"mousemove",function(){h.isMouseOver(n.domNode)||(o(),l.remove())})})),this._highlightOnHoverHandles.push(i(n.domNode,"mousemove",function(){var e=o();e&&n[t?"setCellColumnHighlighted":"setCellRowHighlighted"](e,!0)})),this._highlightOnHoverHandles.push(i(n.domNode,"mouseout",function(){o()})),this._highlightOnHoverHandles.forEach(function(e){n.own(e)})}}})});