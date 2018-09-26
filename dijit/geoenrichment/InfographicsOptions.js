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

define(["../../declare","dojo/_base/lang","dojo/Deferred","../../tasks/geoenrichment/studyAreaOptionsFromJson","../../tasks/geoenrichment/GeoenrichmentTask","./lang","./config","./InfographicsOptionsItem"],function(e,i,t,r,s,a,n,o){function l(e,i){var t=parseFloat(e.index),r=parseFloat(i.index);return isNaN(t)&&isNaN(r)?0:isNaN(t)?1:isNaN(r)?-1:t-r}function h(e,i){for(var t=0;t<e.length;t++){var r=e[t];if(r.type==i.type&&a.arraysEqual(r.variables,i.variables))return{report:r,index:t}}return null}function d(e,i){if(e)for(var t in e)if(e.hasOwnProperty(t)){i[t]=[];for(var r=0;r<e[t].length;r++){var s=e[t][r],a={};f(s,a),i[t].push(a)}}}function f(e,i){if(i.type=e.type||("OneVarMultiComparison"==e.report?"OneVar":e.report),e.dataCollection)if(e.vars){i.variables=[];for(var t=0;t<e.vars.length;t++)i.variables.push(e.dataCollection+"."+e.vars[t])}else i.variables=[e.dataCollection+".*"];else i.variables=e.variables;a.isBoolean(e.isVisible)?i.isVisible=e.isVisible:a.isBoolean(e.checked)&&(i.isVisible=e.checked)}var u=e("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,_loadPromises:null,studyAreaOptions:null,theme:"common",constructor:function(e){if(this._loaded={},this._loadPromises={},this.studyAreaOptions=r(e&&(e.buffer||e.studyAreaOptions)),this._items={},e){var i=e.reports||e.items;if(i){d(i,this._items);for(var t in i)i[t]&&i[t].length&&(this._loaded[t]=!0)}e.theme&&(this.theme=e.theme)}},toJson:function(){var e={};return d(this._items,e),{studyAreaOptions:this.studyAreaOptions.toJson(),items:e,theme:this.theme}},getItems:function(e){var r=new t;if(this._loaded[e])r.resolve(this._items[e]);else{if(this._loadPromises[e])return this._loadPromises[e];var a=new s(n.server);a.token=n.token,a.getDataCollections(e,null,["id","alias"]).then(i.hitch(this,this._mergeItems,e,r),function(e){r.reject(e)})}return this._loadPromises[e]=r.promise,r.promise},_mergeItems:function(e,i,t){function r(){b={},y={};for(var e=0;e<t.length;e++){y[t[e].id]=t[e];for(var i=0;i<t[e].variables.length;i++)b[t[e].id+"."+t[e].variables[i].id]=t[e].variables[i]}}try{var s,a,n={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},d={TapestryNEW:"Tapestry"},u=[];for(s=0;s<t.length;s++){var c=t[s].metadata.infographics||t[s].metadata.infographics2;if(c){var m=JSON.parse(c);for(var p in m)if(n[p]){var v=d[p]||p,g=new o(v,[t[s].id+".*"]);for(var _ in m[p])m[p].hasOwnProperty(_)&&(g[_]=m[p][_]);a=h(u,g),a?u[a.index]=g:u.push(g)}}}var b,y,O=this._items[e];for(O||(O=[],O.push(new o("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[e]=O),s=O.length-1;s>=0;s--)if(a=h(u,O[s]))f(O[s],a.report),O[s]=a.report,u.splice(a.index,1);else{if("OneVar"==O[s].type&&1==O[s].variables.length){var N=O[s].variables[0],V=function(e){return b||r(),b[e]}(N);if(V){O[s].title=V.alias;continue}}O.splice(s,1),s--}for(s=0;s<u.length;s++)O.push(u[s]);O.sort(l),this._loaded[e]=!0,delete this._loadPromises[e],i.resolve(O)}catch(e){i.reject(e)}}});return u.Item=o,u});