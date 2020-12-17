/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(){this._byGeometryType=null}var i=t.prototype;return i.reset=function(){this._byGeometryType=null},i.verticesFor=function(e){return this._byGeometryType?this._byGeometryType[e].vertices:0},i.indicesFor=function(e){return this._byGeometryType?this._byGeometryType[e].indices:0},i.needMore=function(e,t,i){if(!t&&!i)return;this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]);const r=this._byGeometryType[e];r.vertices+=t,r.indices+=i},e._createClass(t,[{key:"satisfied",get:function(){return!this._byGeometryType}}]),t}()}));
