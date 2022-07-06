/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../request.js";import{parseUrl as o,encode as t,asValidOptions as s}from"../utils.js";import e from"../support/AddressCandidate.js";import a from"../support/LocationToAddressParameters.js";async function n(e,n,i){n=a.from(n);const c=o(e),m={...n.toJSON(),f:"json"},u=t({...c.query,...m}),f=s(u,i),p=`${c.path}/reverseGeocode`;return r(p,f).then(d)}function d({data:r}){if(!r)return;const{address:o,location:t}=r,s=o&&o.Match_addr||"";return e.fromJSON({address:s,attributes:o||{},location:t,score:100})}export{n as locationToAddress};
