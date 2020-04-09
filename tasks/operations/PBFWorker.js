// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/assignHelper","../../Graphic","../../core/promiseUtils","../../core/workers","../../geometry/SpatialReference","../../layers/support/Field","./pbfQueryUtils"],(function(e,r,t,o,a,n,i,s,f,u){Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var r=u.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var t=r;if(r.spatialReference=t.spatialReference.toJSON(),t.fields)for(var o=0;o<t.fields.length;o++)t.fields[o]=t.fields[o].toJSON()}return n.resolve(r)},e}(),p=function(e){function r(){var r=e.call(this)||this;return r._thread=void 0,i.open("PBFWorker",{strategy:"dedicated"}).then((function(e){void 0===r._thread?r._thread=e:e.close()})),r}return t(r,e),r.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},r.prototype.parseFeatureQuery=function(e,r){return e&&0!==e.byteLength?this._thread?(r.sourceSpatialReference&&r.sourceSpatialReference instanceof s&&(r=o({},r,{sourceSpatialReference:r.sourceSpatialReference.toJSON()})),this._thread.invoke("_parseFeatureQuery",{buffer:e,options:r},{transferList:[e]}).then((function(e){if(r&&"dehydrated"===r.type){var t=e;if(t.spatialReference=s.fromJSON(t.spatialReference),t.fields)for(var o=0;o<t.fields.length;o++)t.fields[o]=f.fromJSON(t.fields[o]);for(var n=t.spatialReference,i=0,u=t.features;i<u.length;i++){var l=u[i];l.uid=a.generateUID(),l.geometry&&(l.geometry.spatialReference=n)}}return e}))):n.resolve(u.parsePBFFeatureQuery(e,r)):n.resolve(null)},r}(l);r.PBFWorker=p,r.default=function(){return new l}}));