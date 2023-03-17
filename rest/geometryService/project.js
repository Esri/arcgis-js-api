/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../utils","./utils","../support/ProjectParameters"],(function(e,t,r,o,s,n,p,u){"use strict";const i=o.ensureType(u);function a(e,t,r){return c.apply(this,arguments)}function c(){return(c=t._asyncToGenerator((function*(e,t,o){t=i(t);const u=n.parseUrl(e),a={...u.query,f:"json",...t.toJSON()},c=t.outSpatialReference,l=s.getJsonType(t.geometries[0]),y=n.asValidOptions(a,o);return r(u.path+"/project",y).then((({data:{geometries:e}})=>p.decodeGeometries(e,l,c)))}))).apply(this,arguments)}e.project=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
