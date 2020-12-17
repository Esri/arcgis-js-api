/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./unitUtils"],(function(t,n){"use strict";return function(){function i(t,i){this.measure=n.measureForUnit(i),this.value=t,this.unit=i}var e=i.prototype;return e.toUnit=function(t){return new i(n.convertUnit(this.value,this.unit,t),t)},e.toBaseUnit=function(){return this.toUnit(n.baseUnitForUnit(this.unit))},t._createClass(i,[{key:"isBaseUnit",get:function(){return n.isBaseUnit(this.unit)}}]),i}()}));
