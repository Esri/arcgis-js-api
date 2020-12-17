/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/arrayUtils","../../../core/unitUtils"],(function(e,n,t,o){"use strict";function r(e){const r=n.applySome(e,(e=>e.tileInfo));if(n.isNone(r))return null;const i=t.last(r.lods);return n.isNone(i)?null:i.resolution*o.getMetersPerUnitForSR(r.spatialReference)}function i(e){return"tileInfo"in e?r(e):null}e.getGroundMinDemResolution=function(e){var o;if(n.isNone(e))return null;const r=e.layers.items.map(i).filter(n.isSome);return null!=(o=t.min(r))?o:null},e.getQuerySourceMinDemResolution=r,Object.defineProperty(e,"__esModule",{value:!0})}));
