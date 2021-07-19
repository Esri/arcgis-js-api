/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../CIMCursor","../CIMEffects","../CIMOperators"],(function(e,t,n,o){"use strict";const r=96/72;let c=function(){function e(){}return e.executeEffects=function(e,c){const f=t.cloneAndDecodeGeometry(c),u=r;let s=new n.SimpleGeometryCursor(f);for(const t of e){const e=o.getEffectOperator(t);e&&(s=e.execute(s,t,u))}return s},e.next=function(e){const n=e.next();return t.deltaEncodeGeometry(n),n},e}();e.CIMEffectHelper=c,Object.defineProperty(e,"__esModule",{value:!0})}));
