// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../deferredUtils","../urlUtils","../Evented"],(function(e,r,t,s,n,i,o,a){var l=e(a,{declaredClass:"esri.tasks._Task",_eventMap:{error:["error"],complete:["result"]},constructor:function(e,t){e&&r.isString(e)&&(this._url=o.urlToObject(this.url=e)),t&&t.requestOptions&&(this.requestOptions=t.requestOptions),this.normalization=!0,this._errorHandler=r.hitch(this,this._errorHandler),this.registerConnectEvents()},_useSSL:function(){var e=this._url,r=/^http:/i;this.url&&(this.url=this.url.replace(r,"https:")),e&&e.path&&(e.path=e.path.replace(r,"https:"))},_encode:function(e,s,n){var i,o,a,l,c,u={};for(a in e)if("declaredClass"!==a&&(o=typeof(i=e[a]),null!=i&&"function"!==o))if(r.isArray(i))for(u[a]=[],c=i.length,l=0;l<c;l++)u[a][l]=this._encode(i[l]);else if("object"===o){if(i.toJson){var h=i.toJson(n&&n[a]);"esri.tasks.FeatureSet"===i.declaredClass&&h.spatialReference&&(h.sr=h.spatialReference,delete h.spatialReference),u[a]=s?h:t.toJson(h)}}else u[a]=i;return u},_successHandler:function(e,r,t,s){r&&this[r].apply(this,e),t&&t.apply(null,e),s&&i._resDfd(s,e)},_errorHandler:function(e,r,t){this.onError(e),r&&r(e),t&&t.errback(e)},setNormalization:function(e){this.normalization=e},onError:function(){}});return s("extend-esri")&&(n.Task=l),l}));