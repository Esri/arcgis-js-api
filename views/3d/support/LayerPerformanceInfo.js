/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isPerformanceInfoLayerView as e}from"../layers/support/PerformanceInfoLayerView.js";import{isSurfaceLayerView as r}from"../terrain/terrainUtils.js";class t{constructor(t,s){if(this.layer=null,this.memory=0,this.displayedNumberOfFeatures=0,this.maximumNumberOfFeatures=null,this.totalNumberOfFeatures=null,this.layer=t.layer,this.memory=r(t)?s.basemapTerrain.getUsedMemoryForLayerView(t):t.getUsedMemory(),e(t)){const e=t.performanceInfo;this.displayedNumberOfFeatures=e.displayedNumberOfFeatures,this.maximumNumberOfFeatures=e.maximumNumberOfFeatures,this.totalNumberOfFeatures=e.totalNumberOfFeatures}}}export{t as default};
