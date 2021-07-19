/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],(function(n,e,o,r,s){"use strict";function t(n,e,o){return i.apply(this,arguments)}function i(){return(i=e._asyncToGenerator((function*(n,e,t){const i={};null!=e.sr&&"object"==typeof e.sr?i.sr=e.sr.wkid||JSON.stringify(e.sr):i.sr=e.sr,i.coordinates=JSON.stringify(e.coordinates);const c=e.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(c),i.conversionMode=e.conversionMode,i.numOfDigits=e.numOfDigits,i.rounding=e.rounding,i.addSpaces=e.addSpaces;const u=r.parseUrl(n),a={...u.query,f:"json",...i},d=r.asValidOptions(a,t);return o(u.path+"/toGeoCoordinateString",d).then((({data:n})=>n.strings))}))).apply(this,arguments)}n.toGeoCoordinateString=t,Object.defineProperty(n,"__esModule",{value:!0})}));
