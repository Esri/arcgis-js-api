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

define(["require","exports","../../Graphic","../../core/promiseUtils","../../geometry/SpatialReference","./pbfQueryUtils"],function(e,r,t,a,n,u){return function(){function e(){}return e.prototype.parseFeatureQuery=function(e,r){return e&&0!==e.byteLength?this.thread?this.thread.invoke("_parseFeatureQuery",{buffer:e,options:r},{transferList:[e]}).then(function(e){var r=e.featureSet;if(e.sr){var a=n.fromJSON(e.sr);r.spatialReference=a}for(var u=r.spatialReference,o=0,s=r.features;o<s.length;o++){var i=s[o];i.uid=t.generateUID(),i.geometry&&(i.geometry.spatialReference=u)}return e.featureSet}):a.resolve(u.parsePBFFeatureQuery(e,r)):a.resolve(null)},e.prototype._parseFeatureQuery=function(e){var r,t=u.parsePBFFeatureQuery(e.buffer,e.options);return e.options&&"dehydrated"===e.options.type&&(r=t.spatialReference.toJSON(),t.spatialReference=null),a.resolve({featureSet:t,sr:r})},e}()});