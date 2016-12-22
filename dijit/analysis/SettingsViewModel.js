// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/has","dojo/Stateful","./storeUtils","./SpatialReferences","../../kernel","../../lang"],function(t,e,s,o,i,n,r,h,a,l){var c=t([n],{declaredClass:"esri.dijit.charts.SettingsViewModel",showHelp:!0,showOverwriteResultOption:!0,showCloseAnalysisOption:!0,showStoreAnalysisOption:!0,showCoordinateSystems:!0,showOutSR:!0,showProcessSR:!0,showExtent:!0,showRasterSettings:!0,showCloseIcon:!0,showHeader:!0,showOkCancel:!0,layers:null,spatialRefStore:r.createHierarchicalStore({data:h}),spatialRefData:h,constructor:function(t){},_showCloseIconSetter:function(t){this.showCloseIcon=t},_showHelpSetter:function(t){this.showHelp=t},_showOverwriteResultOptionSetter:function(t){this.showOverwriteResultOption=t},_showCloseAnalysisOptionSetter:function(t){this.showCloseAnalysisOption=t},_showStoreAnalysisOptionSetter:function(t){this.showStoreAnalysisOption=t},_showCoordinateSystemsSetter:function(t){this.showCoordinateSystems=t},_showExtentSetter:function(t){this.showExtent=t},_showRasterSettingsSetter:function(t){this.showRasterSettings=t},_returnFeatureCollectionSetter:function(t){this.returnFeaturCollection=t},_closeAnalysisWidgetSetter:function(t){this.closeAnalysisWidget=t},_overwriteResultSetter:function(t){this.overwriteResult=t},_outSRSetter:function(t){this.outSR=t},_processSRSetter:function(t){this.processSR=t},_extentSetter:function(t){this.extent=t},_snapRasterSetter:function(t){this.snapRaster=t},_cellSizeSetter:function(t){this.cellSize=t},_maskSetter:function(t){this.mask=t},_layersSetter:function(t){this.layers=t},_showHeaderSetter:function(t){this.showHeader=t},_showOutSRSetter:function(t){this.showOutSR=t,this.set("outSR",t?this.outSR:void 0)},_showProcessSRSetter:function(t){this.showProcessSR=t,this.set("processSR",t?this.processSR:void 0)},_showOkCancelSetter:function(t){this.showOkCancel=!0}});return i("extend-esri")&&e.setObject("dijit.analysis.SettingsViewModel",c,a),c});