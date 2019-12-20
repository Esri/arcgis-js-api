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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/infographicPanels/OneVar","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/utils/MouseUtil","dojo/i18n!esri/nls/jsapi"],function(e,i,t,r,n,h){var a=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;return h=h.geoenrichment.dijit.ReportPlayer.OneVar,e(t,{infographicStyleProvider:null,parentInfographic:null,isMultiFeature:!1,_themeAddedFlag:!1,updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(e){var i=this.parent.id;r.addStyle(["#"+i+" .OneVarMultiComparison_Expanded_Value_Primary { color:"+e.male.backgroundColor+"; } #"+i+" .OneVarMultiComparison_Expanded_CurrentBar { background-color:"+e.male.backgroundColor+"; }"],i),this._themeAddedFlag=!0}}},_getLessThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):h.lessThan},_getMoreThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):h.moreThan},_getSamePattern:function(){return this._isAverageShown()?this.inherited(arguments):h.same},_isAverageShown:function(){var e=this.parentInfographic._ge.variables;return e&&"KeyGlobalFacts.AVGHHSZ"===e[0]},_isSiteRowFeature:function(e){return e&&e.attributes.isThisArea},_canCreateValueBlock:function(){return!this.isMultiFeature},_highlightedRow:null,setTableRowHighlighted:function(e){return this._highlightRowByText(e&&e.StdGeographyName)},setThisAreaTableRowHighlighted:function(){return this._highlightRowByText(a.thisArea)},_highlightRowByText:function(e){if(this._highlightedRow&&(i.remove(this._highlightedRow,"OneVarMultiComparison_Row_highlighted"),this._highlightedRow=null),e&&this.table){for(var t,r=0,n=this.table.rows.length;r<n;r++){var h=this.table.rows[r];if(h.cells[0].innerHTML===e){t=h;break}}return t&&(this._highlightedRow=t,i.add(this._highlightedRow,"OneVarMultiComparison_Row_highlighted")),t}},getOverRow:function(){for(var e,i=0,t=this.table.rows.length;i<t;i++){var r=this.table.rows[i];if(n.isMouseOver(r)){e=r;break}}return e},isThisAreaRow:function(e){return e&&e.cells[0].innerHTML===a.thisArea},destroy:function(){r.removeStyle(this.parent.id),this.inherited(arguments)}})});