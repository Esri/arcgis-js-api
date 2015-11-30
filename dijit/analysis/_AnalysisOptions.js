// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/has","../../kernel"],function(t,e,s,o,i,n){var r=t([],{declaredClass:"esri.dijit.analysis._AnalysisOptions",showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,showCloseIcon:!0,showSelectAnalysisLayer:!1,map:null,showReadyToUseLayers:!0,showAnalysisBusyIndicator:!0,constructor:function(){},_setShowSelectFolderAttr:function(t){t===!0&&t===this.get("returnFeatureCollection")&&(t=!t),this.showSelectFolder=t,this._webMapFolderSelect&&this._webMapFolderSelect.set("required",t)},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(t){this.showChooseExtent=t},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setMapAttr:function(t){this.map=t},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(t){this.showHelp=t},_getShowHelpAttr:function(){return this.showHelp},_setReturnFeatureCollectionAttr:function(t){this.returnFeatureCollection=t,t&&this.set("showSelectFolder",!t)},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setShowCreditsAttr:function(t){this.showCredits=t},_getShowCreditsAttr:function(){return this.showCredits},_setShowCloseIconAttr:function(t){this.showCloseIcon=t},_getShowCloseIconAttr:function(){return this.showCloseIcon},_setShowSelectAnalysisLayerAttr:function(t){this.showSelectAnalysisLayer=t},_getShowSelectAnalysisLayerAttr:function(){return this.showSelectAnalysisLayer},_setIsSingleTenantAttr:function(t){this.isSingleTenant=t},_getIsSingleTenantAttr:function(){return this.isSingleTenant},_setAllowChooseLabelAttr:function(t){this.allowChooseLabel=t},_getAllowChooseLabelAttr:function(){return this.allowChooseLabel},_setTitleAttr:function(t){this.title=t,this._toolTitle&&s.set(this._toolTitle,"innerHTML",t)},_getTitleAttr:function(){return this.title=s.get(this._toolTitle,"innerHTML"),this.title},_setShowReadyToUseLayersAttr:function(t){this.showReadyToUseLayers=t},_getShowReadyToUseLayersAttr:function(){return this.showReadyToUseLayers},_setFolderIdAttr:function(t){this.folderId=t},_getFolderIdAttr:function(){return this._webMapFolderSelect&&this.folderStore&&(this.folderId=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):""),this.folderId},_setFolderNameAttr:function(t){this.folderName=t},_getFolderNameAttr:function(){return this._webMapFolderSelect&&this.folderStore&&this._webMapFolderSelect.item&&(this.folderName=this.folderStore.getValue(this._webMapFolderSelect.item,"name")),this.folderName},_setHelperServicesAttr:function(t){this.helperServices=t},_getHelperServicesAttr:function(){return this.helperServices},_getPortalSelfAttr:function(){return this.portalSelf},_setPortalSelfAttr:function(t){this.portalSelf=t},_setShowAnalysisBusyIndicatorAttr:function(t){t&&this.own(this.on("start",e.hitch(this,function(){this.showLoadingIndicator()})),this.on("job-fail, job-result, job-cancel",e.hitch(this,function(){this.hideLoadingIndicator()})))},showLoadingIndicator:function(){this.get("showAnalysisBusyIndicator")&&(this._saveBtn.set("iconClass","esriLoading"),this.set("disableRunAnalysis",!0))},hideLoadingIndicator:function(){this.get("showAnalysisBusyIndicator")&&(this._saveBtn.set("iconClass",""),this.set("disableRunAnalysis",!1))}});return i("extend-esri")&&e.setObject("dijit.analysis._AnalysisOptions",r,n),r});