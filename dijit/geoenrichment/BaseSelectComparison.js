// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["../../declare","./BaseWidget","dijit/form/Select","dojo/dom-class"],function(e,t,s,i){var a=e("esri.dijit.geoenrichment.BaseSelectComparison",[t],{updateUI:function(){this.inherited(arguments),this._state.selectedComparison=Math.min(this._state.selectedComparison||0,this.data.features.length-2)},updateUIExpanded:function(){if(this.inherited(arguments),this.select){for(var e=[],t=[],s=Math.max(this.data.features.length-1,0),i=0;s>i;i++){var a=this.getFeatureTitle(i+1),n={label:a,value:i.toString()};i>=this.select.options.length?e.push(n):t.push(n)}for(e.length>0&&this.select.addOption(e),t.length>0&&this.select.updateOption(t);this.select.options.length>s;)this.select.removeOption(this.select.options.length-1);this.select.set("value",this._state.selectedComparison.toString())}},_createComboBox:function(e){var t=this;i.add(e,"BaseSelectComparison_Select"),this.select=new s({maxHeight:151,onChange:function(){var e=t._state.selectedComparison;t._state.selectedComparison=+t.select.get("value"),t._state.selectedComparison!=e&&t.updateUIExpanded()}}),this.select.placeAt(e)},_getComparisonRow:function(){var e=this._state.selectedComparison;return e>=0?e+1:void 0},destroy:function(){this.select&&(this.select.destroy(),this.select=null),this.inherited(arguments)}});return a});