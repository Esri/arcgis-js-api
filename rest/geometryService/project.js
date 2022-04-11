/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../utils","./utils","../support/ProjectParameters"],(function(e,t,r,o,s,n,u,p){"use strict";const i=o.ensureType(p);function a(e,t,r){return c.apply(this,arguments)}function c(){return(c=t._asyncToGenerator((function*(e,t,o){t=i(t);const p=n.parseUrl(e),a={...p.query,f:"json",...t.toJSON()},c=t.outSpatialReference,l=s.getJsonType(t.geometries[0]),y=n.asValidOptions(a,o);return r(p.path+"/project",y).then((({data:{geometries:e}})=>u.decodeGeometries(e,l,c)))}))).apply(this,arguments)}e.project=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
