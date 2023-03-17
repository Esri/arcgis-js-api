/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec4f64"],(function(s,t){"use strict";return function(){function e(){this._scales=t.fromValues(-1,-1,-1,-1),this._offsets=t.fromValues(-1,-1,-1,-1)}var f=e.prototype;return f.clear=function(){this._scales[0]=this._scales[1]=this._scales[2]=this._scales[3]=-1,this._offsets[0]=this._offsets[1]=this._offsets[2]=this._offsets[3]=-1},f.setScale=function(s,t,e){this._scales[2*s]=t,this._scales[2*s+1]=e},f.setOffset=function(s,t,e){this._offsets[2*s]=t,this._offsets[2*s+1]=e},s._createClass(e,[{key:"scales",get:function(){return this._scales}},{key:"offsets",get:function(){return this._offsets}}]),e}()}));
