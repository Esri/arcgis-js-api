/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t,e=29){this.name=t,this._counter=0,this._items=new Array(e)}return e.prototype.record=function(t){this._items[++this._counter%this._items.length]=t},t._createClass(e,[{key:"median",get:function(){return this._items.slice().sort()[Math.floor(this._items.length/2)]}},{key:"average",get:function(){return this._items.reduce(((t,e)=>t+e),0)/this._items.length}},{key:"last",get:function(){return this._items[this._counter%this._items.length]}}]),e}()}));
