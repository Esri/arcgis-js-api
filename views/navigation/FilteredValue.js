/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let i=function(){function e(e){this._gain=e}var i=e.prototype;return i.update=function(e){void 0!==this.filteredValue?this.filteredValue=(1-this._gain)*this.filteredValue+this._gain*e:this.filteredValue=e},i.reset=function(){this.filteredValue=void 0},t._createClass(e,[{key:"hasFilteredValue",get:function(){return void 0!==this.filteredValue}}]),e}();e.FilteredValue=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
