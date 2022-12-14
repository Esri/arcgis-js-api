/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{isSome as s}from"../../core/maybe.js";import{getSumOfAttributesExpr as r,verifyBasicFieldValidity as t}from"./support/utils.js";import{getFieldsList as i}from"../support/utils.js";import{LayerType as a,createLayerAdapter as o,getLayerTypeLabels as n}from"../support/adapters/support/layerUtils.js";async function u(r){if(!(r&&r.layer&&r.attributes))throw new e("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(r.attributes.some((e=>!!e.valueExpression))&&!r.view)throw new e("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");const u=[a.CSVLayer,a.FeatureLayer,a.OGCFeatureLayer,a.GeoJSONLayer,a.WFSLayer],{layer:l,...p}=r,m=o(l,u),c={layerAdapter:m,...p};if(c.includeZeros=null==c.includeZeros||c.includeZeros,c.includeNegatives=null==c.includeNegatives||c.includeNegatives,!m)throw new e("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+n(u).join(", "));const y=c.view,f=s(c.signal)?{signal:c.signal}:null;await Promise.all([y&&y.when(),m.load(f)]);const d=[];for(const e of c.attributes){const s=await i({field:e.field,valueExpression:e.valueExpression});Array.prototype.push.apply(d,s)}const w=t(m,d,"summary-statistics-for-attributes:invalid-parameters");if(w)throw w;return c}async function l(e){const{layerAdapter:s,...t}=await u(e),i=r(t.attributes,t.includeZeros,t.includeNegatives);return s.summaryStatistics({valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,view:t.view,signal:t.signal})}export{l as default};