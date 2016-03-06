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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/promise/all","dojo/has","../../kernel"],function(t,r,e,s,i,n){var o=t(null,{constructor:function(t){r.mixin(this,t)},fetchData:function(){this._portal=this.parent._portal;var t;return this._fetchGroups().then(r.hitch(this,function(r){return t=e.map(r||[],function(t){return t?'group:"'+t.id+'"':void 0}).join(" OR "),this._fetchGroupItems(t)}))},_fetchGroup:function(t,e){return this._groups=this._groups||[],this._groups[t]||this._portal.queryGroups(e,!0).then(r.hitch(this,function(r){return r.total>0&&r.results&&(this._groups[t]=r.results),this._groups[t]||[]}))},_fetchGroupItems:function(t,r){var e='(type:"Map Service" OR type:"Feature Service") typekeywords:"Analysis Ready" ('+t+")"+(r?" "+r:"");return this._portal.user.demographics||(e+=' -typekeywords:"Requires Credits"'),this.parent._fetchItems(e)},_fetchGroups:function(){return this._fetchEsriAnalysisLayers()},_fetchEsriAnalysisLayers:function(){var t,e,s;return s=this._portal&&this._portal.region||this._portal.user&&this._portal.user.region||this._portal.ipCntryCode||"US",this._portal&&this._portal.livingAtlasGroupQuery&&(t=this._portal.livingAtlasGroupQuery.replace('title:"Featured Maps And Apps"','title:"Living Atlas Analysis Layers"')),e={q:t,num:100,start:0},this._fetchGroup("esriAnalysisLayers",e).then(r.hitch(this,function(t){return t}))}});return r.mixin(o,{add:function(t,r){if(!t.plugIn){var e=r||{};e.parent=t,t.plugIn=new o(e)}},remove:function(t){t.plugIn&&(t.plugIn.destroy(),delete t.plugIn)}}),i("extend-esri")&&r.setObject("dijit.analysis.PluginAnalysisLayers",o,n),o});