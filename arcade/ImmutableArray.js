/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function t(t=[]){this._elements=t}var n=t.prototype;return n.length=function(){return this._elements.length},n.get=function(t){return this._elements[t]},n.toArray=function(){const t=[];for(let n=0;n<this.length();n++)t.push(this.get(n));return t},t}()}));
