/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){}var r=f.prototype;return r.bindFeature=function(e,t,f){},r.write=function(f,r){if(e.isNone(this._effects))return this._write(f,r);const n=t.CIMEffectHelper.executeEffects(this._effects,r.readLegacyGeometry());let c=t.CIMEffectHelper.next(n);for(;c;)this._write(f,r,c),c=t.CIMEffectHelper.next(n)},r._write=function(e,t,f){},f}()}));
