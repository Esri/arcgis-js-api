/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../lang","./PropertyOrigin"],(function(e,t,n){"use strict";let i=function(){function e(){this._values=new Map,this.multipleOriginsSupported=!1}var i=e.prototype;return i.clone=function(n){const i=new e;return this._values.forEach(((e,s)=>{n&&n.has(s)||i.set(s,t.clone(e))})),i},i.get=function(e){return this._values.get(e)},i.originOf=function(){return n.OriginId.USER},i.keys=function(){return[...this._values.keys()]},i.set=function(e,t){this._values.set(e,t)},i.delete=function(e){this._values.delete(e)},i.has=function(e){return this._values.has(e)},i.forEach=function(e){this._values.forEach(e)},e}();e.Store=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
