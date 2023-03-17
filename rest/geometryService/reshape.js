/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,n,s){"use strict";function o(e,t,r,n){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,o,i){const a=t.spatialReference,p=s.parseUrl(e),u={...p.query,f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:n.getJsonType(t),geometry:t.toJSON()}),reshaper:JSON.stringify(o.toJSON())},l=s.asValidOptions(u,i);return r(p.path+"/reshape",l).then((({data:e})=>n.fromJSON(e.geometry).set({spatialReference:a})))}))).apply(this,arguments)}e.reshape=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
