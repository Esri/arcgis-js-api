/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t){this.gain=t}var i=t.prototype;return i.update=function(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e)}this.lastValue=t},i.reset=function(){this.lastValue=void 0,this.filteredDelta=void 0},i.computeDelta=function(t){return t-this.lastValue},i.updateDelta=function(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t},e._createClass(t,[{key:"hasLastValue",get:function(){return void 0!==this.lastValue}},{key:"hasFilteredDelta",get:function(){return void 0!==this.filteredDelta}}]),t}();t.FilteredFiniteDifference=i,Object.defineProperty(t,"__esModule",{value:!0})}));
