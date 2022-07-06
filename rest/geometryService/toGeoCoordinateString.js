/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../request.js";import{parseUrl as s,asValidOptions as n}from"../utils.js";import{conversionTypeKebabDict as r}from"./units.js";async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=r.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=s(t),u={...a.query,f:"json",...c},f=n(u,e);return o(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}export{t as toGeoCoordinateString};
