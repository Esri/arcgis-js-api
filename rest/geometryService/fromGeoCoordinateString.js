/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./units"],(function(e,n,o,s){"use strict";e.fromGeoCoordinateString=async function(e,r,t){const i={};null!=r.sr&&"object"==typeof r.sr?i.sr=r.sr.wkid||JSON.stringify(r.sr):i.sr=r.sr,i.strings=JSON.stringify(r.strings);const c=r.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(c),i.conversionMode=r.conversionMode;const a=o.parseUrl(e),d={...a.query,f:"json",...i},u=o.asValidOptions(d,t);return n(a.path+"/fromGeoCoordinateString",u).then((({data:e})=>e.coordinates))},Object.defineProperty(e,"__esModule",{value:!0})}));
