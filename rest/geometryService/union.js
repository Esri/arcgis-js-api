/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils","./utils"],(function(e,t,s,n,r){"use strict";e.union=async function(e,i,o){const u=i[0].spatialReference,a=n.parseUrl(e),f={...a.query,f:"json",sr:JSON.stringify(u.toJSON()),geometries:JSON.stringify(r.encodeGeometries(i))},c=n.asValidOptions(f,o);return s(a.path+"/union",c).then((({data:e})=>t.fromJSON(e.geometry).set({spatialReference:u})))},Object.defineProperty(e,"__esModule",{value:!0})}));
