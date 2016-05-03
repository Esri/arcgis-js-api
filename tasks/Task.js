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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/Accessoire","../core/urlUtils"],function(e,r,t,s){var l=e(t,{declaredClass:"esri.tasks._Task",classMetadata:{properties:{parsedUrl:{readOnly:!0,dependsOn:["url"]}}},normalizeCtorArgs:function(e,t){if("string"!=typeof e)return e;var s={};return e&&(s.url=e),t&&r.mixin(s,t),s},url:null,parsedUrl:null,_parsedUrlGetter:function(){return this.url?s.urlToObject(this.url):null},requestOptions:null,normalization:!0,_useSSL:function(){var e=this.parsedUrl,r=/^http:/i,t="https:";this.url&&this.set("url",this.url.replace(r,t)),e&&e.path&&(e.path=e.path.replace(r,t))},_encode:function(e,t,s){var l,a,n,i,o,u={};for(n in e)if("declaredClass"!==n&&(l=e[n],a=typeof l,null!==l&&void 0!==l&&"function"!==a))if(r.isArray(l))for(u[n]=[],o=l.length,i=0;o>i;i++)u[n][i]=this._encode(l[i]);else if("object"===a){if(l.toJSON){var c=l.toJSON(s&&s[n]);"esri.tasks.support.FeatureSet"===l.declaredClass&&c.spatialReference&&(c.sr=c.spatialReference,delete c.spatialReference),u[n]=t?c:JSON.stringify(c)}}else u[n]=l;return u}});return l});