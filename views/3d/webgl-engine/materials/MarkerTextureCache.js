/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../support/engineContent/marker","../core/material/RenderTexture"],(function(e,t,r){"use strict";let i=function(){function e(e,t){this._textures=e,this._textureRepository=t,this._texturesByPrimitive=new Map}var i=e.prototype;return i.acquire=function(e){if(!this._texturesByPrimitive.has(e)){const i=t.prepareMarkerResources(this._textures,e),s=new r.RenderTexture(this._textureRepository,i.texture.id);return this._texturesByPrimitive.set(e,{result:i,reference:s}),i.texture}return this._texturesByPrimitive.get(e).result.texture},i.destroy=function(){this._texturesByPrimitive.forEach((({result:e,reference:t})=>{t.dispose(),e.release()})),this._texturesByPrimitive.clear()},e}();e.MarkerTextureCache=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
