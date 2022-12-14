/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../CIMCursor","../CIMOperators"],(function(e,t,n){"use strict";let r=function(){function e(){}return e.getPlacement=function(e,r,o,u){const c=n.getPlacementOperator(r);if(!c)return null;const l=t.cloneAndDecodeGeometry(e);return c.execute(l,r,o,u)},e}();e.CIMMarkerPlacementHelper=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
