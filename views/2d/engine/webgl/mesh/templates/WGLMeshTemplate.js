/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){}var n=f.prototype;return n.bindFeature=function(e,t,f){},n.write=function(f,n,r,i){if(e.isNone(this._effects)||0===this._effects?.length)return this._write(f,n,i);const c=t.CIMEffectHelper.executeEffects(this._effects,n.readLegacyGeometryForDisplay(),i.geometryEngine);let s=t.CIMEffectHelper.next(c);for(;s;)this._write(f,n,i,s),s=t.CIMEffectHelper.next(c)},n._write=function(e,t,f,n){},f}()}));
