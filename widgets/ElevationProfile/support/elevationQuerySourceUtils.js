/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../Ground","../../../core/arrayUtils","../../../core/maybe","../../../core/unitUtils"],(function(e,n,t,r,i){"use strict";function o(e){if(r.isNone(e))return null;if(e instanceof n)return l(e);const o=e.tileInfo;if(r.isNone(o))return null;const u=t.last(o.lods);return r.isNone(u)?null:u.resolution*i.getMetersPerUnitForSR(o.spatialReference)}function l(e){var n;if(r.isNone(e))return null;const i=e.layers.items.map(u).filter(r.isSome);return null!=(n=t.min(i))?n:null}function u(e){return"tileInfo"in e?o(e):null}e.getGroundMinDemResolution=l,e.getQuerySourceMinDemResolution=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
