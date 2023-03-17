/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../lang","./PropertyOrigin"],(function(t,e,n){"use strict";let i=function(){function t(){this._values=new Map,this.multipleOriginsSupported=!1}var i=t.prototype;return i.clone=function(n){const i=new t;return this._values.forEach(((t,r)=>{n&&n.has(r)||i.set(r,e.clone(t))})),i},i.get=function(t){return this._values.get(t)},i.originOf=function(){return n.OriginId.USER},i.keys=function(){return[...this._values.keys()]},i.set=function(t,e){this._values.set(t,e)},i.delete=function(t){this._values.delete(t)},i.has=function(t){return this._values.has(t)},i.forEach=function(t){this._values.forEach(t)},t}();t.Store=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
