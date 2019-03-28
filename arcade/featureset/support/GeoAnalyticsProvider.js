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

define(["require","exports","../../../request","../../polyfill/promiseUtils"],function(e,r,t,n){"use strict";return function(){function e(e){this.url=e}return e.prototype.extendScriptWithGlobals=function(e,r){var t={newscript:"",newglobals:[]};for(var n in r){var o=r[n];if("geometry"===o.type)t.newscript+="var "+o.name+"= "+(null===o.params.value?"null;\n":"Geometry("+JSON.stringify(o.params.value.toJson())+");\n");else if("FeatureLayer"===o.type){var a={name:o.name,value:o.params.url,filter:o.params.definitionExpression,type:"FeatureLayer"};0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),t.newglobals.push(a)}else if("BigDataCatalogShare"===o.type){var a={name:o.name,value:o.params.url,filter:o.params.definitionExpression,type:"FeatureLayer"};0===a.value.indexOf("//")&&(a.value=document.location.protocol+a.value),t.newglobals.push(a)}}return t.newscript+=e,t},e.prototype.executeScript=function(e,r,o){var a=this.extendScriptWithGlobals(e,r),i={f:"json",sref:null===o?"":JSON.stringify(o.toJson()),vars:JSON.stringify(a.newglobals),script:a.newscript};return t(this.url,{method:"auto",responseType:"json",query:i}).then(function(e){return void 0!==e.data?e.data.error?n.reject(new Error(e.data.error)):null:e.error?n.reject(new Error(e.error)):null})},e.prototype.executeFeatureSetPageRequest=function(e,r,o,a){var i=this.extendScriptWithGlobals(e,r),s={f:"json",sref:null===o?"":JSON.stringify(o.toJson()),vars:JSON.stringify(i.newglobals),script:i.newscript};return""!==a?n.resolve({moniker:a,records:[]}):t(this.url,{method:"auto",responseType:"json",query:s}).then(function(e){return e.data.error?n.reject(new Error(e.data.error)):null})},e}()});