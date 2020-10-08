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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-construct","dojo/dom-class","../../../kernel","dojo/aspect","../components/FilterAndSelection/FilterAndSelection"],(function(e,t,i,r,s,n,o,l,c,a){var d=e([],{showFilterAndSelection:!1,filterAndSelections:[],aspectsForFilters:[],_updateJobFilterAndSelection:function(e){return this.showFilterAndSelection&&this.filterObjects&&this.filterObjects.forEach(function(t){var i=e[t.layer],s=this.filterAndSelections[t.layer];if((i="string"==typeof i?r.fromJson(i):i)&&s){var n=s.get("inputQuery");n&&(i.filter=i.filter?i.filter+" AND "+n:n,e[t.layer]=r.toJson(i),s.get("expression")&&(e[t.expressionObj]=r.toJson(s.get("expression"))))}}.bind(this)),e},clearFilterAndSelection:function(){i.forEach(this.aspectsForFilters,(function(e){e.remove()})),i.forEach(Object.keys(this.filterAndSelections),(function(e){this.filterAndSelections[e].clear()}),this)},_createFilterAndSelections:function(){this.filterAndSelections={},this.showFilterAndSelection&&i.forEach(this.filterObjects,(function(e){this.filterAndSelections[e.layer]=this._createFilterAndSelection(e)}),this)},_createFilterAndSelection:function(e){o.add(e.select.domNode,"with-filter");var t=e.layerForTool||e.layer,i={map:this.map,layer:this[e.layer]||this[e.layerForTool]||e.layers&&e.layers[e.select.get("value")],expression:this[e.expressionObj]},r=this.constructDomForFilter(i,e.select);return this.aspectsForFilters.push(c.after(e.select,"onChange",function(i){if(parseInt(i)>=0){var r=e.layers&&e.layers[i]||this[t];this.filterAndSelections[e.layer]&&this.filterAndSelections[e.layer].set("layer",r)}}.bind(this),!0)),this.aspectsForFilters.push(c.after(this,"_onClose",this.clearFilterAndSelection.bind(this))),r},constructDomForFilter:function(e,t){var i=t.domNode.parentNode,r=n.create("div",null,i);return e.msgContainer=n.create("div",{class:"esriLeadingMargin1 paddingTop1"},i),new a(e,r)}});return s("extend-esri")&&t.setObject("dijit.analysis.mixins.FilterAndSelection.FilterAndSelection",d,l),d}));