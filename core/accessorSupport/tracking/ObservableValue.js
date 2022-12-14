/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../tracking","./SimpleObservable"],(function(e,t,i){"use strict";let s=function(){function e(e){this._observable=new i.SimpleObservable,this._value=e}var s=e.prototype;return s.get=function(){return t.trackAccess(this._observable),this._value},s.set=function(e){e!==this._value&&(this._value=e,this._observable.notify())},e}();e.ObservableValue=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
