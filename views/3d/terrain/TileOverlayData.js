/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers"],(function(s){"use strict";return function(){function t(){this._scales=[-1,-1,-1,-1],this._offsets=[-1,-1,-1,-1]}var e=t.prototype;return e.clear=function(){this._scales[0]=this._scales[1]=this._scales[2]=this._scales[3]=-1,this._offsets[0]=this._offsets[1]=this._offsets[2]=this._offsets[3]=-1},e.setScale=function(s,t,e){this._scales[2*s]=t,this._scales[2*s+1]=e},e.setOffset=function(s,t,e){this._offsets[2*s]=t,this._offsets[2*s+1]=e},s._createClass(t,[{key:"scales",get:function(){return this._scales}},{key:"offsets",get:function(){return this._offsets}}]),t}()}));
