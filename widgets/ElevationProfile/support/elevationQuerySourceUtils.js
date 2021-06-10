/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/arrayUtils","../../../Ground","../../../core/unitUtils"],(function(e,n,t,r,i){"use strict";function o(e){if(n.isNone(e))return null;if(e instanceof r)return u(e);const o=e.tileInfo;if(n.isNone(o))return null;const l=t.last(o.lods);return n.isNone(l)?null:l.resolution*i.getMetersPerUnitForSR(o.spatialReference)}function u(e){var r;if(n.isNone(e))return null;const i=e.layers.items.map(l).filter(n.isSome);return null!=(r=t.min(i))?r:null}function l(e){return"tileInfo"in e?o(e):null}e.getGroundMinDemResolution=u,e.getQuerySourceMinDemResolution=o,Object.defineProperty(e,"__esModule",{value:!0})}));
