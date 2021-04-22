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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/tasks/geoenrichment/studyAreaOptionsFromJson","esri/tasks/geoenrichment/GeoenrichmentTask","./utils/ArrayUtil","./config","./InfographicsOptionsItem"],(function(e,i,t,r,s,a,n,o){function l(e,i){if(e)for(var t in e)if(e.hasOwnProperty(t)){i[t]=[];for(var r=0;r<e[t].length;r++){var s={};d(e[t][r],s),i[t].push(s)}}}function h(e,i){var t=parseFloat(e.index),r=parseFloat(i.index);return isNaN(t)&&isNaN(r)?0:isNaN(t)?1:isNaN(r)?-1:t-r}function f(e,i){for(var t=0;t<e.length;t++){var r=e[t];if(r.type==i.type&&a.arraysEqual(r.variables,i.variables))return{report:r,index:t}}return null}function d(e,i){if(i.type=e.type||("OneVarMultiComparison"==e.report?"OneVar":e.report),e.dataCollection)if(e.vars){i.variables=[];for(var t=0;t<e.vars.length;t++)i.variables.push(e.dataCollection+"."+e.vars[t])}else i.variables=[e.dataCollection+".*"];else i.variables=e.variables;u(e.isVisible)?i.isVisible=e.isVisible:u(e.checked)&&(i.isVisible=e.checked)}function u(e){return"boolean"==typeof e||e instanceof Boolean}var c=e("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,_loadPromises:null,studyAreaOptions:null,theme:"common",constructor:function(e){if(this._loaded={},this._loadPromises={},this.studyAreaOptions=r(e&&(e.buffer||e.studyAreaOptions)),this._items={},e){var i=e.reports||e.items;if(i)for(var t in l(i,this._items),i)i[t]&&i[t].length&&(this._loaded[t]=!0);e.theme&&(this.theme=e.theme)}},getItems:function(e){var r=new t;if(this._loaded[e])r.resolve(this._items[e]);else{if(this._loadPromises[e])return this._loadPromises[e];var a=new s(n.server);a.token=n.token,a.getDataCollections(e,null,["id","alias"]).then(i.hitch(this,this._mergeItems,e,r),(function(e){r.reject(e)}))}return this._loadPromises[e]=r.promise,r.promise},_mergeItems:function(e,i,t){try{var r,s,a,n,l={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},u={TapestryNEW:"Tapestry"},c=[];for(r=0;r<t.length;r++){var m=t[r].metadata.infographics||t[r].metadata.infographics2;if(m){var p=JSON.parse(m);for(var v in p)if(l[v]){var g=new o(u[v]||v,[t[r].id+".*"]);for(var y in p[v])p[v].hasOwnProperty(y)&&(g[y]=p[v][y]);(s=f(c,g))?c[s.index]=g:c.push(g)}}}var b=function(e){return a||function(){a={},n={};for(var e=0;e<t.length;e++){n[t[e].id]=t[e];for(var i=0;i<t[e].variables.length;i++)a[t[e].id+"."+t[e].variables[i].id]=t[e].variables[i]}}(),a[e]},_=this._items[e];for(_||((_=[]).push(new o("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[e]=_),r=_.length-1;r>=0;r--)if(s=f(c,_[r]))d(_[r],s.report),_[r]=s.report,c.splice(s.index,1);else{if("OneVar"==_[r].type&&1==_[r].variables.length){var O=b(_[r].variables[0]);if(O){_[r].title=O.alias;continue}}_.splice(r,1),r--}for(r=0;r<c.length;r++)_.push(c[r]);_.sort(h),this._loaded[e]=!0,delete this._loadPromises[e],i.resolve(_)}catch(e){i.reject(e)}},toJson:function(){var e={};return l(this._items,e),{studyAreaOptions:this.studyAreaOptions.toJson(),items:e,theme:this.theme}}});return c.Item=o,c}));