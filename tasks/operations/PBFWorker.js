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

define(["require","exports","../../core/tsSupport/extendsHelper","../../Graphic","../../core/promiseUtils","../../core/requireUtils","../../core/workers","../../geometry/SpatialReference","./pbfQueryUtils","module"],function(e,r,t,n,o,a,u,i,s,f){function p(){return new l}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var r,t=s.parsePBFFeatureQuery(e.buffer,e.options);return e.options&&"dehydrated"===e.options.type&&(r=t.spatialReference.toJSON(),t.spatialReference=null),o.resolve({featureSet:t,sr:r})},e}(),c=function(r){function p(){var t=r.call(this)||this;return t._thread=void 0,u.open(a.getAbsMid("./PBFWorker",e,f),{strategy:"dedicated"}).then(function(e){void 0===t._thread?t._thread=e:e.close()}),t}return t(p,r),p.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},p.prototype.parseFeatureQuery=function(e,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:r},{transferList:[e]}).then(function(e){var r=e.featureSet;if(e.sr){var t=i.fromJSON(e.sr);r.spatialReference=t}for(var o=r.spatialReference,a=0,u=r.features;a<u.length;a++){var s=u[a];s.uid=n.generateUID(),s.geometry&&(s.geometry.spatialReference=o)}return e.featureSet}):o.resolve(s.parsePBFFeatureQuery(e,r)):o.resolve(null)},p}(l);r.PBFWorker=c,r.default=p});