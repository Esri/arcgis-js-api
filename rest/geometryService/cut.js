/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,n,s,i){"use strict";function o(e,t,r,n){return u.apply(this,arguments)}function u(){return u=t._asyncToGenerator((function*(e,t,r,o){const u=i.parseUrl(e),a=t[0].spatialReference,c={...o,query:{...u.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(r)}},p=yield n(u.path+"/cut",c),{cutIndexes:l,geometries:y=[]}=p.data;return{cutIndexes:l,geometries:y.map((e=>{const t=s.fromJSON(e);return t.spatialReference=a,t}))}})),u.apply(this,arguments)}e.cut=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
