/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe"],(function(e,t){"use strict";let r=function(){function e(e,t){this._material=e,this._repository=t,this._map=new Map}var r=e.prototype;return r.destroy=function(){this._map.forEach(((e,r)=>{t.isSome(e)&&this._repository.release(this._material,s(r))}))},r.load=function(e,r){this._map.has(r)||this._map.set(r,this._repository.acquire(this._material,s(r)));const i=this._map.get(r);if(t.isSome(i)){if(2===i.ensureResources(e))return i;this._repository.requestRender()}return null},e}();function s(e){switch(e){default:case 0:return 0;case 1:return 7;case 4:case 7:case 6:return 3;case 3:return 2;case 2:return 1;case 5:return 4}}e.GLMaterials=r,e.outputFromPass=s,Object.defineProperty(e,"__esModule",{value:!0})}));
