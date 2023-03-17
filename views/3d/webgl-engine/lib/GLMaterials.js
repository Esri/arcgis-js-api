/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./basicInterfaces"],(function(e,t,r){"use strict";let i=function(){function e(e,t){this._material=e,this._repository=t,this._map=new Map}var i=e.prototype;return i.destroy=function(){this._map.forEach(((e,r)=>{t.isSome(e)&&this._repository.release(this._material,r)}))},i.load=function(e,i,s){if(!this._material.requiresSlot(i,s))return null;this._map.has(s)||this._map.set(s,this._repository.acquire(this._material,i,s));const o=this._map.get(s);if(t.isSome(o)){if(o.ensureResources(e)===r.ResourceState.LOADED)return o;this._repository.requestRender()}return null},e}();e.GLMaterials=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
