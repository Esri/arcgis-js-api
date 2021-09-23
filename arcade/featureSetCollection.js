// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","./polyfill/promiseUtils"],(function(e,t,r){"use strict";return function(){function e(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}return e.prototype.add=function(e,t,r){this._layerById[t]=r,this._layerByName[e]=r},e.prototype.featureSetByName=function(e,t,r){return void 0===t&&(t=!0),void 0===r&&(r=["*"]),void 0===this._layerByName[e]?this.resolvePromise(null):this.resolvePromise(this._layerByName[e])},e.prototype.featureSetById=function(e,t,r){return void 0===t&&(t=!0),void 0===r&&(r=["*"]),void 0===this._layerById[e]?this.resolvePromise(null):this.resolvePromise(this._layerById[e])},e.prototype.castToText=function(){return"object, FeatureSetCollection"},e.prototype.resolvePromise=function(e){return r.resolve(e)},e}()}));