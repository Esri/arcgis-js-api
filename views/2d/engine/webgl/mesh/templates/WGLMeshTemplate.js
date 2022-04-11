/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../../../core/maybe","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t){"use strict";return function(){function f(){}var n=f.prototype;return n.bindFeature=function(e,t,f){},n.write=function(f,n,r,i){var c;if(e.isNone(this._effects)||0===(null==(c=this._effects)?void 0:c.length))return this._write(f,n,i);const o=t.CIMEffectHelper.executeEffects(this._effects,n.readLegacyGeometryForDisplay(),i.geometryEngine);let s=t.CIMEffectHelper.next(o);for(;s;)this._write(f,n,i,s),s=t.CIMEffectHelper.next(o)},n._write=function(e,t,f,n){},f}()}));
