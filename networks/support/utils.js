/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../layers/support/featureQueryAll","../../rest/support/FeatureSet"],(function(e,r,t,o){"use strict";function n(e,r){const t=[],o=new Map;for(const u of r){const r=e.getLayerIdBySourceId(u.networkSourceId);let t=o.get(r);void 0===t&&(t=[]),t.push(u.objectId),o.set(r,t)}const n=e.featureServiceUrl;return o.forEach(((e,r)=>t.push({layerUrl:`${n}/${r}`,objectIds:e}))),t}function u(e){return l.apply(this,arguments)}function l(){return l=r._asyncToGenerator((function*(e){const n=e.layers,u=e.layerInfos,l=e.returnGeometry||!1,s=e.outSpatialReference;yield Promise.all(n.map((e=>e.load())));const a=yield Promise.all(n.map(function(){var e=r._asyncToGenerator((function*(e){var r;const n=u.find((r=>{var t;return r.layerUrl===(null==(t=e.parsedUrl)?void 0:t.path)}));if(!n||null==(r=n.objectIds)||!r.length)return{layer:e,featureSet:void 0};const a=e.createQuery();a.returnGeometry=l,a.outFields=n.outFields||["*"],a.outSpatialReference=s,a.gdbVersion=e.gdbVersion,a.objectIds=n.objectIds;const c=o.fromJSON(yield t.queryAllJSON(e,a));return{layer:e,featureSet:c}}));return function(r){return e.apply(this,arguments)}}()));return a.filter((e=>void 0!==e.featureSet))})),l.apply(this,arguments)}e.getFeaturesFromLayers=u,e.getObjectIdsFromElements=n,Object.defineProperty(e,"__esModule",{value:!0})}));
