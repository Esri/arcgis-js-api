/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,n,s,i){"use strict";function u(e,t,r,n){return o.apply(this,arguments)}function o(){return(o=t._asyncToGenerator((function*(e,t,r,u){const o=i.parseUrl(e),c=t[0].spatialReference,p={...u,query:{...o.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(r)}},a=yield n(o.path+"/cut",p),{cutIndexes:l,geometries:y=[]}=a.data;return{cutIndexes:l,geometries:y.map((e=>{const t=s.fromJSON(e);return t.spatialReference=c,t}))}}))).apply(this,arguments)}e.cut=u,Object.defineProperty(e,"__esModule",{value:!0})}));
