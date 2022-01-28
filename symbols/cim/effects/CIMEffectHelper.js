/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/support/jsonUtils","../CIMCursor","../CIMEffects","../CIMOperators"],(function(e,t,o,n,r){"use strict";const s=96/72;let c=function(){function e(){}return e.executeEffects=function(e,t){const c=o.cloneAndDecodeGeometry(t),f=s;let u=new n.SimpleGeometryCursor(c);for(const o of e){const e=r.getEffectOperator(o);e&&(u=e.execute(u,o,f,!0))}return u},e.next=function(e){const t=e.next();return o.deltaEncodeGeometry(t),t},e.applyEffects=function(e,o){if(!e)return o;let s=new n.SimpleGeometryCursor(o);for(const t of e){const e=r.getEffectOperator(t);e&&(s=e.execute(s,t,1,!1))}let c,f=null;for(;c=s.next();)f?t.isPolyline(f)?t.isPolyline(c)&&f.paths.push(...c.paths):t.isPolygon(f)&&t.isPolygon(c)&&f.rings.push(...c.rings):f=c;return f},e}();e.CIMEffectHelper=c,Object.defineProperty(e,"__esModule",{value:!0})}));
