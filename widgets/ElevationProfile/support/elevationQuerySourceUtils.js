/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../Ground","../../../core/arrayUtils","../../../core/maybe","../../../core/unitUtils"],(function(e,n,t,r,i){"use strict";function o(e){if(r.isNone(e))return null;if(e instanceof n)return u(e);const o=e.tileInfo;if(r.isNone(o))return null;const l=t.last(o.lods);return r.isNone(l)?null:l.resolution*i.getMetersPerUnitForSR(o.spatialReference)}function u(e){var n;if(r.isNone(e))return null;const i=e.layers.items.map(l).filter(r.isSome);return null!=(n=t.min(i))?n:null}function l(e){return"tileInfo"in e?o(e):null}e.getGroundMinDemResolution=u,e.getQuerySourceMinDemResolution=o,Object.defineProperty(e,"__esModule",{value:!0})}));
