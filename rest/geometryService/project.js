/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../utils","./utils","../support/ProjectParameters"],(function(e,t,r,o,s,n,p,u){"use strict";const i=o.ensureType(u);function c(e,t,r){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(e,t,o){t=i(t);const u=n.parseUrl(e),c={...u.query,f:"json",...t.toJSON()},a=t.outSpatialReference,l=s.getJsonType(t.geometries[0]),y=n.asValidOptions(c,o);return r(u.path+"/project",y).then((({data:{geometries:e}})=>p.decodeGeometries(e,l,a)))}))).apply(this,arguments)}e.project=c,Object.defineProperty(e,"__esModule",{value:!0})}));
