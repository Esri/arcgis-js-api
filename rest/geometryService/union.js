/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils","./utils"],(function(e,t,n,r,s,i){"use strict";function o(e,t,n){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,o){const u=t[0].spatialReference,l=s.parseUrl(e),a={...l.query,f:"json",sr:JSON.stringify(u.toJSON()),geometries:JSON.stringify(i.encodeGeometries(t))},p=s.asValidOptions(a,o);return n(l.path+"/union",p).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:u})))}))).apply(this,arguments)}e.union=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
