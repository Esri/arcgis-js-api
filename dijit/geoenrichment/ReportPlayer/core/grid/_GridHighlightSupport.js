// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-construct","esri/dijit/geoenrichment/utils/MouseUtil"],(function(e,i,h,t){return e(null,{canHighlightHeader:!1,canHighlightFirstColumn:!0,_highlightOnHoverHandles:null,_setHighlightRowsOnHoverAttr:function(e){this._setHighlightOnHover(e,!1)},setCellRowHighlighted:function(e,i){var h=e&&e.domNode&&this.queryCells({rowIndex:e.row.index});h&&h.forEach((function(e){this.setCellHighlighted(e,i)}),this)},_setHighlightColumnsOnHoverAttr:function(e){this._setHighlightOnHover(e,!0)},setCellColumnHighlighted:function(e,i){var h=e&&e.domNode&&this.queryCells({columnIndex:e.column.index});h&&h.forEach((function(e){this.setCellHighlighted(e,i)}),this)},setCellHighlighted:function(e,i){e&&e.domNode&&(i?(this.canHighlightHeader||0!==e.row.index)&&(this.canHighlightFirstColumn||0!==e.column.index)&&(e.__highlightScreen=e.__highlightScreen||h.create("div",{class:"fieldCellHighlightScreen esriGEAbsoluteStretched"},e.domNode,"first"),e.__highlightScreen.style.display=""):e.__highlightScreen&&(e.__highlightScreen.style.display="none"))},_setHighlightOnHover:function(e,h){if(this.domNode){var o,n=this;if(this._highlightOnHoverHandles&&this._highlightOnHoverHandles.forEach((function(e){e.remove()})),e)this._highlightOnHoverHandles=[],this._highlightOnHoverHandles.push(i(n.domNode,"mouseover",(function(){o&&o.remove(),o=i(document.body,"mousemove",(function(){t.isMouseOver(n.domNode)||(l(),o.remove())}))}))),this._highlightOnHoverHandles.push(i(n.domNode,"mousemove",(function(){var e=l();e&&n[h?"setCellColumnHighlighted":"setCellRowHighlighted"](e,!0)}))),this._highlightOnHoverHandles.push(i(n.domNode,"mouseout",(function(){l()}))),this._highlightOnHoverHandles.forEach((function(e){n.own(e)}))}function l(){var e;return n.getCells().forEach((function(i){n.setCellHighlighted(i,!1),t.isMouseOver(i&&i.domNode)&&(e=i)})),e}}})}));