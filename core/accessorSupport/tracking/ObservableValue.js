/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../tracking","./SimpleObservable"],(function(e,t,i){"use strict";let r=function(){function e(e){this._observable=new i.SimpleObservable,this._value=e}var r=e.prototype;return r.get=function(){return t.trackAccess(this._observable),this._value},r.set=function(e){e!==this._value&&(this._value=e,this._observable.notify())},e}();e.ObservableValue=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
