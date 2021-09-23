/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","../../geometry/support/scaleUtils","../../renderers/visualVariables/SizeVariable","../statistics/spatialStatistics","../support/adapters/support/layerUtils"],(function(e,t,r,i,a,n,s){"use strict";const o=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];function l(e){return p.apply(this,arguments)}function p(){return(p=e._asyncToGenerator((function*(e){const{view:i}=e;if(!(e&&i&&e.layer))throw new t("outline:missing-parameters","'view' and 'layer' parameters are required");const{layer:a,...n}=e,o=s.createLayerAdapter(a,s.featureCapableLayerTypes),l={layerAdapter:o,...n};if(!o)throw new t("outline:invalid-parameters","'layer' must be one of these types: "+s.getLayerTypeLabels(s.featureCapableLayerTypes).join(", "));yield i.when();const p=r.isSome(l.signal)?{signal:l.signal}:null;if(yield o.load(p),"polygon"!==o.geometryType)throw new t("outline:not-supported",`outline is not supported for geometryType: ${o.geometryType}`);return l}))).apply(this,arguments)}function u(e,t){const r=e.avgSize,n=i.getScaleForResolution(1,t.spatialReference),s=o.map((e=>({size:e.width,value:Math.round(r/e.size*n)})));s.sort(((e,t)=>e.value-t.value));return{visualVariables:[new a({target:"outline",valueExpression:"$view.scale",stops:s})],opacity:.25}}function y(e){return c.apply(this,arguments)}function c(){return(c=e._asyncToGenerator((function*(e){const{layerAdapter:r,...i}=yield l(e),a=-1,s=yield r.getSampleFeatures({sampleSize:a,returnGeometry:!0,...i}),o=yield n({features:s,geometryType:r.geometryType});if(!("avgSize"in o)||!o.avgSize)throw new t("outline:insufficient-info","average polygon size is invalid");return u(o,i.view)}))).apply(this,arguments)}return y}));
