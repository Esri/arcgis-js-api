/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as o,encode as r,asValidOptions as s}from"../utils.js";import n from"../support/SuggestionCandidate.js";import e from"../support/SuggestLocationsParameters.js";async function u(n,u,m){const p=o(n),a={...(u=e.from(u)).toJSON(),f:"json"},f=r({...p.query,...a}),g=s(f,m),c=`${p.path}/suggest`;return t(c,g).then(i)}function i(t){const{data:o}=t;if(!o)return[];const{suggestions:r}=o;return r?r.map((t=>new n(t))):[]}export{u as suggestLocations};
