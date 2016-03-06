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

define(["../../declare","dojo/_base/lang","dojo/Deferred","dojo/string","../../tasks/geoenrichment/studyAreaOptionsFromJson","../../tasks/geoenrichment/GeoenrichmentTask","./lang","./config","./InfographicsOptionsItem"],function(e,t,i,r,a,s,n,o,l){function h(e,t){var i=parseFloat(e.index),r=parseFloat(t.index);return isNaN(i)&&isNaN(r)?0:isNaN(i)?1:isNaN(r)?-1:i-r}function f(e,t){for(var i=0;i<e.length;i++){var r=e[i];if(r.type==t.type&&n.arraysEqual(r.variables,t.variables))return{report:r,index:i}}return null}function c(e,t){if(e)for(var i in e)if(e.hasOwnProperty(i)){t[i]=[];for(var r=0;r<e[i].length;r++){var a=e[i][r],s={};u(a,s),t[i].push(s)}}}function u(e,t){if(t.type=e.type||("OneVarMultiComparison"==e.report?"OneVar":e.report),e.dataCollection)if(e.vars){t.variables=[];for(var i=0;i<e.vars.length;i++)t.variables.push(e.dataCollection+"."+e.vars[i])}else t.variables=[e.dataCollection+".*"];else t.variables=e.variables;n.isBoolean(e.isVisible)?t.isVisible=e.isVisible:n.isBoolean(e.checked)&&(t.isVisible=e.checked)}var d=e("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,studyAreaOptions:null,theme:"common",constructor:function(e){this._loaded={},this.studyAreaOptions=a(e&&(e.buffer||e.studyAreaOptions)),this._items={},e&&(c(e.reports||e.items,this._items),e.theme&&(this.theme=e.theme))},toJson:function(){var e={};return c(this._items,e),{studyAreaOptions:this.studyAreaOptions.toJson(),items:e,theme:this.theme}},getItems:function(e){var r=new i;if(this._loaded[e])r.resolve(this._items[e]);else{var a=new s(o.server);a.token=o.token,a.getDataCollections(e,null,["id","alias"]).then(t.hitch(this,this._mergeItems,e,r),function(e){r.reject(e)})}return r.promise},_mergeItems:function(e,t,i){function r(){O={},_={};for(var e=0;e<i.length;e++){_[i[e].id]=i[e];for(var t=0;t<i[e].variables.length;t++)O[i[e].id+"."+i[e].variables[t].id]=i[e].variables[t]}}function a(e){return O||r(),O[e]}try{var s,n,o={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},c={TapestryNEW:"Tapestry"},d=[];for(s=0;s<i.length;s++){var p=i[s].metadata.infographics||i[s].metadata.infographics2;if(p){var v=JSON.parse(p);for(var m in v)if(o[m]){var g=m;c[m]&&(g=c[m]);var b=new l(g,[i[s].id+".*"]);for(var y in v[m])v[m].hasOwnProperty(y)&&(b[y]=v[m][y]);n=f(d,b),n?d[n.index]=b:d.push(b)}}}var O,_,N=this._items[e];for(N||(N=[],N.push(new l("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[e]=N),s=N.length-1;s>=0;s--)if(n=f(d,N[s]))u(N[s],n.report),N[s]=n.report,d.splice(n.index,1);else{if("OneVar"==N[s].type&&1==N[s].variables.length){var V=N[s].variables[0],A=a(V);if(A){N[s].title=A.alias;continue}}N.splice(s,1),s--}for(s=0;s<d.length;s++)N.push(d[s]);N.sort(h),this._loaded[e]=!0,t.resolve(N)}catch(k){t.reject(k)}}});return d.Item=l,d});