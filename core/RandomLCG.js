/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";let e=function(){function e(t=1){this._seed=t}var n=e.prototype;return n.getInt=function(){return this._seed=(e._a*this._seed+e._c)%e._m,this._seed},n.getFloat=function(){return this.getInt()/(e._m-1)},n.getIntRange=function(t,e){return Math.round(this.getFloatRange(t,e))},n.getFloatRange=function(t,n){const s=n-t,r=this.getInt()/e._m;return t+Math.floor(r*s)},t._createClass(e,[{key:"seed",set:function(t){this._seed=null==t?Math.random()*e._m:t}}]),e}();return e._m=2147483647,e._a=48271,e._c=0,e}));
