/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],(function(n,r,o,e,t){"use strict";function s(n,r,o){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(n,r,s){const i={};null!=r.sr&&"object"==typeof r.sr?i.sr=r.sr.wkid||JSON.stringify(r.sr):i.sr=r.sr,i.strings=JSON.stringify(r.strings);const c=r.conversionType||"mgrs";i.conversionType=t.conversionTypeKebabDict.toJSON(c),i.conversionMode=r.conversionMode;const u=e.parseUrl(n),a={...u.query,f:"json",...i},l=e.asValidOptions(a,s);return o(u.path+"/fromGeoCoordinateString",l).then((({data:n})=>n.coordinates))}))).apply(this,arguments)}n.fromGeoCoordinateString=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
