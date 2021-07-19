/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],(function(n,e,r,o,s){"use strict";function t(n,e,r){return i.apply(this,arguments)}function i(){return(i=e._asyncToGenerator((function*(n,e,t){const i={};null!=e.sr&&"object"==typeof e.sr?i.sr=e.sr.wkid||JSON.stringify(e.sr):i.sr=e.sr,i.strings=JSON.stringify(e.strings);const c=e.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(c),i.conversionMode=e.conversionMode;const u=o.parseUrl(n),a={...u.query,f:"json",...i},p=o.asValidOptions(a,t);return r(u.path+"/fromGeoCoordinateString",p).then((({data:n})=>n.coordinates))}))).apply(this,arguments)}n.fromGeoCoordinateString=t,Object.defineProperty(n,"__esModule",{value:!0})}));
