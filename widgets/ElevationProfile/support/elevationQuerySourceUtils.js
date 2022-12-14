/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../Ground","../../../core/arrayUtils","../../../core/maybe","../../../core/unitUtils"],(function(e,n,t,i,o){"use strict";function r(e){if(i.isNone(e))return null;if(e instanceof n)return u(e);const r=e.tileInfo;if(i.isNone(r))return null;const l=t.last(r.lods);return i.isNone(l)?null:l.resolution*o.getMetersPerUnitForSR(r.spatialReference)}function u(e){if(i.isNone(e))return null;const n=e.layers.items.map(l).filter(i.isSome);return t.min(n)??null}function l(e){return"tileInfo"in e?r(e):null}e.getGroundMinDemResolution=u,e.getQuerySourceMinDemResolution=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
