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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/json","dojo/Stateful","dojo/topic","./utils","./storageUtils","../../kernel","../../lang"],function(t,o,e,i,s,n,r,a,h,c,l){var b=t([n],{declaredClass:"esri.dijit.analysis.JobsViewModel",constructor:function(t){this.watch("item",o.hitch(this,this.fetchJobs))},_portalUrlSetter:function(t){this.portalUrl=t},_itemSetter:function(t){this.item=t},_jobsSetter:function(t){this.jobs=t},_currentJobSetter:function(t){t&&t.jobParams&&a.jobParamsToWidgetProps(t).then(o.hitch(this,function(t){this.currentJob=t,r.publish("analysis/jobs/selectedjob",this.currentJob,this.item)}))},fetchJobs:function(){this.portalUrl&&this.item&&h.getResourcesInfo(this.item,{portalUrl:this.portalUrl}).then(o.hitch(this,function(t){t=e.filter(t,function(t){return l.isDefined(t.toolName)&&l.isDefined(t.jobInfo)&&l.isDefined(t.jobParams)}),this.set("jobs",t)}),o.hitch(this,function(t){console.log("Error fetching jobs",t)}))}});return i("extend-esri")&&o.setObject("dijit.analysis.JobsViewModel",b,c),b});