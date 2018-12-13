// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../../request"],function(e,r,t,n){return function(){function e(e,r){this.url=e,this.token=r}return e.prototype.extendScriptWithGlobals=function(e,r){var t={newscript:"",newglobals:[]};for(var n in r){var o=r[n];if("geometry"===o.type)t.newscript+="var "+o.name+"= "+(null===o.params.value?"null;\n":"Geometry("+JSON.stringify(o.params.value.toJSON())+");\n");else if("FeatureLayer"===o.type){var a={name:o.name,value:o.params.url,token:o.params.token,filter:o.params.definitionExpression,type:"FeatureLayer"};0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),t.newglobals.push(a)}else if("BigDataCatalogShare"===o.type){var a={name:o.name,value:o.params.url,token:o.params.token,filter:o.params.definitionExpression,type:"FeatureLayer"};0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),t.newglobals.push(a)}}return t.newscript+=e,t},e.prototype.executeScript=function(e,r,o){var a=new t,i=this.extendScriptWithGlobals(e,r),s={f:"json",sref:null===o?"":JSON.stringify(o.toJSON()),vars:JSON.stringify(i.newglobals),script:i.newscript};return n(this.url,{method:"auto",responseType:"json",query:s}).then(function(e){if(void 0!==e.data)return e.data.error?void a.reject(new Error(e.data.error)):void a.resolve(null);e.error?a.reject(new Error(e.error)):a.resolve(null)},function(e){a.reject(e)}),a.promise},e.prototype.executeFeatureSetPageRequest=function(e,r,o,a){var i=this.extendScriptWithGlobals(e,r),s=new t,l={f:"json",sref:null===o?"":JSON.stringify(o.toJSON()),vars:JSON.stringify(i.newglobals),script:i.newscript};return""!==a?(s.resolve({moniker:a,records:[]}),s.promise):(n(this.url,{method:"auto",responseType:"json",query:l}).then(function(e){return e.data.error?void s.reject(new Error(e.data.error)):void s.resolve(null)},function(e){s.reject(e)}),s.promise)},e}()});