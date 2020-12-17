/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=2147483648;let n=function(){function e(){this._freeIds=[],this._idCounter=1}var n=e.prototype;return n.createId=function(e=!1){return function(e,n){return((n?t:0)|e)>>>0}(this._getFreeId(),e)},n.releaseId=function(e){this._freeIds.push(e)},n._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++},e}();e.DISPLAY_ID_TYPE_AGGREGATE=1,e.DISPLAY_ID_TYPE_FEATURE=0,e.DisplayIdGenerator=n,e.getDisplayIdIndex=function(e){return 2147483647&e},e.getDisplayIdType=function(e){return(e&t)>>>31},Object.defineProperty(e,"__esModule",{value:!0})}));
