/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../request.js";import{parseUrl as r,asValidOptions as s}from"../utils.js";import{conversionTypeKebabDict as n}from"./units.js";async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=n.toJSON(f),c.conversionMode=i.conversionMode;const m=r(t),p={...m.query,f:"json",...c},u=s(p,e);return o(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}export{t as fromGeoCoordinateString};
