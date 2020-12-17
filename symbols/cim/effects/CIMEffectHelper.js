/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../CIMCursor","../CIMEffects","../CIMOperators"],(function(e,t,n,o){"use strict";let r=function(){function e(){}return e.executeEffects=function(e,r){const c=t.cloneAndDecodeGeometry(r);let f=new n.SimpleGeometryCursor(c);for(const t of e){const e=o.getEffectOperator(t);e&&(f=e.execute(f,t,1.3333333333333333))}return f},e.next=function(e){const n=e.next();return t.deltaEncodeGeometry(n),n},e}();e.CIMEffectHelper=r,Object.defineProperty(e,"__esModule",{value:!0})}));
