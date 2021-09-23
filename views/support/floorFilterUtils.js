/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function n(o){var n;const l=o.layer;if("floorInfo"in l&&null!=(n=l.floorInfo)&&n.floorField&&"floors"in o.view){return e(o.view.floors,l.floorInfo.floorField)}return null}function l(o,n){var l;return"floorInfo"in n&&null!=(l=n.floorInfo)&&l.floorField?e(o,n.floorInfo.floorField):null}function r(o,n){const{definitionExpression:l}=n;return o?l?`(${l}) AND (${o})`:o:l}function e(o,n){if(null==o||!o.length)return null;const l=o.filter((o=>""!==o)).map((o=>`'${o}'`));return l.push("''"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}o.combineFloorsDefinitionExpression=r,o.getFloorFilterClause=n,o.getLayerFloorFilterClause=l,Object.defineProperty(o,"__esModule",{value:!0})}));
