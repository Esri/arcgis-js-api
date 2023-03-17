/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){this._materialKey=null}var i=f.prototype;return i.bindFeature=function(e,t,f){},i.write=function(f,i,n,r){if(e.isNone(this._effects)||0===this._effects?.length)return this._write(f,i,r);const c=t.CIMEffectHelper.executeEffects(this._effects,i.readLegacyGeometryForDisplay(),f.tileKey,r.geometryEngine);let s=t.CIMEffectHelper.next(c);for(;s;)this._write(f,i,r,s),s=t.CIMEffectHelper.next(c)},i._write=function(e,t,f,i){},f}()}));
