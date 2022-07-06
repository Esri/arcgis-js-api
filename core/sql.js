/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"./maybe.js";async function r(e,r){const{WhereClause:t}=await import("./sql/WhereClause.js");return t.create(e,r)}function t(r,t){return e(r)?e(t)?`(${r}) AND (${t})`:r:t}export{r as parseWhereClause,t as sqlAnd};
