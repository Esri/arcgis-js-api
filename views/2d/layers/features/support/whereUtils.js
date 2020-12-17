/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../core/Logger","../../../../../core/Error"],(function(e,r,t,n){"use strict";const a=t.getLogger("esri.views.2d.layers.features.support.whereUtils"),s={getAttribute:(e,r)=>e.field(r)};r.createWhereClause=async function(r,t){const i=await new Promise((function(r,t){e(["../../../../../core/sql/WhereClause"],r,t)}));try{const e=i.WhereClause.create(r,t);if(!e.isStandardized){const r=new n("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",e);a.error(r)}return r=>{const t=r.readArcadeFeature();return e.testFeature(t,s)}}catch(e){return a.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}},Object.defineProperty(r,"__esModule",{value:!0})}));
