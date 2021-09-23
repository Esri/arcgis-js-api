/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=2147483647,n=2147483648,r=0,i=1;function s(e){return(e&n)>>>31}function u(e){return e&t}function o(e,t){return((t?n:0)|e)>>>0}let d=function(){function e(){this._freeIds=[],this._idCounter=1}var t=e.prototype;return t.createId=function(e=!1){return o(this._getFreeId(),e)},t.releaseId=function(e){this._freeIds.push(e)},t._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++},e}();e.DISPLAY_ID_TYPE_AGGREGATE=i,e.DISPLAY_ID_TYPE_FEATURE=r,e.DisplayIdGenerator=d,e.getDisplayIdIndex=u,e.getDisplayIdType=s,Object.defineProperty(e,"__esModule",{value:!0})}));
