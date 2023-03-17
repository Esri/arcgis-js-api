/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function l(o){const l=o.layer;if("floorInfo"in l&&l.floorInfo?.floorField&&"floors"in o.view){return n(o.view.floors,l.floorInfo.floorField)}return null}function r(o,l){return"floorInfo"in l&&l.floorInfo?.floorField?n(o,l.floorInfo.floorField):null}function n(o,l){if(!o?.length)return null;const r=o.filter((o=>""!==o)).map((o=>`'${o}'`));return r.push("''"),`${l} IN (${r.join(",")}) OR ${l} IS NULL`}o.getFloorFilterClause=l,o.getLayerFloorFilterClause=r,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
