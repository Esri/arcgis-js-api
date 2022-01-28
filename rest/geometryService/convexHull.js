/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,n,r,s,o){"use strict";function i(e,t,n){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e,t,i){const l=t[0].spatialReference,u=s.parseUrl(e),a={...u.query,f:"json",sr:JSON.stringify(l.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t))},p=s.asValidOptions(a,i);return n(u.path+"/convexHull",p).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:l})))}))).apply(this,arguments)}e.convexHull=i,Object.defineProperty(e,"__esModule",{value:!0})}));
