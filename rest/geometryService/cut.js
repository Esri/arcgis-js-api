/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,n,s,i){"use strict";function o(e,t,r,n){return u.apply(this,arguments)}function u(){return u=t._asyncToGenerator((function*(e,t,r,o){const u=i.parseUrl(e),a=t[0].spatialReference,l={...o,query:{...u.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(r)}},c=yield n(u.path+"/cut",l),{cutIndexes:p,geometries:y=[]}=c.data;return{cutIndexes:p,geometries:y.map((e=>{const t=s.fromJSON(e);return t.spatialReference=a,t}))}})),u.apply(this,arguments)}e.cut=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
