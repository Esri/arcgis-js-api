/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./ObservationHandle"],(function(e,t){"use strict";let s=function(){function e(){this._observers=[]}var s=e.prototype;return s.observe=function(e){return this._observers.includes(e)||this._observers.push(e),new t.ObservationHandle(this._observers,e)},s.notify=function(){const e=this._observers.slice();for(let t=0;t<e.length;++t){const s=e[t];s.onInvalidated(),s.onCommitted()}},e}();e.SimpleObservable=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
