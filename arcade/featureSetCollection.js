/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";let t=function(){function t(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}var r=t.prototype;return r.add=function(e,t,r){this._layerById[t]=r,this._layerByName[e]=r},r.featureSetByName=function(){var t=e._asyncToGenerator((function*(e,t=!0,r=["*"]){return void 0===this._layerByName[e]?null:this._layerByName[e]}));function r(e){return t.apply(this,arguments)}return r}(),r.featureSetById=function(){var t=e._asyncToGenerator((function*(e,t=!0,r=["*"]){return void 0===this._layerById[e]?null:this._layerById[e]}));function r(e){return t.apply(this,arguments)}return r}(),r.castToText=function(e=!1){return"object, FeatureSetCollection"},t}();return t}));
