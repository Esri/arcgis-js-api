// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/has","dojo/json","dojo/Stateful","./storeUtils","./SpatialReferences","./JobsViewModel","../../kernel","../../lang"],(function(t,e,s,i,o,r,n,a,l,h,c,u){var S=t([n],{declaredClass:"esri.dijit.analysis.SettingsViewModel",showHelp:!0,showOverwriteResultOption:!0,showCloseAnalysisOption:!0,showStoreAnalysisOption:!0,showCoordinateSystems:!0,showOutSR:!0,showProcessSR:!0,showExtent:!0,showRasterSettings:!0,showGeoAnalyticsSettings:!0,showRasterPPFSettings:!1,showRasterPTSettings:!1,showRasterSnapSettings:!0,showCreditWarningSettings:!0,showResamplingSettings:!1,showCloseIcon:!0,showHeader:!0,showOkCancel:!0,showJobsHistory:!1,isCustomExtent:!1,layers:null,viewProps:null,closeAnalysisWidget:!0,returnFeaturCollection:!1,jobsViewModel:null,geoAnalyticsServer:null,creditWarning:!0,spatialRefStore:a.createHierarchicalStore({data:l}),spatialRefData:l,constructor:function(t){var s=this.get("saveModel");s&&s.layers&&t.layers?(this._arrayUnique(t.layers.concat(s.layers),"name"),delete s.layers,e.mixin(t,s)):e.mixin(t,s),this.watch("showJobsHistory",e.hitch(this,this.updateJobsVM)),this.watch("portalUrl",e.hitch(this,this.updateJobsVM)),this.watch("jobsHistoryItem",e.hitch(this,this.updateJobsVM))},_showCloseIconSetter:function(t){this.showCloseIcon=t},_showHelpSetter:function(t){this.showHelp=t},_showOverwriteResultOptionSetter:function(t){this.showOverwriteResultOption=t},_showCloseAnalysisOptionSetter:function(t){this.showCloseAnalysisOption=t},_showStoreAnalysisOptionSetter:function(t){this.showStoreAnalysisOption=t},_showCoordinateSystemsSetter:function(t){this.showCoordinateSystems=t},_showExtentSetter:function(t){this.showExtent=t},_showRasterSettingsSetter:function(t){this.showRasterSettings=t},_showRasterPPFSettingsSetter:function(t){this.showRasterPPFSettings=t},_showRasterPTSettingsSetter:function(t){this.showRasterPTSettings=t},_showRasterSnapSettingsSetter:function(t){this.showRasterSnapSettings=t},_returnFeatureCollectionSetter:function(t){this.returnFeatureCollection=t},_closeAnalysisWidgetSetter:function(t){this.closeAnalysisWidget=t},_overwriteResultSetter:function(t){this.overwriteResult=t},_outSRSetter:function(t){this.outSR=t},_processSRSetter:function(t){this.processSR=t},_extentSetter:function(t){this.extent=t},_snapRasterSetter:function(t){this.snapRaster=t},_cellSizeSetter:function(t){this.cellSize=t},_maskSetter:function(t){this.mask=t},_layersSetter:function(t){this.layers=t},_showHeaderSetter:function(t){this.showHeader=t},_showOutSRSetter:function(t){this.showOutSR=t,this.set("outSR",t?this.outSR:void 0)},_showProcessSRSetter:function(t){this.showProcessSR=t,this.set("processSR",t?this.processSR:void 0)},_showOkCancelSetter:function(t){this.showOkCancel=!0},_isCustomExtentSetter:function(t){this.isCustomExtent=t},_isCustomOutSRSetter:function(t){this.isCustomOutSR=t},_isCustomProcessSRSetter:function(t){this.isCustomProcessSR=t},_isCustomCellSizeSetter:function(t){this.isCustomCellSize=t},_showGeoAnalyticsSettingsSetter:function(t){this.showGeoAnalyticsSettings=t},_datastoreSetter:function(t){this.datastore=t},_portalUrlSetter:function(t){this.portalUrl=t},_jobsHistoryItemSetter:function(t){this.jobsHistoryItem=t},_viewPropsSetter:function(t){this.viewProps=t},_saveModelGetter:function(){var t;return window.localStorage&&(t=window.localStorage.getItem("esri_analysis_settings"))&&(t=r.parse(t)),t},_saveModelSetter:function(t){t||(t={isCustomExtent:this.isCustomExtent,isCustomOutSR:this.isCustomOutSR,isCustomProcessSR:this.isCustomProcessSR,isCustomCellSize:this.isCustomCellSize,outSR:this.outSR,processSR:this.processSR,extent:this.extent,cellSize:this.cellSize,snapRaster:this.snapRaster,mask:this.mask,datastore:this.datastore,viewProps:this.viewProps,closeAnalysisWidget:this.closeAnalysisWidget,returnFeatureCollection:this.returnFeatureCollection,processorType:this.processorType,parallelProcessingFactor:this.parallelProcessingFactor,recycleProcessingWorkers:this.recycleProcessingWorkers,retryOnFailures:this.retryOnFailures,resamplingMethod:this.resamplingMethod,creditWarning:this.creditWarning},this.layers&&this.layers.length>0&&(t.layers=s.map(this.layers,(function(t){return{name:t.name,url:t.url,fullExtent:t.fullExtent,type:t.type,format:t.format}})))),window.localStorage&&t&&window.localStorage.setItem("esri_analysis_settings",r.stringify(t))},_geoAnalyticsServerSetter:function(t){this.geoAnalyticsServer=t},_processorTypeSetter:function(t){this.processorType=t},_parallelProcessingFactorSetter:function(t){this.parallelProcessingFactor=t},_recycleIntervalOfProecssingWorkersSetter:function(t){this.recycleIntervalOfProecssingWorkers=t},_numberOfRetriesOnRandomFailureSetter:function(t){this.numberOfRetriesOnRandomFailure=t},_resamplingMethodSetter:function(t){this.resamplingMethod=t},_creditWarningSetter:function(t){this.creditWarning=t},save:function(){this.set("saveModel")},reset:function(){e.mixin(this,this.get("saveModel"))},updateJobsVM:function(){this.showJobsHistory&&this.portalUrl&&this.jobsHistoryItem&&(this.jobsViewModel||(this.jobsViewModel=new h({portalUrl:this.portalUrl,item:this.jobsHistoryItem}),this.watch("jobsHistoryItem",e.hitch(this,(function(){this.jobsViewModel.set("item",this.jobsHistoryItem)}))),this.watch("portalUrl",e.hitch(this,(function(){this.jobsViewModel.set("portalUrl",this.portalUrl)})))))},_arrayUnique:function(t,e){for(var s=t.concat(),i=0;i<s.length;++i)for(var o=i+1;o<s.length;++o)(!e&&s[i]===s[o]||e&&s[i][e]===s[o][e])&&s.splice(o--,1);return s}});return o("extend-esri")&&e.setObject("dijit.analysis.SettingsViewModel",S,c),S}));