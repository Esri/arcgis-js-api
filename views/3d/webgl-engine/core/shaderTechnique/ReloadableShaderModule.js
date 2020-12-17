/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t){this._module=e,this._loadModule=t}var t=e.prototype;return t.get=function(){return this._module},t.reload=async function(){return this._module=await this._loadModule(),this._module},e}();e.ReloadableShaderModule=t,Object.defineProperty(e,"__esModule",{value:!0})}));
