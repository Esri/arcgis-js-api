/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],(function(n,o,e,t,r){"use strict";function s(n,o,e){return i.apply(this,arguments)}function i(){return(i=o._asyncToGenerator((function*(n,o,s){const i={};null!=o.sr&&"object"==typeof o.sr?i.sr=o.sr.wkid||JSON.stringify(o.sr):i.sr=o.sr,i.coordinates=JSON.stringify(o.coordinates);const a=o.conversionType||"mgrs";i.conversionType=r.conversionTypeKebabDict.toJSON(a),i.conversionMode=o.conversionMode,i.numOfDigits=o.numOfDigits,i.rounding=o.rounding,i.addSpaces=o.addSpaces;const c=t.parseUrl(n),u={...c.query,f:"json",...i},d=t.asValidOptions(u,s);return e(c.path+"/toGeoCoordinateString",d).then((({data:n})=>n.strings))}))).apply(this,arguments)}n.toGeoCoordinateString=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
