// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../Graphic","../../core/promiseUtils","../../core/requireUtils","../../core/workers","../../geometry/SpatialReference","../../layers/support/Field","./pbfQueryUtils","module"],function(e,r,t,o,i,n,a,s,f,u,l){function d(){return new p}Object.defineProperty(r,"__esModule",{value:!0});var p=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var r=u.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var t=r;if(r.spatialReference=t.spatialReference.toJSON(),t.fields)for(var o=0;o<t.fields.length;o++)t.fields[o]=t.fields[o].toJSON()}return i.resolve(r)},e}(),c=function(r){function d(){var t=r.call(this)||this;return t._thread=void 0,a.open(n.getAbsMid("./PBFWorker",e,l),{strategy:"dedicated"}).then(function(e){void 0===t._thread?t._thread=e:e.close()}),t}return t(d,r),d.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},d.prototype.parseFeatureQuery=function(e,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:r},{transferList:[e]}).then(function(e){if(r&&"dehydrated"===r.type){var t=e;if(t.spatialReference=s.fromJSON(t.spatialReference),t.fields)for(var i=0;i<t.fields.length;i++)t.fields[i]=f.fromJSON(t.fields[i]);for(var n=t.spatialReference,a=0,u=t.features;a<u.length;a++){var l=u[a];l.uid=o.generateUID(),l.geometry&&(l.geometry.spatialReference=n)}}return e}):i.resolve(u.parsePBFFeatureQuery(e,r)):i.resolve(null)},d}(p);r.PBFWorker=c,r.default=d});