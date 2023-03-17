/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","./utils"],(function(e,t,r,i,s,n){"use strict";function o(e,t,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t,o){const u="string"==typeof e?i.urlToObject(e):e,l=t[0].spatialReference,p=s.getJsonType(t[0]),y={...o,query:{...u.query,f:"json",sr:l.wkid?l.wkid:JSON.stringify(l),geometries:JSON.stringify(n.encodeGeometries(t))}},{data:c}=yield r(u.path+"/simplify",y);return n.decodeGeometries(c.geometries,p,l)}))).apply(this,arguments)}e.simplify=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
