/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","../core/unitUtils","../portal/Portal"],(function(e,t,r,n){"use strict";function i(e){const i="metric";if(t.isNone(e))return i;const a=e.map,o=(a&&"portalItem"in a?a.portalItem?.portal:null)??n.getDefault();switch(o.user?.units??o.units){case i:return i;case"english":return"imperial"}return t.unwrapOr(r.getDefaultUnitSystem(e.spatialReference),i)}e.getDefaultUnitForView=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
