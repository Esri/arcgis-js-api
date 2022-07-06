/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../request.js";import{parseUrl as r,encode as t,asValidOptions as e}from"../utils.js";import s from"../support/AddressCandidate.js";import n from"../support/AddressesToLocationsParameters.js";async function a(s,a,c){a=n.from(a);const p=r(s),f={...a.toJSON(),f:"json"},m=t({...p.query,...f}),u=e(m,c),d=`${p.path}/geocodeAddresses`;return o(d,u).then(i)}function i(o){const{data:r}=o;if(!r)return[];const{locations:t,spatialReference:e}=r;return t?t.map((o=>{const{location:r}=o;return r&&(r.spatialReference=e),s.fromJSON(o)})):[]}export{a as addressesToLocations};
