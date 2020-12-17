/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,t,r){"use strict";e.createRenderer=async function(e){const a=[(e=await r.processRasterRendererParameters(e)).bandId||0],n={bandIds:a,stretchType:e.stretchType},s=e.layer,{rasterInfo:d}=s;let i=t.createStretchRenderer(d,n);return e.estimateStatisticsHistograms&&i.dynamicRangeAdjustment&&(await s.updateRasterInfoWithEstimatedStats({renderingRule:e.renderingRule,signal:e.signal}),i=t.createStretchRenderer(d,n)),function(e,t){const{gamma:r,useGamma:a,dynamicRangeAdjustment:n,colorRamp:s}=t;null!=r&&(e.gamma=[r]);null!=a&&(e.useGamma=a);null!=n&&(e.dynamicRangeAdjustment=n);void 0!==s&&(e.colorRamp=s)}(i,e),{renderer:i,bandId:a[0]}},Object.defineProperty(e,"__esModule",{value:!0})}));
