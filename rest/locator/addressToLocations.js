/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{parseUrl as t,encode as e,asValidOptions as s}from"../utils.js";import{isValidExtent as o,isValidLocation as n}from"./utils.js";import a from"../support/AddressCandidate.js";import i from"../support/AddressToLocationsParameters.js";async function d(o,n,a){n=i.from(n);const d=t(o),{address:p,...m}=n.toJSON(),u={...p,...m,f:"json"},c=e({...d.query,...u}),j=s(c,a),l=`${d.path}/findAddressCandidates`;return r(l,j).then(f)}function f({data:r}){if(!r)return[];const{candidates:t,spatialReference:e}=r;return t?t.map((r=>{if(!r)return;const{extent:t,location:s}=r,i=!t||o(t);return n(s)&&i?(t&&(t.spatialReference=e),s.spatialReference=e,a.fromJSON(r)):void 0})):[]}export{d as addressToLocations};
