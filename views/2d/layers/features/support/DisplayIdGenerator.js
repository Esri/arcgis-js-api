/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../engine/webgl/DisplayId"],(function(e,t){"use strict";let r=function(){function e(){this._freeIds=[],this._idCounter=1}var r=e.prototype;return r.createId=function(e=!1){return t.createDisplayId(this._getFreeId(),e)},r.releaseId=function(e){this._freeIds.push(e)},r._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++},e}();e.DisplayIdGenerator=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
