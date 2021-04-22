/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../core/maybe","../../core/Error","../../layers/support/fieldUtils","../support/utils","./support/utils","../support/adapters/support/layerUtils"],(function(e,t,a,i,s,r){"use strict";const l=a.numericTypes;async function n(a){if(!(a&&a.layer&&a.view))throw new t("heatmap-statistics:missing-parameters","'layer' and 'view' parameters are required");const n=[0,2,1],{layer:p,...o}=a,u=r.createLayerAdapter(p,n),c={layerAdapter:u,...o};if(c.blurRadius=null==c.blurRadius?10:c.blurRadius,!u)throw new t("heatmap-statistics:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(n).join(", "));const d=e.isSome(c.signal)?{signal:c.signal}:null;await u.load(d);const y=c.field,f=y?u.getField(y):null,m=await i.getFieldsList({field:y}),w=s.verifyBasicFieldValidity(u,m,"heatmap-statistics:invalid-parameters");if(w)throw w;if(f){const e=s.verifyFieldType(u,f,"heatmap-statistics:invalid-parameters",l);if(e)throw e}return c}async function p(e){const{layerAdapter:t,...a}=await n(e);return t.heatmapStatistics(a)}return p}));
