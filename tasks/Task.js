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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","../core/Accessor","../core/urlUtils"],function(e,r,t){var l=r.createSubclass({declaredClass:"esri.tasks._Task",normalizeCtorArgs:function(r,t){if("string"!=typeof r)return r;var l={};return r&&(l.url=r),t&&e.mixin(l,t),l},properties:{normalization:{value:!0},parsedUrl:{value:null,readOnly:!0,dependsOn:["url"],get:function(){return this._parseUrl(this.url)}},requestOptions:{value:null},url:{value:null,type:String}},_parseUrl:function(e){return e?t.urlToObject(e):null},_useSSL:function(){var e=this.parsedUrl,r=/^http:/i,t="https:";this.url&&this.set("url",this.url.replace(r,t)),e&&e.path&&(e.path=e.path.replace(r,t))},_encode:function(r,t,l){var s,n,a,i,u,o={};for(a in r)if("declaredClass"!==a&&(s=r[a],n=typeof s,null!==s&&void 0!==s&&"function"!==n))if(e.isArray(s))for(o[a]=[],u=s.length,i=0;u>i;i++)o[a][i]=this._encode(s[i]);else if("object"===n){if(s.toJSON){var c=s.toJSON(l&&l[a]);"esri.tasks.support.FeatureSet"===s.declaredClass&&c.spatialReference&&(c.sr=c.spatialReference,delete c.spatialReference),o[a]=t?c:JSON.stringify(c)}}else o[a]=s;return o}});return l});