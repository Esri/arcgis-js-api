/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){}var r=f.prototype;return r.bindFeature=function(e,t,f){},r.write=function(f,r,n){if(e.isNone(this._effects))return this._write(f,r);const c=t.CIMEffectHelper.executeEffects(this._effects,r.readLegacyGeometry());let i=t.CIMEffectHelper.next(c);for(;i;)this._write(f,r,i),i=t.CIMEffectHelper.next(c)},r._write=function(e,t,f){},f}()}));
