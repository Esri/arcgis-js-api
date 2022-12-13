/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}var e=t.prototype;return e.update=function(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t},e.reset=function(){this.lastValue=void 0,this.filteredDelta=void 0},e.hasLastValue=function(){return void 0!==this.lastValue},e.hasFilteredDelta=function(){return void 0!==this.filteredDelta},e.computeDelta=function(t){return void 0===this.lastValue?NaN:t-this.lastValue},e._updateDelta=function(t){void 0!==this.filteredDelta?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t},t}();t.FilteredFiniteDifference=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
