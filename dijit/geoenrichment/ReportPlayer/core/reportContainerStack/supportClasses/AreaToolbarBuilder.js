// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/dom-construct","esri/dijit/geoenrichment/lists/FlowList","dojo/i18n!esri/nls/jsapi"],function(e,n,r){r=r.geoenrichment.dijit.ReportPlayer.ReportContainerStackAll;var a={};return a.buildGroupToolbar=function(a,o){var i=e.create("div",{class:"dijitInline innerContainerRoot_groupLabelContainer"},o.groupLabelsContainer);if(i.style.width=o.elementSize*a.areas.length+o.gap*(a.areas.length-1)+"px",o.showGroupLabels){e.create("div",{class:"innerContainerRoot_groupLabelLabel",innerHTML:a.label},i).style.opacity=a.hideGroupLabel?"0.001":"",a.areas.length>1&&e.create("div",{class:"innerContainerRoot_groupLabelUnderline"},i)}a.areas.forEach(function(a){var t=e.create("div",{class:"dijitInline innerContainerRoot_areaLabelContainer"},i);t.style.width=o.elementSize+"px";var l=e.create("div",{class:"innerContainerRoot_areaLabelLabel"},t);e.create("div",{class:"dijitInline",innerHTML:a.shortName||a.name},l);var s=o.benchmarkController.getAreaIndex()===a.index;if(s&&e.create("div",{class:"dijitInline esriGESpaceBeforeBig innerContainerRoot_areaLabelBenchmarkIndicator",innerHTML:r.benchmark},l),o.numVisibleAreas>1){var c=e.create("div",{class:"dijitInline esriGESpaceBeforeBig innerContainerRoot_moreOptionsButton"},l);(o.reportContainer.__toolbarMoreOptionsLists=o.reportContainer.__toolbarMoreOptionsLists||[]).push(n.createPopup({wizard:o.reportContainer,aroundNode:c,options:[{value:"toggleBenchmark",label:s?r.removeBenchmark:r.makeBenchmark},{value:"removeArea",label:r.removeArea,hidden:o.numVisibleAreas<3}],listClass:"esriGEFlowListWhiteBackground esriGEFlowListSpacedOut",doNotOwn:!0,onChange:function(e){"toggleBenchmark"==e.value?o.benchmarkController.getAreaIndex()===a.index?o.benchmarkController.setAreaIndex(-1):o.benchmarkController.setAreaIndex(a.index):o.onRemoveArea(a)}}))}})},a.sanitize=function(e){var n=e.__toolbarMoreOptionsLists;delete e.__toolbarMoreOptionsLists,n&&n.forEach(function(e){e.destroy()})},a});