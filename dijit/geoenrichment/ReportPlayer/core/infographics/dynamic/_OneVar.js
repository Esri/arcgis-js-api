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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/OneVar","esri/dijit/geoenrichment/utils/DynamicStyleUtil","dojo/i18n!../../../../../../nls/jsapi"],function(e,i,r,t){return t=t.geoenrichment.dijit.ReportPlayer.OneVar,e(i,{infographicStyleProvider:null,parentInfographic:null,_themeAddedFlag:!1,updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(e){var i=this.parent.id;r.addStyle(["#"+i+" .OneVarMultiComparison_Expanded_Value_Primary { color:"+e.male.backgroundColor+"; } #"+i+" .OneVarMultiComparison_Expanded_CurrentBar { background-color:"+e.male.backgroundColor+"; }"],i),this._themeAddedFlag=!0}}},_getLessThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):t.lessThan},_getMoreThanPattern:function(){return this._isAverageShown()?this.inherited(arguments):t.moreThan},_getSamePattern:function(){return this._isAverageShown()?this.inherited(arguments):t.same},_isAverageShown:function(){var e=this.parentInfographic._ge.variables;return e&&"KeyGlobalFacts.AVGHHSZ"===e[0]},destroy:function(){r.removeStyle(this.parent.id),this.inherited(arguments)}})});