/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../../request","../../tasks/support/ProjectParameters","../utils","./utils"],(function(e,t,s,r,o,n,p){"use strict";const u=t.ensureType(o);e.project=async function(e,t,o){t=u(t);const c=n.parseUrl(e),a={...c.query,f:"json",...t.toJSON()},i=t.outSpatialReference,l=s.getJsonType(t.geometries[0]),d=n.asValidOptions(a,o);return r(c.path+"/project",d).then((({data:{geometries:e}})=>p.decodeGeometries(e,l,i)))},Object.defineProperty(e,"__esModule",{value:!0})}));
