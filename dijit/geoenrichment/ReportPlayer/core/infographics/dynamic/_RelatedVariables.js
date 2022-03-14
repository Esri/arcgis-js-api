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

define(["dojo/_base/declare","esri/dijit/geoenrichment/infographicPanels/RelatedVariables","./_SelectedFeatureControlMixin","../../conversion/ConversionUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil"],(function(e,a,l,t,i){return e([a,l],{infographicStyleProvider:null,infographicJson:null,_themeAddedFlag:!1,updateUI:function(){if(this.inherited(arguments),!this._themeAddedFlag){var e="",a=this.parent.id,l=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid,r=l&&l.male.backgroundColor,o=l&&l.female.backgroundColor,n=this.infographicJson.style;n.titleStyle&&s(".BaseWidget_Title",d(n.titleStyle)),n.highLabelStyle&&s(".RelatedVariables_HighLabel",d(n.highLabelStyle)),n.lowLabelStyle&&s(".RelatedVariables_LowLabel",d(n.lowLabelStyle)),n.tableHeaderStyle&&s(".RelatedVariables_ColumnHeader",d(n.tableHeaderStyle)),n.tableDefaultStyle&&s(".RelatedVariables_Row",d(n.tableDefaultStyle)),n.tableAltStyle&&s(".AlternatingRow.RelatedVariables_Row",d(n.tableAltStyle)),n.tableBorderColor&&s([".RelatedVariables_TextColumn",".RelatedVariables_ValueColumn",".RelatedVariables_DifferenceColumn",".RelatedVariables_ChartNegative",".RelatedVariables_ChartPositive"],"border-color:"+n.tableBorderColor),(n.diffPositiveColor||r)&&s(".RelatedVariables_DifferenceColumn_Positive","color:"+(n.diffPositiveColor||r)),(n.diffNegativeColor||o)&&s(".RelatedVariables_DifferenceColumn_Negative","color:"+(n.diffNegativeColor||o)),(n.positiveBarColor||r)&&s(".RelatedVariables_PositiveBar","background-color:"+(n.positiveBarColor||r)),(n.negativeBarColor||o)&&s(".RelatedVariables_NegativeBar","background-color:"+(n.negativeBarColor||o)),n.comparisonLabelStyle&&s(".RelatedVariables_ComparisonLabel",d(n.comparisonLabelStyle)),e&&i.addStyle([e],a),this._themeAddedFlag=!0}function d(e){return t.composeStyleString(e,{addPx:{"font-size":1}})}function s(l,t){(l=Array.isArray(l)?l:[l]).forEach((function(l){e+="#"+a+" "+l+" { "+t+(";"===t.charAt(t.length-1)?"":";")+" } "}))}},destroy:function(){i.removeStyle(this.parent.id),this.inherited(arguments)}})}));