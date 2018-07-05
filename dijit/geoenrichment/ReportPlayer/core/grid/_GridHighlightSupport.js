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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-geometry","esri/dijit/geoenrichment/utils/MouseUtil"],function(e,o,i,h,t){return e(null,{_highlightRowsOnHoverHandles:null,_setHighlightRowsOnHoverAttr:function(e){function i(){var e;return h.getFieldCells().forEach(function(o){h.setCellHighlighted(o,!1),t.isMouseOver(o&&o.domNode)&&(e=o)}),e}var h=this;if(this._highlightRowsOnHoverHandles&&this._highlightRowsOnHoverHandles.forEach(function(e){e.remove()}),e){this._highlightRowsOnHoverHandles=[];var n;this._highlightRowsOnHoverHandles.push(o(h.domNode,"mouseover",function(){n&&n.remove(),n=o(document.body,"mousemove",function(){t.isMouseOver(h.domNode)||(i(),n.remove())})})),this._highlightRowsOnHoverHandles.push(o(h.domNode,"mousemove",function(){var e=i();e&&h.setCellRowHighlighted(e,!0)})),this._highlightRowsOnHoverHandles.push(o(h.domNode,"mouseout",function(){i()})),this._highlightRowsOnHoverHandles.forEach(function(e){h.own(e)})}},setCellHighlighted:function(e,o){e&&e.domNode&&i[o?"add":"remove"](e.domNode,"highlightedFieldCell")},setCellRowHighlighted:function(e,o){var i=e&&e.domNode&&this.queryCells({rowIndex:e.gridData.index});i&&i.forEach(function(e){this.setCellHighlighted(e,o)},this)}})});