/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this._stage=t,this._materials=new Map}var e=t.prototype;return e.get=function(t){return this._materials.get(t)},e.add=function(t,e){this._materials.set(t,e),this._stage.add(e)},e.dispose=function(){this._stage.removeMany(Array.from(this._materials.values())),this._materials.clear()},t}();t.MaterialCollection=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
