/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../tasks/support/FeatureSet","../../tasks/support/RelationshipQuery","../utils","./operations/queryRelatedRecords"],(function(e,t,r,o,n){"use strict";async function s(e,s,u){s=r.from(s);const a=o.parseUrl(e);return n.executeRelationshipQuery(a,s,u).then((e=>{const r=e.data,o={};return Object.keys(r).forEach((e=>o[e]=t.fromJSON(r[e]))),o}))}async function u(e,t,s){t=r.from(t);const u=o.parseUrl(e);return n.executeRelationshipQueryForCount(u,t,{...s}).then((e=>e.data))}e.executeRelationshipQuery=s,e.executeRelationshipQueryForCount=u,Object.defineProperty(e,"__esModule",{value:!0})}));
