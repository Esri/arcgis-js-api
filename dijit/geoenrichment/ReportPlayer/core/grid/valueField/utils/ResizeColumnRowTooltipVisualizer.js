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

define(["dojo/_base/declare","dojo/string","dojo/dom-construct","dojo/dom-geometry","esri/dijit/geoenrichment/utils/PageUnitsConverter","dojo/i18n!esri/nls/jsapi"],function(t,o,i,e,l,s){s=s.geoenrichment.dijit.ReportPlayer.ValueField;var n,h,d={},p=t(null,{_cell:null,_isColumn:null,_tooltip:null,constructor:function(t,o){this._cell=t,this._isColumn=o},show:function(){this.destroy(),this._tooltip=i.create("div",{class:"esriGEAdjustableGrid_resizableColumnTooltip"},document.body),this.update()},update:function(){setTimeout(this._doUpdate.bind(this))},_doUpdate:function(){if(this._tooltip&&this._cell.domNode){var t=e.position(this._cell.domNode),i=e.position(this._cell.parentGrid.domNode);this._isColumn?(this._tooltip.innerHTML=o.substitute(s.columnWidthPt,{width:Math.round(l.pxToPt(this._cell.domNode.clientWidth))}),this._tooltip.style.left=t.x+(t.w-this._tooltip.clientWidth)/2+"px",this._tooltip.style.top=i.y-this._tooltip.clientHeight-10+"px"):(this._tooltip.innerHTML=o.substitute(s.rowHeightPt,{height:Math.round(l.pxToPt(this._cell.domNode.clientHeight))}),this._tooltip.style.left=i.x-this._tooltip.clientWidth-10+"px",this._tooltip.style.top=t.y+(t.h-this._tooltip.clientHeight)/2+"px")}},destroy:function(){this._tooltip&&i.destroy(this._tooltip),this._tooltip=null}});return d.showColumnTooltip=function(t){d._showTooltip(t,!0)},d.showRowTooltip=function(t){d._showTooltip(t,!1)},d._showTooltip=function(t,o){h!==t&&d.removeTooltip(),h=t,n?n.update():(n=new p(t,o),n.show())},d.removeTooltip=function(){n&&n.destroy(),n=null,h=null},d});