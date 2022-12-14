/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{pickRandom as t}from"../../../core/arrayUtils.js";import r from"../../../core/Error.js";import{unwrap as s}from"../../../core/maybe.js";import{whenOnce as a}from"../../../core/reactiveUtils.js";import"../../../core/Logger.js";import"../../../core/accessorSupport/ensureType.js";import"../../../core/has.js";import"../../../core/accessorSupport/set.js";import{subclass as i}from"../../../core/accessorSupport/decorators/subclass.js";import{isDateField as o}from"../../../layers/support/fieldUtils.js";import{getArcadeForPredominantCategory as n}from"../../statistics/support/predominanceUtils.js";import{mergeWhereClauses as u}from"../../statistics/support/utils.js";import{WorkerClient as p}from"../../statistics/support/WorkerClient.js";import l from"./FeatureLayerAdapter.js";import{getSummaryStatisticsFromFeatureSet as c,getUniqueValuesFromFeatureSet as d,getPredominantCategoriesFromUVInfos as m,getMissingFields as y}from"./support/utils.js";import{processSummaryStatisticsResult as f,createUVResult as h}from"../../../statistics/utils.js";let w=class extends l{constructor(e){super(e)}async _waitForLayerViewUpdate(e){if(!e)throw new r("ogc-feature-layer-adapter:insufficient-data","layerView is required to fetch the features");await a((()=>!e.updating))}async _summaryStatsFromClientQuery(e,t){const{signal:i,view:o}=e;if(!o)throw new r("ogc-feature-layer-adapter:insufficient-data","view is required to fetch the features from layerView");const n=this._getSummaryStatsQuery(e,t),u=await o.whenLayerView(this.layer);await a((()=>!u.updating),s(i));const p=await u.queryFeatures(n,{signal:i}),l=c(p,t);return f(l)}async _uvFromClientQuery(e,t){const{signal:i,view:o}=e;if(!o)throw new r("ogc-feature-layer-adapter:insufficient-data","view is required to fetch the features from layerView");const n=this._getUVQuery(e),u=await o.whenLayerView(this.layer);await a((()=>!u.updating),s(i));const p=await u.queryFeatures(n,{signal:i}),l=await d(p,this,e.field,e.view,null,i);return h(l,t,e.returnAllCodedValues)}summaryStatistics(e){const{field:t,valueExpression:s,sqlExpression:a,features:i,view:n}=e,u=t?this.getField(t):null,p=o(u),l=!!s,c="3d"===n?.type;if(!s&&a&&!this.supportsSQLExpression)throw new r("ogc-feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries");return l||i||c?this._summaryStatsFromMemory(e,u):this._summaryStatsFromClientQuery(e,p)}uniqueValues(e){const{field:t,valueExpression:s,sqlExpression:a,features:i,view:o}=e,n=(t?this.getField(t):null)&&this.getFieldDomain(t),u=!!s,p="3d"===o?.type;if(!s&&a&&!this.supportsSQLExpression)throw new r("ogc-feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries");return u||i||p?this._uvFromMemory(e,n):this._uvFromClientQuery(e,n)}histogram(e){const{features:t,valueExpression:s,normalizationType:a,sqlExpression:i}=e,o=t||!!s;if(!s&&i&&!this.supportsSQLExpression)throw new r("ogc-feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries");return o||a?this._histogramFromMemory(e):this._histogramForField(e)}classBreaks(e){return!1!==e.analyzeData?this._classBreaksFromMemory(e):this._classBreaksFromInterpolation(e)}async queryFeatureCount(e){const{whereClause:t,view:i,signal:o}=e;if(!i)throw new r("ogc-feature-layer-adapter:insufficient-data","view is required to fetch the features from layerView");const n=this.layer.createQuery();n.where=u(n.where,t);const p=await i.whenLayerView(this.layer);return await a((()=>!p.updating),s(o)),p.queryFeatureCount(n,{signal:o})}generateRenderer(e,t){throw new r("ogc-feature-layer-adapter:not-supported","OGCFeatureLayer does not support generateRenderer operation")}async predominantCategories(e){const{fields:t,view:r,signal:s}=e,a=n(t),i=await this._uvFromMemory({valueExpression:a,view:r,signal:s});return m(i.uniqueValueInfos,t)}async getSampleFeatures(e,s){const{view:a,sampleSize:i,requiredFields:o,returnGeometry:n,signal:u}=e,p=this.layer.createQuery(),l=1;if(p.outSpatialReference=e.spatialReference||a&&a.spatialReference,p.returnGeometry=!!n,p.outFields=o,!a)throw new r("ogc-feature-layer-adapter:not-supported","view is required to get sample features for OGCFeatureLayer");const c=await a.whenLayerView(this.layer);if((await y(this,o,c)).length)throw new r("ogc-feature-layer-adapter:not-supported","Required fields need to be passed in the outFields for OGCFeatureLayer");const d=await this._fetchFeaturesFromMemory(c,p,u,s);return t(d,i>0&&i<=d.length?i:d.length,l)}load(e){const t=this.layer.load(e).then((async t=>{this.geometryType=t.geometryType,this.objectIdField=t.objectIdField,this.supportsSQLExpression=t.get("capabilities.query.supportsSqlExpression"),this.minScale=t.minScale,this.maxScale=t.maxScale,this.fullExtent=t.fullExtent,this.workerClient=p.getInstance(),await this.workerClient.open(s(s(e).signal))}));return this.addResolvingPromise(t),Promise.resolve(this)}};w=e([i("esri.smartMapping.support.adapters.OGCFeatureLayerAdapter")],w);const g=w;export{g as default};