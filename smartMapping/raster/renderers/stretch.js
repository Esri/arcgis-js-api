/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,t,r){"use strict";async function a(e){const a=[(e=await r.processRasterRendererParameters(e)).bandId||0],s={bandIds:a,stretchType:e.stretchType},d=e.layer,{rasterInfo:i}=d;let c=t.createStretchRenderer(i,s);return e.estimateStatisticsHistograms&&c.dynamicRangeAdjustment&&(await d.updateRasterInfoWithEstimatedStats({renderingRule:e.renderingRule,signal:e.signal}),c=t.createStretchRenderer(i,s)),n(c,e),{renderer:c,bandId:a[0]}}function n(e,t){const{gamma:r,useGamma:a,dynamicRangeAdjustment:n,colorRamp:s}=t;null!=r&&(e.gamma=[r]),null!=a&&(e.useGamma=a),null!=n&&(e.dynamicRangeAdjustment=n),void 0!==s&&(e.colorRamp=s)}e.createRenderer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
