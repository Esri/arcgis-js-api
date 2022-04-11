/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";const e=29;return function(){function i(t,i=e){this.name=t,this._counter=0,this._items=new Array(i)}return i.prototype.record=function(t){this._items[++this._counter%this._items.length]=t},t._createClass(i,[{key:"median",get:function(){return this._items.slice().sort(((t,e)=>t-e))[Math.floor(this._items.length/2)]}},{key:"average",get:function(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}},{key:"last",get:function(){return this._items[this._counter%this._items.length]}}]),i}()}));
