/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./maybe"],(function(e,t){"use strict";return function(){function i(e=(e=>e.values().next().value)){this._peeker=e,this._items=new Set}var s=i.prototype;return s.clear=function(){this._items.clear()},s.peek=function(){if(0!==this._items.size)return this._peeker(this._items)},s.push=function(e){this.contains(e)||this._items.add(e)},s.contains=function(e){return this._items.has(e)},s.pop=function(){if(0===this.length)return;const e=this.peek();return this._items.delete(t.assumeNonNull(e)),e},s.remove=function(e){this._items.delete(e)},s.filter=function(e){return this._items.forEach((t=>{e(t)||this._items.delete(t)})),this},e._createClass(i,[{key:"length",get:function(){return this._items.size}}]),i}()}));
