/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,s,n){"use strict";function o(e,t,r,s){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(e,t,o,i){const a=t.spatialReference,p=n.parseUrl(e),u={...p.query,f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:s.getJsonType(t),geometry:t.toJSON()}),reshaper:JSON.stringify(o.toJSON())},l=n.asValidOptions(u,i);return r(p.path+"/reshape",l).then((({data:e})=>s.fromJSON(e.geometry).set({spatialReference:a})))}))).apply(this,arguments)}e.reshape=o,Object.defineProperty(e,"__esModule",{value:!0})}));
