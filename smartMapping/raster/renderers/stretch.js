/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createStretchRenderer as t}from"../../../renderers/support/rasterRendererHelper.js";import{processRasterRendererParameters as e}from"../support/utils.js";async function a(a){const r=[(a=await e(a)).bandId||0],s={bandIds:r,stretchType:a.stretchType,includeStatisticsInStretch:a.includeStatisticsInStretch},i=a.layer,{rasterInfo:m}=i;let d=t(m,s);return a.estimateStatisticsHistograms&&d.dynamicRangeAdjustment&&(await i.updateRasterInfoWithEstimatedStats({renderingRule:a.renderingRule,signal:a.signal}),d=t(m,s)),n(d,a),{renderer:d,bandId:r[0]}}function n(t,e){const{gamma:a,useGamma:n,dynamicRangeAdjustment:r,colorRamp:s}=e;null!=a&&(t.gamma=[a]),null!=n&&(t.useGamma=n),null!=r&&(t.dynamicRangeAdjustment=r),void 0!==s&&(t.colorRamp=s)}export{a as createRenderer};
