/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function t(t,e){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._filter=t.getFeatureFilter()}var e=t.prototype;return e.pushFeature=function(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)},e.hasFeatures=function(){return this._features.length>0},t}()}));
