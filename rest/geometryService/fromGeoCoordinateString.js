/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./units"],(function(e,n,o,r,s){"use strict";function t(e,n,o){return i.apply(this,arguments)}function i(){return(i=n._asyncToGenerator((function*(e,n,t){const i={};null!=n.sr&&"object"==typeof n.sr?i.sr=n.sr.wkid||JSON.stringify(n.sr):i.sr=n.sr,i.strings=JSON.stringify(n.strings);const u=n.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(u),i.conversionMode=n.conversionMode;const c=r.parseUrl(e),a={...c.query,f:"json",...i},l=r.asValidOptions(a,t);return o(c.path+"/fromGeoCoordinateString",l).then((({data:e})=>e.coordinates))}))).apply(this,arguments)}e.fromGeoCoordinateString=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
