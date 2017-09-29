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

define(["dojo/_base/declare","dojo/string","../PlayerSelect","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!../../../../nls/jsapi"],function(e,t,a,i,r){return r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{areasSelect:null,postCreate:function(){this.inherited(arguments),i.hide(this.areasSelectDiv),this._initAreaSelect()},_initAreaSelect:function(){var e=this;this.areasSelect=(new this._getAreasSelectClass)({onUserChange:function(t){e.showAnalysisAreaAt(t)}}).placeAt(this.areasSelectDiv),this.own(this.areasSelect)},_updateAreaSelect:function(){var e=this._reportData.analysisAreas.length,a=this._reportData.analysisAreas.map(function(a,i){return{label:1===e?a.name||a.shortName:a.shortName||a.name||t.substitute(r.areaIndex,{index:i+1}),value:i}});this.areasSelect.update(a,this.getCurrentAnalysisAreaIndex()),i[e>1?"show":"hide"](this.areasSelectDiv),this._updateCurrentAreaTitle()},_getAreasSelectClass:function(){return a},_updateCurrentAreaTitle:function(){var e=this.getCurrentAnalysisArea();this.areaTitleInnerDiv.innerHTML=e.name||e.shortName}})});