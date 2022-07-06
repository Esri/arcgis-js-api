/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../../core/Error.js";import r from"../../../../../core/Logger.js";const t=r.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import("../../../../../core/sql/WhereClause.js");try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new e("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r)}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}export{s as createWhereClause};
