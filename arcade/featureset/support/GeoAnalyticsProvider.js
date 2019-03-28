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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../request","../../../core/promiseUtils"],function(e,r,t,n){return function(){function e(e){this.url=e}return e.prototype.extendScriptWithGlobals=function(e,r){var t={newscript:"",newglobals:[]};for(var n in r){var a=r[n];if("geometry"===a.type)t.newscript+="var "+a.name+"= "+(null===a.params.value?"null;\n":"Geometry("+JSON.stringify(a.params.value.toJSON())+");\n");else if("FeatureLayer"===a.type){var o={name:a.name,value:a.params.url,filter:a.params.definitionExpression,type:"FeatureLayer"};0===o.value.indexOf("//")&&(o.value=document.location.protocol+o.value),t.newglobals.push(o)}else if("BigDataCatalogShare"===a.type){var o={name:a.name,value:a.params.url,filter:a.params.definitionExpression,type:"FeatureLayer"};0===o.value.indexOf("//")&&(o.value=document.location.protocol+o.value),t.newglobals.push(o)}}return t.newscript+=e,t},e.prototype.executeScript=function(e,r,a){var o=this.extendScriptWithGlobals(e,r),i={f:"json",sref:null===a?"":JSON.stringify(a.toJSON()),vars:JSON.stringify(o.newglobals),script:o.newscript};return t(this.url,{method:"auto",responseType:"json",query:i}).then(function(e){return void 0!==e.data?e.data.error?n.reject(new Error(e.data.error)):null:e.error?n.reject(new Error(e.error)):null})},e.prototype.executeFeatureSetPageRequest=function(e,r,a,o){var i=this.extendScriptWithGlobals(e,r),s={f:"json",sref:null===a?"":JSON.stringify(a.toJSON()),vars:JSON.stringify(i.newglobals),script:i.newscript};return""!==o?n.resolve({moniker:o,records:[]}):t(this.url,{method:"auto",responseType:"json",query:s}).then(function(e){return e.data.error?n.reject(new Error(e.data.error)):null})},e}()});