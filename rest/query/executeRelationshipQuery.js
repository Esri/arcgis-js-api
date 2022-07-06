/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as t}from"../utils.js";import{executeRelationshipQuery as r,executeRelationshipQueryForCount as e}from"./operations/queryRelatedRecords.js";import o from"../support/FeatureSet.js";import s from"../support/RelationshipQuery.js";async function n(e,n,u){n=s.from(n);const a=t(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=o.fromJSON(r[t]))),e}))}async function u(r,o,n){o=s.from(o);const u=t(r);return e(u,o,{...n}).then((t=>t.data))}export{n as executeRelationshipQuery,u as executeRelationshipQueryForCount};
