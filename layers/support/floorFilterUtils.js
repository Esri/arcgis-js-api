/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function l(o){const l=o.layer;if("floorInfo"in l&&l.floorInfo?.floorField&&"floors"in o.view){return r(o.view.floors,l.floorInfo.floorField)}return null}function e(o,l){return"floorInfo"in l&&l.floorInfo?.floorField?r(o,l.floorInfo.floorField):null}function r(o,l){if(!o?.length)return null;const e=o.filter((o=>""!==o)).map((o=>`'${o}'`));return e.push("''"),`${l} IN (${e.join(",")}) OR ${l} IS NULL`}o.getFloorFilterClause=l,o.getLayerFloorFilterClause=e,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
