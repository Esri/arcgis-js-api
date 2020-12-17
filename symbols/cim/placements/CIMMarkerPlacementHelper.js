/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../CIMCursor","../CIMOperators"],(function(e,t,n){"use strict";let r=function(){function e(){}return e.getPlacement=function(e,r,o){const c=n.getPlacementOperator(r);if(!c)return null;const u=t.cloneAndDecodeGeometry(e);return c.execute(u,r,o)},e}();e.CIMMarkerPlacementHelper=r,Object.defineProperty(e,"__esModule",{value:!0})}));
