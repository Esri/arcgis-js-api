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

define(["dojo/_base/lang","dojo/dom-class","esri/dijit/geoenrichment/BaseSelectComparison","esri/dijit/geoenrichment/OnDemandSelect","../../comparison/ComparisonListUtil"],function(e,t,s,i,n){function a(){o||(o=!0,e.extend(s,{_createComboBox:function(e){var s=this;t.add(e,"BaseSelectComparison_Select"),this.select=new i({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",itemRenderer:new n.ComparisonListItemRenderer,onChange:function(){var e=s._state.selectedComparison;s._state.selectedComparison=+s.select.get("value"),s._state.selectedComparison!==e&&s.updateUIExpanded()}}),this.select.placeAt(e)},updateUIExpanded:function(){if(this.inherited("updateUIExpanded",arguments),this.select&&!this.select.options){var e=n.getListOptionsFromFeatures(this.data.features,{isIndexBased:!0});this.select.set("options",e),this.select.set("value",this._state.selectedComparison.toString())}}}))}var o=!1;return{init:a}});