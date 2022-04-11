/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","./utils"],(function(e,t,i,r,s,o){"use strict";function n(e,t,i){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,n){const u="string"==typeof e?r.urlToObject(e):e,l=t[0].spatialReference,p=s.getJsonType(t[0]),c={...n,query:{...u.query,f:"json",sr:l.wkid?l.wkid:JSON.stringify(l),geometries:JSON.stringify(o.encodeGeometries(t))}},{data:y}=yield i(u.path+"/simplify",c);return o.decodeGeometries(y.geometries,p,l)}))).apply(this,arguments)}e.simplify=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
