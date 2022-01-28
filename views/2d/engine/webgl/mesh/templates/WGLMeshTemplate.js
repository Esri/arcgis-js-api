/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){}var r=f.prototype;return r.bindFeature=function(e,t,f){},r.write=function(f,r,i){var n;if(e.isNone(this._effects)||0===(null==(n=this._effects)?void 0:n.length))return this._write(f,r);const c=t.CIMEffectHelper.executeEffects(this._effects,r.readLegacyGeometryForDisplay());let s=t.CIMEffectHelper.next(c);for(;s;)this._write(f,r,s),s=t.CIMEffectHelper.next(c)},r._write=function(e,t,f){},f}()}));
