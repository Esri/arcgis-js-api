/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let i=function(){function e(e){this.gain=e}var i=e.prototype;return i.update=function(e){this.hasFilteredValue?this.filteredValue=(1-this.gain)*this.filteredValue+this.gain*e:this.filteredValue=e},i.reset=function(){this.filteredValue=void 0},t._createClass(e,[{key:"hasFilteredValue",get:function(){return void 0!==this.filteredValue}}]),e}();e.FilteredValue=i,Object.defineProperty(e,"__esModule",{value:!0})}));
