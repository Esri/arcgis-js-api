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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/promise/all","dojo/has","../../kernel","dojo/i18n!../../nls/jsapi"],function(t,s,r,e,i,a,n){var o=t(null,{filters:{all:{},categoryBoundaries:{tags:["boundaries","places"]},subCategoryBoundaries:{tags:["boundaries"]},subCategoryPlaces:{tags:["places"]},categoryHexBins:{tags:["hex"]},categoryTransportation:{tags:["transportation"]}},constructor:function(t){s.mixin(this,t),this.i18n=s.mixin({},n.browseLayersDlg),this.filterStrings={all:{title:this.i18n.categoryAll},categoryBoundaries:{title:this.i18n.categoryBoundaries},subCategoryBoundaries:{title:"&nbsp;&nbsp;&nbsp;&nbsp;"+this.i18n.subCategoryBoundaries},subCategoryPlaces:{title:"&nbsp;&nbsp;&nbsp;&nbsp;"+this.i18n.subCategoryPlaces},categoryHexBins:{title:this.i18n.categoryHexBins},categoryTransportation:{title:this.i18n.categoryTransportation}}},fetchData:function(){this._portal=this.parent._portal;var t;return this._fetchGroups().then(s.hitch(this,function(s){return t=r.map(s||[],function(t){if(t)return'group:"'+t.id+'"'}),this._fetchGroupItems(t)}))},_fetchGroup:function(t,r){return this._groups=this._groups||[],this._groups[t]||this._portal.queryGroups(r,!0).then(s.hitch(this,function(s){return s.total>0&&s.results&&(this._groups[t]=s.results),this._groups[t]||[]}))},_fetchGroupItems:function(t,s){var r=this._isCustom?['-typekeywords:"Multilayer"']:['typekeywords:"Analysis Ready"'];return this._portal.user.demographics||r.push('-typekeywords:"Requires Credits"'),this.parent._fetchItems({groups:t,query:s,types:['type:"Map Service"','type:"Feature Service"'],typekeywords:r})},_fetchGroups:function(){return this._fetchEsriAnalysisLayers()},_fetchEsriAnalysisLayers:function(){var t,r;return this._portal&&this._portal.region||this._portal.user&&this._portal.user.region||this._portal.ipCntryCode||"US",this._portal&&this._portal.analysisLayersGroupQuery&&(t=this._portal.analysisLayersGroupQuery,this._isCustomAnalysisQuery()&&(this.filters=null,this.filterStrings=null)),r={q:t,num:100,start:0},this._fetchGroup("esriAnalysisLayers",r).then(s.hitch(this,function(t){return t&&t.length>0&&(this.parent.sortAttribute=t[0].sortField,this.parent.sortDescending="asc"!==t[0].sortOrder),t}))},_isCustomAnalysisQuery:function(){var t='title:"Living Atlas Analysis Layers" AND owner:esri',s=!1;return this._portal&&this._portal.isPortal&&(t='title:"Living Atlas Analysis Layers" AND owner:esri_livingatlas'),this._portal&&this._portal.analysisLayersGroupQuery&&this._portal.analysisLayersGroupQuery!==t&&(s=!0),this._isCustom=s,s}});return s.mixin(o,{add:function(t,s){if(!t.plugIn){var r=s||{};r.parent=t,t.plugIn=new o(r)}},remove:function(t){t.plugIn&&(t.plugIn.destroy(),delete t.plugIn)}}),i("extend-esri")&&s.setObject("dijit.analysis.PluginAnalysisLayers",o,a),o});