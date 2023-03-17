/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../CIMCursor","../CIMOperators"],(function(e,t,n){"use strict";let r=function(){function e(){}return e.getPlacement=function(e,r,o,c,u){const l=n.getPlacementOperator(r);if(!l)return null;const i=t.cloneAndDecodeGeometry(e);return l.execute(i,r,o,c,u)},e}();e.CIMMarkerPlacementHelper=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
