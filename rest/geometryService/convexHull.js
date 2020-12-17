/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","./utils"],(function(e,t,s,r,n){"use strict";e.convexHull=async function(e,o,i){const l=o[0].spatialReference,u=r.parseUrl(e),a={...u.query,f:"json",sr:JSON.stringify(l.toJSON()),geometries:JSON.stringify(n.encodeGeometries(o))},c=r.asValidOptions(a,i);return s(u.path+"/convexHull",c).then((({data:e})=>t.fromJSON(e.geometry).set({spatialReference:l})))},Object.defineProperty(e,"__esModule",{value:!0})}));
