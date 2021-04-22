/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./units"],(function(e,n,o,s){"use strict";async function r(e,r,t){const i={};null!=r.sr&&"object"==typeof r.sr?i.sr=r.sr.wkid||JSON.stringify(r.sr):i.sr=r.sr,i.strings=JSON.stringify(r.strings);const c=r.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(c),i.conversionMode=r.conversionMode;const a=o.parseUrl(e),d={...a.query,f:"json",...i},u=o.asValidOptions(d,t);return n(a.path+"/fromGeoCoordinateString",u).then((({data:e})=>e.coordinates))}e.fromGeoCoordinateString=r,Object.defineProperty(e,"__esModule",{value:!0})}));
