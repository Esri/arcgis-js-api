/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/jsonUtils","../../request","../utils"],(function(e,t,r,s){"use strict";e.reshape=async function(e,n,o,i){const a=n.spatialReference,p=s.parseUrl(e),y={...p.query,f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:t.getJsonType(n),geometry:n.toJSON()}),reshaper:JSON.stringify(o.toJSON())},f=s.asValidOptions(y,i);return r(p.path+"/reshape",f).then((({data:e})=>t.fromJSON(e.geometry).set({spatialReference:a})))},Object.defineProperty(e,"__esModule",{value:!0})}));
