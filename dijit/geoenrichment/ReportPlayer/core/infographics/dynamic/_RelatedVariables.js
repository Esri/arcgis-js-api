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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/infographicPanels/RelatedVariables","./_SelectedFeatureControlMixin","esri/dijit/geoenrichment/utils/DynamicStyleUtil"],(function(e,i,r,a){return e([i,r],{infographicStyleProvider:null,_themeAddedFlag:!1,updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(e){var i=this.parent.id;a.addStyle(["#"+i+" .RelatedVariables_PositiveBar { background-color:"+e.male.backgroundColor+"; } #"+i+" .RelatedVariables_NegativeBar { background-color:"+e.female.backgroundColor+"; } #"+i+" .RelatedVariables_DifferenceColumn_Positive { color:"+e.male.backgroundColor+"; } #"+i+" .RelatedVariables_DifferenceColumn_Negative { color:"+e.female.backgroundColor+"; }"],i),this._themeAddedFlag=!0}}},destroy:function(){a.removeStyle(this.parent.id),this.inherited(arguments)}})}));