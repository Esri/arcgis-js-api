// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/json","dojo/Stateful","./customgp/utils","../../kernel","../../lang"],function(t,e,s,i,r,a,n,o,h){var l=t([a],{declaredClass:"esri.dijit.analysis.GPWidgetViewModel",constructor:function(t){this.watch("taskUrl",e.hitch(this,this.fetchTaskInfo))},_taskUrlSetter:function(t){this.taskUrl=t},_taskInfoSetter:function(t){this.taskInfo=t},_serverInfoSetter:function(t){this.serverInfo=t},_inputParamsSetter:function(t){this.inputParams=t},_outputParamsSetter:function(t){this.outputParams=t},_nameSetter:function(t){this.name=t},_titleSetter:function(t){this.title=t},_mapSetter:function(t){this.map=t},_analysisLayersSetter:function(t){this.analysisLayers=t},_portalUrlSetter:function(t){this.portalUrl=t},fetchTaskInfo:function(){this.taskUrl&&n.getServiceDescription(this.taskUrl).then(e.hitch(this,function(t){this.set("serverInfo",t.serverInfo),this.set("title",t.displayName),this.set("name",this.taskUrl.substring(this.taskUrl.indexOf("GPServer/")+"GPServer/".length));var e=[],i=[];s.forEach(t.parameters,function(t){t.label=t.displayName,delete t.displayName,"esriGPParameterDirectionInput"===t.direction?e.push(t):i.push(t),delete t.direction,t.visible=!0,"esriGPParameterTypeRequired"===t.parameterType?t.required=!0:t.required=!1,delete t.parameterType,"GPFeatureRecordSetLayer"===t.dataType&&(t.analysisLayers=this.analysisLayers,t.featureSetMode="layers")},this),this.set("gp",this.taskUrl),this.set("inputParams",e),this.set("outputParams",i)}),e.hitch(this,function(t){console.log("Error fetching GP Task",t)}))}});return i("extend-esri")&&e.setObject("dijit.analysis.GPWidgetViewModel",l,o),l});