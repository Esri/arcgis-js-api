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

define(["esri/declare","dojo/dom-class","./BaseWidget","dijit/form/Select"],(function(e,t,s,i){return e("esri.dijit.geoenrichment.BaseSelectComparison",[s],{updateUI:function(){this.inherited(arguments),this._state.selectedComparison=Math.min(this._state.selectedComparison||0,this.data.features.length-2)},updateUIExpanded:function(){if(this.inherited(arguments),this.select){for(var e=[],t=[],s=Math.max(this.data.features.length-1,0),i=0;i<s;i++){var n=this.getFeatureTitle(i+1),o={label:n,value:i.toString()};i>=this.select.options.length?e.push(o):t.push(o)}for(e.length>0&&this.select.addOption(e),t.length>0&&this.select.updateOption(t);this.select.options.length>s;)this.select.removeOption(this.select.options.length-1);this.select.set("value",this._state.selectedComparison.toString())}},_createComboBox:function(e){var s=this;t.add(e,"BaseSelectComparison_Select"),this.select=new i({maxHeight:151,onChange:function(){var e=s._state.selectedComparison;s._state.selectedComparison=+s.select.get("value"),s._state.selectedComparison!=e&&s.updateUIExpanded()}}),this.select.placeAt(e)},_getComparisonRow:function(){var e=this._state.selectedComparison;return e>=0?e+1:void 0},destroy:function(){this.select&&(this.select.destroy(),this.select=null),this.inherited(arguments)}})}));