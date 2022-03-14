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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","esri/dijit/geoenrichment/infographicPanels/OneVar","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/utils/MouseUtil","../../conversion/ConversionUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,r,o,a,n,l){var h=l.geoenrichment.dijit.ReportPlayer.ReportPlayer;return l=l.geoenrichment.dijit.ReportPlayer.OneVar,e(r,{infographicStyleProvider:null,infographicJson:null,parentInfographic:null,isMultiFeature:!1,_themeAddedFlag:!1,updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e="",i=this.parent.id,r=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid,a=this.infographicJson.style;if(a.titleStyle&&g(".BaseWidget_Title",d(a.titleStyle)),a.subtitleStyle&&g(".OneVarMultiComparison_Expanded_Value_Site",d(a.subtitleStyle)),a.valueStyle||r){var l=t.mixin({},a.valueStyle),h=l.color||r&&r.male.backgroundColor;h&&(l.color=h),g(".OneVarMultiComparison_Expanded_Value_Primary",d(l))}if(a.valueDescStyle&&g(".OneVarMultiComparison_Comparison",d(a.valueDescStyle)),a.tableHeaderStyle&&g([".OneVarMultiComparison_TextColumnHeader",".OneVarMultiComparison_ValueColumnHeader",".OneVarMultiComparison_ChartColumnHeader_Lower",".OneVarMultiComparison_ChartColumnHeader_Upper"],d(a.tableHeaderStyle)),a.tableDefaultStyle&&g(".OneVarMultiComparison_Row",d(a.tableDefaultStyle)),a.tableAltStyle&&g(".OneVarMultiComparison_Row.AlternatingRow",d(a.tableAltStyle)),a.tableThisAreaStyle){var s=t.mixin({},a.tableThisAreaStyle);s.fontWeight=s.fontWeight||"bold",g([".OneVarMultiComparison_CurrentRow",".OneVarMultiComparison_CurrentRow.AlternatingRow"],d(s))}if(a.tableBorderColor&&g([".OneVarMultiComparison_TextColumn",".OneVarMultiComparison_ValueColumn",".OneVarMultiComparison_ChartColumn"],"border-color:"+a.tableBorderColor),a.thisAreaBarColor||r){var u=a.thisAreaBarColor||r&&r.male.backgroundColor;u&&g(".OneVarMultiComparison_Expanded_CurrentBar","background-color:"+u)}a.positiveBarColor&&g(".OneVarMultiComparison_Expanded_Bar","background-color:"+a.positiveBarColor),e&&o.addStyle([e],i),this._themeAddedFlag=!0}function d(e){return n.composeStyleString(e,{addPx:{"font-size":1}})}function g(t,r){(t=Array.isArray(t)?t:[t]).forEach((function(t){e+="#"+i+" "+t+" { "+r+(";"===r.charAt(r.length-1)?"":";")+" } "}))}},_getLessThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):l.lessThan},_getMoreThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):l.moreThan},_getSamePattern:function(){return this._isAverageShown()?this.inherited(arguments):l.same},_isAverageShown:function(){var e=this.parentInfographic._ge.variables;return e&&"KeyGlobalFacts.AVGHHSZ"===e[0]},_isSiteRowFeature:function(e){return e&&e.attributes.isThisArea},_canCreateValueBlock:function(){return!this.isMultiFeature},_highlightedRow:null,setTableRowHighlighted:function(e){return this._highlightRowByText(e&&e.StdGeographyName)},setThisAreaTableRowHighlighted:function(){return this._highlightRowByText(h.thisArea)},_highlightRowByText:function(e){if(this._highlightedRow&&(i.remove(this._highlightedRow,"OneVarMultiComparison_Row_highlighted"),this._highlightedRow=null),e&&this.table){for(var t,r=0,o=this.table.rows.length;r<o;r++){var a=this.table.rows[r];if(a.cells[0].innerHTML===e){t=a;break}}return t&&(this._highlightedRow=t,i.add(this._highlightedRow,"OneVarMultiComparison_Row_highlighted")),t}},getOverRow:function(){for(var e,t=0,i=this.table.rows.length;t<i;t++){var r=this.table.rows[t];if(a.isMouseOver(r)){e=r;break}}return e},isThisAreaRow:function(e){return e&&e.cells[0].innerHTML===h.thisArea},destroy:function(){o.removeStyle(this.parent.id),this.inherited(arguments)}})}));