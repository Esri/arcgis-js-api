/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e,t){this._moduleSingletons=e,this._syntaxModules=t}return e.prototype.loadLibrary=function(e){if(null==this._syntaxModules)return null;const t=this._syntaxModules[e.toLowerCase()];return t?{syntax:t.script,uri:t.uri}:null},e}();e.ArcadeModuleLoader=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
