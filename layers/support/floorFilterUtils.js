/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o(o){const n=o.layer;if("floorInfo"in n&&n.floorInfo?.floorField&&"floors"in o.view){return l(o.view.floors,n.floorInfo.floorField)}return null}function n(o,n){return"floorInfo"in n&&n.floorInfo?.floorField?l(o,n.floorInfo.floorField):null}function l(o,n){if(!o?.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}export{o as getFloorFilterClause,n as getLayerFloorFilterClause};
