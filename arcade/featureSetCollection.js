/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../core/promiseUtils"],(function(e){"use strict";return function(){function t(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}var r=t.prototype;return r.add=function(e,t,r){this._layerById[t]=r,this._layerByName[e]=r},r.featureSetByName=function(e,t=!0,r=["*"]){return void 0===this._layerByName[e]?this.resolvePromise(null):this.resolvePromise(this._layerByName[e])},r.featureSetById=function(e,t=!0,r=["*"]){return void 0===this._layerById[e]?this.resolvePromise(null):this.resolvePromise(this._layerById[e])},r.castToText=function(){return"object, FeatureSetCollection"},r.resolvePromise=function(t){return e.resolve(t)},t}()}));
