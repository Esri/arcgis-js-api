/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function e(o){const e=o.layer;if("floorInfo"in e&&e.floorInfo){const n=o.view.floors;if(!n||!n.length)return null;const r=n.filter((o=>""!==o)).map((o=>`'${o}'`));r.push("''");const l=e.floorInfo.floorField;return`${l} IN (${r.join(", ")}) OR ${l} IS NULL`}return null}o.getFloorFilterClause=e,Object.defineProperty(o,"__esModule",{value:!0})}));
