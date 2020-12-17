/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../layers/support/PerformanceInfoLayerView","../terrain/terrainUtils"],(function(e,r){"use strict";return function(t,a){if(this.layer=null,this.memory=0,this.displayedNumberOfFeatures=0,this.maximumNumberOfFeatures=null,this.totalNumberOfFeatures=null,this.layer=t.layer,this.memory=r.isSurfaceLayerView(t)?a.basemapTerrain.getUsedMemoryForLayerView(t):t.getUsedMemory(),e.isPerformanceInfoLayerView(t)){const e=t.performanceInfo;this.displayedNumberOfFeatures=e.displayedNumberOfFeatures,this.maximumNumberOfFeatures=e.maximumNumberOfFeatures,this.totalNumberOfFeatures=e.totalNumberOfFeatures}}}));
