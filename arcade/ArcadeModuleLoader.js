/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t,e){this._moduleSingletons=t,this._syntaxModules=e}return t.prototype.loadLibrary=function(t){if(null==this._syntaxModules)return null;const e=this._syntaxModules[t.toLowerCase()];return e?{syntax:e.script,uri:e.uri}:null},t}();t.ArcadeModuleLoader=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
