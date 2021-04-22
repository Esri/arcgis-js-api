/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./ObservationHandle"],(function(e,t){"use strict";let r=function(){function e(){this._observers=new Set}var r=e.prototype;return r.observe=function(e){return new t.ObservationHandle(this._observers.add(e),e)},r.notify=function(){const e=this._observers,t=this._observers.size,r=new Array(t);let n=0;for(const o of e)r[n++]=o;for(let o=0;o<t;o++)r[o].notify()},e}();e.SimpleObservable=r,Object.defineProperty(e,"__esModule",{value:!0})}));
