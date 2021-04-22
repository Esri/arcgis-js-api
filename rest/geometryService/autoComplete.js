/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Polygon","../../geometry","../../request","../utils","./utils"],(function(e,t,s,o,i,n){"use strict";async function r(e,s,r,a){const l=s[0].spatialReference,g=i.parseUrl(e),p={...g.query,f:"json",sr:JSON.stringify(l.toJSON()),polygons:JSON.stringify(n.encodeGeometries(s).geometries),polylines:JSON.stringify(n.encodeGeometries(r).geometries)},u=i.asValidOptions(p,a);return o(g.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new t({spatialReference:l,rings:e})))))}e.autoComplete=r,Object.defineProperty(e,"__esModule",{value:!0})}));
