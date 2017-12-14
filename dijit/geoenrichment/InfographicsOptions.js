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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/Deferred","dojo/string","../../tasks/geoenrichment/studyAreaOptionsFromJson","../../tasks/geoenrichment/GeoenrichmentTask","./lang","./config","./InfographicsOptionsItem"],function(e,i,t,r,s,a,n,o,l){function h(e,i){var t=parseFloat(e.index),r=parseFloat(i.index);return isNaN(t)&&isNaN(r)?0:isNaN(t)?1:isNaN(r)?-1:t-r}function d(e,i){for(var t=0;t<e.length;t++){var r=e[t];if(r.type==i.type&&n.arraysEqual(r.variables,i.variables))return{report:r,index:t}}return null}function f(e,i){if(e)for(var t in e)if(e.hasOwnProperty(t)){i[t]=[];for(var r=0;r<e[t].length;r++){var s=e[t][r],a={};u(s,a),i[t].push(a)}}}function u(e,i){if(i.type=e.type||("OneVarMultiComparison"==e.report?"OneVar":e.report),e.dataCollection)if(e.vars){i.variables=[];for(var t=0;t<e.vars.length;t++)i.variables.push(e.dataCollection+"."+e.vars[t])}else i.variables=[e.dataCollection+".*"];else i.variables=e.variables;n.isBoolean(e.isVisible)?i.isVisible=e.isVisible:n.isBoolean(e.checked)&&(i.isVisible=e.checked)}var c=e("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,_loadPromises:null,studyAreaOptions:null,theme:"common",constructor:function(e){if(this._loaded={},this._loadPromises={},this.studyAreaOptions=s(e&&(e.buffer||e.studyAreaOptions)),this._items={},e){var i=e.reports||e.items;if(i){f(i,this._items);for(var t in i)i[t]&&i[t].length&&(this._loaded[t]=!0)}e.theme&&(this.theme=e.theme)}},toJson:function(){var e={};return f(this._items,e),{studyAreaOptions:this.studyAreaOptions.toJson(),items:e,theme:this.theme}},getItems:function(e){var r=new t;if(this._loaded[e])r.resolve(this._items[e]);else{if(this._loadPromises[e])return this._loadPromises[e];var s=new a(o.server);s.token=o.token,s.getDataCollections(e,null,["id","alias"]).then(i.hitch(this,this._mergeItems,e,r),function(e){r.reject(e)})}return this._loadPromises[e]=r.promise,r.promise},_mergeItems:function(e,i,t){function r(){y={},O={};for(var e=0;e<t.length;e++){O[t[e].id]=t[e];for(var i=0;i<t[e].variables.length;i++)y[t[e].id+"."+t[e].variables[i].id]=t[e].variables[i]}}function s(e){return y||r(),y[e]}try{var a,n,o={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},f={TapestryNEW:"Tapestry"},c=[];for(a=0;a<t.length;a++){var m=t[a].metadata.infographics||t[a].metadata.infographics2;if(m){var p=JSON.parse(m);for(var v in p)if(o[v]){var g=f[v]||v,_=new l(g,[t[a].id+".*"]);for(var b in p[v])p[v].hasOwnProperty(b)&&(_[b]=p[v][b]);n=d(c,_),n?c[n.index]=_:c.push(_)}}}var y,O,N=this._items[e];for(N||(N=[],N.push(new l("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[e]=N),a=N.length-1;a>=0;a--)if(n=d(c,N[a]))u(N[a],n.report),N[a]=n.report,c.splice(n.index,1);else{if("OneVar"==N[a].type&&1==N[a].variables.length){var V=N[a].variables[0],P=s(V);if(P){N[a].title=P.alias;continue}}N.splice(a,1),a--}for(a=0;a<c.length;a++)N.push(c[a]);N.sort(h),this._loaded[e]=!0,delete this._loadPromises[e],i.resolve(N)}catch(A){i.reject(A)}}});return c.Item=l,c});