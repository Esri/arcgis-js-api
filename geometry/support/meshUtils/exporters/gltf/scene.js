/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let o=function(){function e(){this.name="",this._nodes=[]}var o=e.prototype;return o.addNode=function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)},o.forEachNode=function(e){this._nodes.forEach(e)},e}();e.Scene=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
