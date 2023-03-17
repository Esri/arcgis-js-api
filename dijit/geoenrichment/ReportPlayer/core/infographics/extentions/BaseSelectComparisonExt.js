// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-class","esri/dijit/geoenrichment/BaseSelectComparison","esri/dijit/geoenrichment/OnDemandSelect","../../comparison/ComparisonListUtil","../../comparison/ComparisonSelect","../../../../infographicPanels/AgePyramid"],(function(e,t,s,i,a,n,o){var r=!1;return{init:function(){r||(r=!0,e.extend(s,{dataProvider:null,setDataProvider:function(e){this.dataProvider=e,this.inherited("setDataProvider",arguments)},_createComboBox:function(e){t.add(e,"BaseSelectComparison_Select"),this.dataProvider.getAttributeFields?this._selectComparisonSelect(e):this._createSimpleSelect(e)},_createSimpleSelect:function(e){var t=this;this.select=new i({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",itemRenderer:new a.ComparisonListItemRenderer,onChange:function(){var e=t._state.selectedComparison;t._state.selectedComparison=+t.select.get("value"),t._state.selectedComparison!==e&&(t.updateUIExpanded(),t.onSelectedFeatureChanged())}}),this.select.placeAt(e)},_selectComparisonSelect:function(e){var t=this;this.select=new n({fields:!(this instanceof o)&&this.dataProvider.getAttributeFields(),onFeatureSelected:function(e,s){t._state.selectedComparison;var i=t.select.getFeatureIndexById(e,s);t._state.selectedComparison=i,t.updateUIExpanded(),t.onSelectedFeatureChanged()}}),this.select.placeAt(e)},updateUIExpanded:function(){if(this.inherited("updateUIExpanded",arguments),this.select&&!this.select.options)if(this.select instanceof n)this.select.setFeatures(this.data.features),this.select.selectFeatureByIndex(this._state.selectedComparison);else{var e=this.data.features.slice();e.shift();var t=a.getListOptionsFromFeatures(e,{isIndexBased:!0});this.select.set("options",t),this.select.set("value",this._state.selectedComparison.toString())}},onSelectedFeatureChanged:function(){}}))}}}));